import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import Login from "./pages/login";
import NotFound from "./pages/notFound";


export default function Navegation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
