import { Route, Routes } from "react-router-dom";
import { CounterPage } from "../pages/CounterPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
  );
}
