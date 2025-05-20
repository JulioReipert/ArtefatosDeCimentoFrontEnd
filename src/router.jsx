import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import PrincipalCliente from "./pages/principal-cliente";
import PrincipalMaterial from "./pages/principal-material";
import PrincipalProduto from "./pages/principal-produto";
import PrincipalPedido from "./pages/principal-pedidos";

export default function Navegation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal-cliente" element={<PrincipalCliente />} />
        <Route path="/principal-produto" element={<PrincipalProduto />} />
        <Route path="/principal-material" element={<PrincipalMaterial />} />
        <Route path="/principal-pedido" element={<PrincipalPedido />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
