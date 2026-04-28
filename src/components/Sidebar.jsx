import { LuPanelLeftClose, LuPanelLeftOpen, LuMail } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import {
  FaWrench,
  FaGraduationCap,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FiBriefcase, FiMessageCircle } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";

import { NAV, PROFILE } from "./DummyData";
import { NavLink } from "react-router";

const Sidebar = ({ collapsed, onToggle, mode }) => {
  const accent =
    mode === "web2"
      ? "text-[color:var(--web2)]"
      : mode === "web3"
        ? "text-[color:var(--web3)]"
        : "text-gradient";

  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    { icon: FiMessageCircle, href: "/messages", label: "Messages" },
  ];

  return (
    <div className="flex flex-col w-full h-screen glass">
      {/* HEADER */}
      <div className="flex items-center h-16 gap-3 px-3 border-b shrink-0">
        <div className="grid text-sm font-bold text-white rounded-lg md:text-base w-9 h-9 lg:w-10 lg:h-10 place-items-center font-display bg-linear-to-br from-web2 to-web3 shrink-0">
          {PROFILE.initials}
        </div>

        {!collapsed && (
          <div className="min-w-0">
            <div className="text-[15px] font-semibold truncate ">
              {PROFILE.name}
            </div>
            <div className={`text-xs  font-mono ${accent} truncate`}>
              {mode === "all" ? "WEB2 · WEB3" : mode.toUpperCase()} MODE
            </div>
          </div>
        )}

        <button
          onClick={onToggle}
          className="ml-auto p-1.5 rounded-md hover:bg-accent text-muted-foreground"
          aria-label="Toggle sidebar"
        >
          {collapsed ? (
            <LuPanelLeftOpen className="w-4 h-4" />
          ) : (
            <LuPanelLeftClose className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* NAV (SCROLLABLE WHEN EXPANDED) */}
      <nav
        className={`flex flex-col mt-4 gap-y-1 flex-1 px-2 ${
          collapsed ? "overflow-visible" : "overflow-y-auto"
        }`}
      >
        {NAV.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.id}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                `group relative w-full flex items-center ${
                  collapsed ? "justify-center" : "gap-4"
                } px-3 py-2.5 rounded-md text-sm lg:text-[15px] font-body transition-all duration-150
                ${
                  isActive
                    ? "bg-accent text-white border-l-2 border-web3 shadow-[inset_0_0_12px_hsl(190_100%_50%/0.06)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50 border-l-2 border-transparent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`w-5 h-5 shrink-0 ${
                      isActive
                        ? "text-web3 drop-shadow-[0_0_6px_hsl(190_100%_50%/0)]"
                        : ""
                    }`}
                  />

                  {!collapsed && <span className="truncate">{item.label}</span>}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* SOCIALS (PINNED TO BOTTOM) */}
      <div className="mt-auto border-t">
        <div
          className={`w-[92%] mx-auto flex ${
            collapsed
              ? "flex-col items-center py-2 gap-2"
              : "items-center justify-between py-3"
          }`}
        >
          {socials.map(({ icon: Icon, href, label }) =>
            href.startsWith("http") ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={collapsed ? label : undefined}
                className="p-2 transition-colors rounded-md text-muted-foreground hover:text-foreground hover:bg-accent shrink-0"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ) : (
              <NavLink
                key={label}
                to={href}
                title={collapsed ? label : undefined}
                className="p-2 transition-colors rounded-md text-muted-foreground hover:text-foreground hover:bg-accent shrink-0"
              >
                <Icon className="w-4 h-4" />
              </NavLink>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
