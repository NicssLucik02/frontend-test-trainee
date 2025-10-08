import { useState } from "react";
import style from "./sidebar.module.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { SidebarItem } from "@/types/types";

type Props = {
  item: SidebarItem;
};

export const MenuItem: React.FC<Props> = ({ item }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string[]>([]);

  return (
    <li key={item.title} className={style.menuItem}>
      <p className={style.menuButton}>
        <item.icon className={style.menuItemIcon} />
        {item.title}

        {activeSubmenu.includes(item.title) ? (
          <FaChevronUp
            className={style.menuItemIconArrow}
            onClick={() => {
              setActiveSubmenu((prev) => prev.filter((p) => p !== item.title));
            }}
          />
        ) : (
          <FaChevronDown
            className={style.menuItemIconArrow}
            onClick={() => {
              setActiveSubmenu((prev) => [...prev, item.title]);
            }}
          />
        )}
      </p>

      {activeSubmenu.includes(item.title) && (
        <ul className={style.submenu}>
          {item.submenu?.map((subItem) => {
            return (
              <li key={subItem.link} className={style.submenuItem}>
                <Link href={subItem.link} className={style.submenuItemLink}>
                  {subItem.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
