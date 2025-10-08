import { IconType } from "react-icons";

export type SubmenuItem = {
  title: string;
  link: string;
};

export type SidebarItem = {
  title: string;
  icon: IconType;
  submenu?: SubmenuItem[];
};
