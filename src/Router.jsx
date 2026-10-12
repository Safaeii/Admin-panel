import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Login from "./assets/components/Login";
import Profile from "./assets/components/Profile";
import Transactions from "./assets/components/Transactions";
import DashboardLayout from "./assets/components/DashboardLayout";
import Categories from "./assets/components/Categories";
import Budget from "./assets/components/Budget";
import Accounts from "./assets/components/Accounts";
import Reports from "./assets/components/Reports";
import Settings from "./assets/components/Settings";






function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* صفحه ورود */}
        <Route path="/login" element={<Login />} />

        {/* صفحات پنل مدیریت */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<App />} />

   <Route path="/transactions" element={<Transactions />} />

 <Route path="/reports" element={<Reports />} />

   <Route path="/categories" element={<Categories />} />
          <Route
            path="/budget"
            element={<Budget />}
          />

<Route path="/accounts" element={<Accounts />} />

          <Route
            path="/profile"
            element={<Profile />}
          />

    <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;