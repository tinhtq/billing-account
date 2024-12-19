import React, { lazy, Suspense } from "react";
import { Routes } from "react-router-dom";
import { PATH } from "../constants/paths";
const Home = lazy(() => import("../pages/Home/Home"));

export default function HomeRoutes() {
  return (
    <Routes>
      <exact path={PATH.HOME} component={() => <Home />} />
    </Routes>
  );
}
