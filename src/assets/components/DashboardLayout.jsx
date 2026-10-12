

import Sidebar from "./Sidebar";

import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
 return (
  <div
    className="min-h-screen bg-slate-100 flex"
    dir="rtl"
  >
    <Sidebar isOpen={isSidebarOpen} />

    <main className="flex-1 min-w-0">
      <Header
        onToggleSidebar={() =>
          setIsSidebarOpen((prev) => !prev)
        }
      />

      <Outlet />
    </main>
  </div>
);
}

export default DashboardLayout;

