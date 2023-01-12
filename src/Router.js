import { Routes, Route, Navigate } from "react-router-dom";
import { Exec } from "./routes/Exec";
import { Home } from "./routes/Home";
import { Result } from "./routes/Result";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Exec />} />
      <Route path="/result/:type" element={<Result />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
