import {
  DesktopComputerIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";
import SidebarRow from "./SidebarRow";
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const Sidebar = ({ user }) => {
  return (
    <aside className="p-2 mt-5 max-w-[400px] xl:min-w-[300px] hidden md:block">
      <SidebarRow src={user.photo} title={user.name} />
      <SidebarRow Icon={UsersIcon} title={"Amigos"} blue />
      <SidebarRow Icon={UserGroupIcon} title={"Grupos"} blue />
      <SidebarRow Icon={ShoppingBagIcon} title={"Marketplace"} blue />
      <SidebarRow Icon={DesktopComputerIcon} title={"Watch"} blue />
      <SidebarRow Icon={CalendarIcon} title={"Eventos"} blue />
      <SidebarRow Icon={ClockIcon} title={"Amigos"} blue />
      <SidebarRow Icon={ChevronDownIcon} title={"Ver más"} gray />
    </aside>
  );
};

export default Sidebar;
