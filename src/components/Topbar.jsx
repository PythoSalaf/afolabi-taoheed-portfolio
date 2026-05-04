import { Link, useLocation, useNavigate } from "react-router";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { LuMoon } from "react-icons/lu";
import { NAV, PROFILE } from "./DummyData";
import { useState } from "react";
const Topbar = ({
  mode,
  setMode,
  theme,
  setTheme,
  // onMobileOpen,
  // sidebarCollapsed,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState();
  const title =
    NAV.find((n) => {
      if (n.id === "/") return location.pathname === "/";
      return location.pathname.startsWith(`/${n.id}`);
    })?.label ?? "Overview";
  const current = NAV.find((n) => {
    if (n.id === "/") return location.pathname === "/";
    return location.pathname.startsWith(`/${n.id}`);
  });

  const showFilter = current?.id === "projects";
  const tabBase = "px-3 py-1.5 text-xs font-mono rounded-md transition-colors";
  const isActiveTab = (m) => mode === m;

  const handleHire = () => {
    navigate("/contact");
    setToggle(false);
  };

  return (
    <div className="w-full h-16 border-b glass ">
      <div className="w-[95%] mx-auto flex items-center h-full">
        <div className="grid text-sm font-bold text-white rounded-lg md:hidden md:text-base w-9 h-9 lg:w-10 lg:h-10 place-items-center font-display bg-linear-to-br from-web2 to-web3 shrink-0">
          {PROFILE.initials}
        </div>
        <h1 className="hidden text-base font-semibold leading-none md:block md:text-lg font-display">
          {title}
        </h1>
        {showFilter && (
          <div className="items-center hidden gap-1 p-1 ml-6 border rounded-lg sm:flex bg-card/60">
            <button
              onClick={() => setMode("all")}
              className={`${tabBase} ${isActiveTab("all") ? "bg-linear-to-r from-web2 to-web3 text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              All
            </button>
            <button
              onClick={() => setMode("web2")}
              className={`${tabBase} ${isActiveTab("web2") ? "bg-web2 text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Web2
            </button>
            <button
              onClick={() => setMode("web3")}
              className={`${tabBase} ${isActiveTab("web3") ? "bg-web3 text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Web3
            </button>
          </div>
        )}
        <div className="flex items-center gap-2 ml-auto md:gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border bg-card/60">
            <span className="relative flex size-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-success" />
              <span className="relative inline-flex rounded-full size-2 bg-success" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Open to Work
            </span>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden p-2 rounded-md md:block hover:bg-accent text-muted-foreground"
            aria-label="theme"
          >
            {theme === "dark" ? (
              <MdOutlineWbSunny className="size-4" />
            ) : (
              <LuMoon className="size-4" />
            )}
          </button>

          <button
            className="hidden px-3 py-2 text-xs font-semibold text-white transition rounded-lg shadow-lg md:block md:px-4 md:text-sm bg-linear-to-r from-web2 to-web3 hover:opacity-90 shadow-web3/20"
            onClick={() => navigate("/contact")}
          >
            Hire Me
          </button>
          <div className="flex items-center justify-center rounded-full h-9 w-9 bg-linear-to-br from-web2 to-web3 md:hidden">
            {toggle ? (
              <IoMdClose
                className="font-bold size-5"
                onClick={() => setToggle(false)}
              />
            ) : (
              <IoMenu
                className="font-bold size-5"
                onClick={() => setToggle(true)}
              />
            )}
          </div>
        </div>
      </div>
      {toggle && (
        <div className="absolute w-full h-screen text-white bg-black/95">
          <div className="w-[95%] mx-auto space-y-7 mt-5">
            {NAV.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                  to={item.id}
                  onClick={() => setToggle(!toggle)}
                  className="relative w-full flex items-center gap-4 px-3 py-2.5 rounded-md text-sm lg:text-[15px] font-body transition-all duration-150
      text-muted-foreground border-b-2 "
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
            <button
              className="w-full px-3 py-2 mt-3 text-xs font-semibold text-white transition rounded-lg shadow-lg cursor-pointer md:px-4 md:text-sm bg-linear-to-r from-web2 to-web3 hover:opacity-90 shadow-web3/20"
              onClick={handleHire}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
