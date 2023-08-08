import React from "react";
import { Home } from "./page/home/Home";
import { Route, Routes } from "react-router-dom";
import { Subbreed } from "./page/subbreed/Subbreed";
import { Custom } from "./page/custom/Custom";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breed/:breedname" element={<Subbreed />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
    </>
  );
}
