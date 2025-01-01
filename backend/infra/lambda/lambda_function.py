import json
import boto3
from datetime import datetime, timedelta


client = boto3.client("organizations")
ce_client = boto3.client("ce")

today = datetime.now()
first_day_of_current_month = today.replace(day=1)
end_of_last_month = first_day_of_current_month - timedelta(days=1)

START_DATE = end_of_last_month.replace(day=1).strftime("%Y-%m-%d")
END_DATE = first_day_of_current_month.strftime("%Y-%m-%d")


def lambda_handler(event, context):

    if event["httpMethod"] == "GET":
        response = client.list_accounts()
        accounts = response.get("Accounts", [])
        account_ids = [account["Id"] for account in accounts]
        return {
            "statusCode": 200,
            "body": json.dumps(account_ids),
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }

    elif event["httpMethod"] == "POST":
        body = json.loads(event["body"])
        account_id = body.get("account_id")

        # Get cost and usage for the account
        ce_response = ce_client.get_cost_and_usage(
            TimePeriod={"Start": START_DATE, "End": END_DATE},
            Granularity="MONTHLY",
            Filter={"Dimensions": {"Key": "LINKED_ACCOUNT", "Values": [account_id]}},
            Metrics=[
                "UnblendedCost",
            ],
        )
        billing_amount = ce_response["ResultsByTime"][0]["Total"]["UnblendedCost"][
            "Amount"
        ]

        billing_info = {
            "account_id": account_id,
            "monthly_billing": float(billing_amount),
        }

        return {
            "statusCode": 200,
            "body": json.dumps(billing_info),
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }

    return {
        "statusCode": 400,
        "body": json.dumps({"message": "Unsupported method"}),
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    }
