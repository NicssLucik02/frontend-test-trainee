import Link from "next/link";
import { MenuItem } from "./MenuItem";
import style from "./sidebar.module.scss";
import { sidebarData } from "./sidebarData";
import Image from "next/image";
import classNames from "classnames";

type Props = {
  active: boolean;
  theme: "dark" | "light";
};

export const Sidebar: React.FC<Props> = ({ active, theme }) => {
  return (
    <>
      <aside
        className={classNames(style.sidebar, {
          [style.open]: active,
          [style.dark]: theme === "dark",
          [style.light]: theme === "light",
        })}
      >
        <div className={style.sidebarContainer}>
          <Link href="/">
            <Image
              src={
                theme === "dark"
                  ? "/logo-sidebar.svg"
                  : "/logo-sidebar-light.svg"
              }
              width={40}
              height={40}
              className={style.sidebarLogo}
              alt="logo"
            />
          </Link>

          <nav className={style.sidebarNav}>
            <ul className={style.menu}>
              {sidebarData.map((item) => {
                return <MenuItem key={item.title} item={item} />;
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
