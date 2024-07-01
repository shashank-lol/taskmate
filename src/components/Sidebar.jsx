import React from "react";
import {
  MdDashboard,
  MdTaskAlt,
  MdOutlinePendingActions,
  MdSettings,
  MdOutlineAddTask,
} from "react-icons/md";
import { FaTasks, FaUsers, FaTrashAlt } from "react-icons/fa";
import { setOpenSidebar } from "../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

const linkData = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Tasks",
    link: "tasks",
    icon: <FaTasks />,
  },
  {
    label: "Completed",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "In Progress",
    link: "in-progress/in progress",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "To Do",
    link: "todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Team",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Trash",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const path = location.pathname.split("/")[1];

  const sidebar = user?.isAdmin ? linkData : linkData.slice(0, 6);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };
  return (
    <div className="w-full h-full flex flex-col gap-6 p-5">
      <h1 className="flex gap-1 items-center">
        <p className="bg-blue-600 p-2 rounded-full ">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black">TaskMate</span>
      </h1>
      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link, index) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
