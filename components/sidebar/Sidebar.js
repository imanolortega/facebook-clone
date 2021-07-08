import {
  DesktopComputerIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import React from "react";
import SidebarRow from "./SidebarRow";
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  const [session, loading] = useSession();
  return (
    <aside className="p-2 mt-5 max-w-[400px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title={"Amigos"} />
      <SidebarRow Icon={UserGroupIcon} title={"Grupos"} />
      <SidebarRow Icon={ShoppingBagIcon} title={"Marketplace"} />
      <SidebarRow Icon={DesktopComputerIcon} title={"Watch"} />
      <SidebarRow Icon={CalendarIcon} title={"Eventos"} />
      <SidebarRow Icon={ClockIcon} title={"Amigos"} />
      <SidebarRow Icon={ChevronDownIcon} title={"Ver más"} />
    </aside>
  );
};

export default Sidebar;
