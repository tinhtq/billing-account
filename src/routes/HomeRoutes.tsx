import React, { lazy, Suspense } from "react";
import { Routes } from "react-router-dom";
import { PATH } from "src/constants/paths";


const Home = lazy(())
export default function HomeRoutes() {
  return (
    <Routes>
      <exact path={PATH.HOME} component={() => <Home />} />
    </Routes>
  );
}
