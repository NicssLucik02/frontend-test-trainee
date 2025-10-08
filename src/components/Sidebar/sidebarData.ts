import { FaBox, FaCog, FaShoppingCart, FaUsers } from "react-icons/fa";

export const sidebarData = [
  {
    title: "Users",
    icon: FaUsers,
    submenu: [
      { title: "All Users", link: "/users" },
      { title: "Add User", link: "/users/add" },
      { title: "Roles & Permissions", link: "/users/roles" },
    ],
  },
  {
    title: "Products",
    icon: FaBox,
    submenu: [
      { title: "All Products", link: "/products" },
      { title: "Add Product", link: "/products/add" },
      { title: "Categories", link: "/products/categories" },
    ],
  },
  {
    title: "Orders",
    icon: FaShoppingCart,
    submenu: [
      { title: "All Orders", link: "/orders" },
      { title: "Pending Orders", link: "/orders/pending" },
      { title: "Completed Orders", link: "/orders/completed" },
    ],
  },
  {
    title: "Settings",
    icon: FaCog,
    submenu: [
      { title: "Profile Settings", link: "/settings/profile" },
      { title: "System Settings", link: "/settings/system" },
    ],
  },
];
