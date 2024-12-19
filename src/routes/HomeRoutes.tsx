import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PATH } from "../constants/paths";
const Home = lazy(() => import("../pages/Home/Home"));

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
    </Routes>
  );
}
