import React from "react";

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to the Home Page</h1>
        <p>This is an example of a dynamically imported Home component.</p>
      </header>
      <main style={styles.main}>
        <p>Explore the application and enjoy your stay!</p>
        <button style={styles.button} onClick={() => alert("Button clicked!")}>
          Click Me
        </button>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center" as const,
    padding: "20px",
  },
  header: {
    marginBottom: "20px",
  },
  main: {
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;
