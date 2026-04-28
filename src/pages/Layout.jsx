import { Outlet } from "react-router";
import { Sidebar, Topbar } from "../components";
import { useEffect, useState } from "react";

const Layout = () => {
  const [mode, setMode] = useState("all");
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen grain">
      {/* Sidebar (fixed) */}
      <div
        className={`hidden md:block fixed top-0 left-0 h-screen z-40 border-r transition-all duration-300
        ${collapsed ? "w-18" : "w-60"}`}
      >
        <Sidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
          mode={mode}
        />
      </div>

      {/* Main */}
      <div
        className={`transition-all duration-300
        ${collapsed ? "md:ml-18" : "md:ml-60"}`}
      >
        {/* Topbar */}
        <div className="sticky top-0 z-30 ">
          <Topbar
            mode={mode}
            setMode={setMode}
            theme={theme}
            setTheme={setTheme}
            sidebarCollapsed={setCollapsed}
          />
        </div>

        {/* Content */}
        <div className="w-[95%] mx-auto mt-4">
          <Outlet context={{ mode }} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
