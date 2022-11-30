import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import BookPage from "./pages/BookPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ActivateAccount from "./pages/ActivateAccount";
import BookDetailPage from "./pages/BookDetailPage";
import CartPage from "./pages/CartPage";
import LoanPage from "./pages/LoanPage";
import DashboardPage from "./pages/DashboardPage";

const isLogin = localStorage.getItem("accessToken");

export const App = () => (
  <ChakraProvider>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/login" element={ !isLogin ? <LoginPage /> : <Navigate to="/" replace={true} /> } />
          <Route path="/register" element={!isLogin ? <RegisterPage /> : <Navigate to="/" replace={true} /> } />
          <Route path="/activateAccount/:param" element={<ActivateAccount /> } />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/cart" element={isLogin ? <CartPage /> : <Navigate to="/" replace={true} />} />
          <Route path="/loan" element={isLogin ? <LoanPage /> : <Navigate to="/" replace={true} />} />
          <Route path="/dashboard" element={ localStorage.getItem("role") === "Admin" ? <DashboardPage /> : <Navigate to="/" replace={true} />} />
        </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
