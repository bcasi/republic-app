import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CompanyPage from "./pages/company/CompanyPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AuthLayout from "./components/auth/AuthLayout";

function App() {
  return (
    <Routes>
      {/* <Route path="/" index element={<Home />} /> */}
      {/* <Route index element={<Home />} /> */}
      <Route index path="/" element={<CompanyPage />} />
      {/* <Route index element={<CompanyPage />} /> */}

      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default App;
