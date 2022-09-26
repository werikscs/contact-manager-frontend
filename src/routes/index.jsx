import { Routes, Route } from "react-router-dom";
import { CreateContactPage } from "../pages/create-contact";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create-contact" element={<CreateContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
