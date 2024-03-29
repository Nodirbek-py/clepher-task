import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="mt-6 flex items-center gap-6 rounded-lg bg-white px-4 py-2 shadow-sm shadow-white">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "border-b border-b-black text-black no-underline"
            : "border-b border-b-white text-black no-underline"
        }
      >
        Homepage
      </NavLink>
      <NavLink
        to="/task"
        className={({ isActive }) =>
          isActive
            ? "border-b border-b-black text-black no-underline"
            : "border-b border-b-white text-black no-underline"
        }
      >
        Taskpage
      </NavLink>
    </div>
  );
};

export default Navbar;
