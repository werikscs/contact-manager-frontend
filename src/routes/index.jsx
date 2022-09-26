import { Routes, Route } from "react-router-dom";
import { ClientProfilePage } from "../pages/client-profile";
import { CreateContactPage } from "../pages/create-contact";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { ShowContactsPage } from "../pages/show-contacts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create-contact" element={<CreateContactPage />} />
      <Route path="/contacts" element={<ShowContactsPage />} />
      <Route path="/my-profile" element={<ClientProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
