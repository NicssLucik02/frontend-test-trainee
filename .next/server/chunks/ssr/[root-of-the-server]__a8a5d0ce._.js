module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/src/components/Input/input.module.scss [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "input": "input-module-scss-module__1bnTnq__input",
  "inputContainer": "input-module-scss-module__1bnTnq__inputContainer",
  "inputIcon": "input-module-scss-module__1bnTnq__inputIcon",
});
}),
"[project]/src/components/Input/Input.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Input/input.module.scss [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [ssr] (ecmascript)");
;
;
;
;
;
const Input = ({ type = "text", placeholder = "enter text", clearable = false })=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const handleChangeVisible = ()=>{
        setIsVisible((prev)=>!prev);
    };
    const handleClearInput = ()=>{
        setQuery("");
    };
    const inputType = type === "password" ? isVisible ? "text" : "password" : type;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].inputContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                    type: inputType,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].input,
                    placeholder: placeholder,
                    value: query,
                    onChange: (event)=>setQuery(event.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/components/Input/Input.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                type === "password" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    onClick: handleChangeVisible,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].inputIcon,
                    children: isVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaEyeSlash"], {}, void 0, false, {
                        fileName: "[project]/src/components/Input/Input.tsx",
                        lineNumber: 44,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaEye"], {}, void 0, false, {
                        fileName: "[project]/src/components/Input/Input.tsx",
                        lineNumber: 44,
                        columnNumber: 43
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Input/Input.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                clearable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    onClick: handleClearInput,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$input$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].inputIcon,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FiX"], {}, void 0, false, {
                        fileName: "[project]/src/components/Input/Input.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Input/Input.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Input/Input.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Input/Input.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Sidebar/sidebar.module.scss [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dark": "sidebar-module-scss-module__joJlIq__dark",
  "light": "sidebar-module-scss-module__joJlIq__light",
  "menu": "sidebar-module-scss-module__joJlIq__menu",
  "menuButton": "sidebar-module-scss-module__joJlIq__menuButton",
  "menuItemIcon": "sidebar-module-scss-module__joJlIq__menuItemIcon",
  "menuItemIconArrow": "sidebar-module-scss-module__joJlIq__menuItemIconArrow",
  "open": "sidebar-module-scss-module__joJlIq__open",
  "sidebar": "sidebar-module-scss-module__joJlIq__sidebar",
  "sidebarContainer": "sidebar-module-scss-module__joJlIq__sidebarContainer",
  "submenu": "sidebar-module-scss-module__joJlIq__submenu",
  "submenuItem": "sidebar-module-scss-module__joJlIq__submenuItem",
  "submenuItemLink": "sidebar-module-scss-module__joJlIq__submenuItemLink",
});
}),
"[project]/src/components/Sidebar/MenuItem.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItem",
    ()=>MenuItem
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar/sidebar.module.scss [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
;
;
const MenuItem = ({ item })=>{
    const [activeSubmenu, setActiveSubmenu] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].menuItem,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].menuButton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(item.icon, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].menuItemIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar/MenuItem.tsx",
                        lineNumber: 18,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    item.title,
                    activeSubmenu.includes(item.title) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaChevronUp"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].menuItemIconArrow,
                        onClick: ()=>{
                            setActiveSubmenu((prev)=>prev.filter((p)=>p !== item.title));
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar/MenuItem.tsx",
                        lineNumber: 22,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].menuItemIconArrow,
                        onClick: ()=>{
                            setActiveSubmenu((prev)=>[
                                    ...prev,
                                    item.title
                                ]);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar/MenuItem.tsx",
                        lineNumber: 26,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar/MenuItem.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            activeSubmenu.includes(item.title) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].submenu,
                children: item.submenu?.map((subItem)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].submenuItem,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: subItem.link,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].submenuItemLink,
                            children: subItem.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar/MenuItem.tsx",
                            lineNumber: 41,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, subItem.link, false, {
                        fileName: "[project]/src/components/Sidebar/MenuItem.tsx",
                        lineNumber: 37,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar/MenuItem.tsx",
                lineNumber: 34,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, item.title, true, {
        fileName: "[project]/src/components/Sidebar/MenuItem.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Sidebar/sidebarData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sidebarData",
    ()=>sidebarData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [ssr] (ecmascript)");
;
const sidebarData = [
    {
        title: "Users",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaUsers"],
        submenu: [
            {
                title: "All Users",
                link: "/users"
            },
            {
                title: "Add User",
                link: "/users/add"
            },
            {
                title: "Roles & Permissions",
                link: "/users/roles"
            }
        ]
    },
    {
        title: "Products",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaBox"],
        submenu: [
            {
                title: "All Products",
                link: "/products"
            },
            {
                title: "Add Product",
                link: "/products/add"
            },
            {
                title: "Categories",
                link: "/products/categories"
            }
        ]
    },
    {
        title: "Orders",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaShoppingCart"],
        submenu: [
            {
                title: "All Orders",
                link: "/orders"
            },
            {
                title: "Pending Orders",
                link: "/orders/pending"
            },
            {
                title: "Completed Orders",
                link: "/orders/completed"
            }
        ]
    },
    {
        title: "Settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaCog"],
        submenu: [
            {
                title: "Profile Settings",
                link: "/settings/profile"
            },
            {
                title: "System Settings",
                link: "/settings/system"
            }
        ]
    }
];
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[externals]/classnames [external] (classnames, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("classnames", () => require("classnames"));

module.exports = mod;
}),
"[project]/src/components/Sidebar/Sidebar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar/MenuItem.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar/sidebar.module.scss [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebarData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar/sidebarData.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs)");
;
;
;
;
;
;
;
const Sidebar = ({ active, theme })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
            className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].sidebar, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].open]: active,
                [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].dark]: theme === "dark",
                [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].light]: theme === "light"
            }),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].sidebarContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: theme === "dark" ? "/logo-sidebar.svg" : "/logo-sidebar-light.svg",
                            width: 40,
                            height: 40,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].sidebarLogo,
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar/Sidebar.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar/Sidebar.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].sidebarNav,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebar$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].menu,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$sidebarData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["sidebarData"].map((item)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$MenuItem$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["MenuItem"], {
                                    item: item
                                }, item.title, false, {
                                    fileName: "[project]/src/components/Sidebar/Sidebar.tsx",
                                    lineNumber: 41,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Sidebar/Sidebar.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar/Sidebar.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar/Sidebar.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Sidebar/Sidebar.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/components/Toast/toast.module.scss [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "fadeIn": "toast-module-scss-module___UfHla__fadeIn",
  "info": "toast-module-scss-module___UfHla__info",
  "reject": "toast-module-scss-module___UfHla__reject",
  "success": "toast-module-scss-module___UfHla__success",
  "toast": "toast-module-scss-module___UfHla__toast",
  "toastCloseIcon": "toast-module-scss-module___UfHla__toastCloseIcon",
  "toastIcon": "toast-module-scss-module___UfHla__toastIcon",
  "toastText": "toast-module-scss-module___UfHla__toastText",
  "warning": "toast-module-scss-module___UfHla__warning",
});
}),
"[project]/src/components/Toast/Toast.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$toast$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Toast/toast.module.scss [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
;
const Toast = ({ text = "Lorem, ipsum dolor, morun.", type, duration = 10000 })=>{
    const [isVisibleToast, setIsVisibleToast] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setIsVisibleToast(false), duration);
        return ()=>clearTimeout(timer);
    }, [
        duration
    ]);
    if (!isVisibleToast) {
        return null;
    }
    const handleCloseToast = ()=>{
        setIsVisibleToast(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$toast$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].toast} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$toast$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"][type]}`,
        children: [
            type === "warning" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaExclamationTriangle"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$toast$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].toastIcon
            }, void 0, false, {
                fileName: "[project]/src/components/Toast/Toast.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            type === "info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaInfoCircle"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$toast$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].toastIcon
            }, void 0, false, {
                fileName: "[project]/src/components/Toast/Toast.tsx",
                lineNumber: 37,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$toast$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].toastIcon
            }, void 0, false, {
                fileName: "[project]/src/components/Toast/Toast.tsx",
                lineNumber: 38,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0)),
            type === "reject" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$toast$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].toastIcon
            }, void 0, false, {
                fileName: "[project]/src/components/Toast/Toast.tsx",
                lineNumber: 39,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$toast$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].toastText,
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/Toast/Toast.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$toast$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].toastCloseIcon,
                onClick: handleCloseToast
            }, void 0, false, {
                fileName: "[project]/src/components/Toast/Toast.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Toast/Toast.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$Input$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input/Input.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$Sidebar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar/Sidebar.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$Toast$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast/Toast.tsx [ssr] (ecmascript)");
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("body", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2f$Input$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Input"], {
                type: "password",
                clearable: true,
                placeholder: "Enter password"
            }, void 0, false, {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2f$Sidebar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                theme: "dark",
                active: true
            }, void 0, false, {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2f$Toast$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                type: "info"
            }, void 0, false, {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/index.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a8a5d0ce._.js.map