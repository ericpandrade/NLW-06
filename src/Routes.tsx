import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export function Router() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/news" element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
