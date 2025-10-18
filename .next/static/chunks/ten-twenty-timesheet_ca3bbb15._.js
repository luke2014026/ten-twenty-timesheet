(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ten-twenty-timesheet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ten-twenty-timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ten-twenty-timesheet/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ten-twenty-timesheet/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoginForm() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rememberMe, setRememberMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            await login(email, password);
            router.push("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        style: {
            width: "576px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-gray-300 bg-white p-5",
            style: {
                gap: "20px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5",
                    style: {
                        gap: "10px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-gray-900",
                        style: {
                            fontFamily: "Inter",
                            fontWeight: 600,
                            fontSize: "16px",
                            lineHeight: "150%"
                        },
                        children: "Welcome back"
                    }, void 0, false, {
                        fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                gap: "8px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium text-gray-900 mb-2",
                                    style: {
                                        fontFamily: "Inter",
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        lineHeight: "150%",
                                        letterSpacing: "0%"
                                    },
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    type: "email",
                                    placeholder: "name@example.com",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    required: true,
                                    className: "w-full rounded-lg border border-gray-300 bg-gray-50 px-1 py-0.75 text-sm font-normal text-gray-500 placeholder-gray-500 focus:outline-none focus:border-transparent",
                                    style: {
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "125%",
                                        letterSpacing: "0%",
                                        verticalAlign: "middle",
                                        padding: "3px 4px",
                                        boxShadow: "0 0 0 2px #1c64f2"
                                    },
                                    onFocus: (e)=>{
                                        e.currentTarget.style.boxShadow = "0 0 0 2px #1c64f2";
                                    },
                                    onBlur: (e)=>{
                                        e.currentTarget.style.boxShadow = "none";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                gap: "8px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: "block text-sm font-medium text-gray-900 mb-2",
                                    style: {
                                        fontFamily: "Inter",
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        lineHeight: "150%",
                                        letterSpacing: "0%"
                                    },
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "password",
                                    type: "password",
                                    placeholder: "••••••••••",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    required: true,
                                    className: "w-full rounded-lg border border-gray-300 bg-gray-50 px-1 py-0.75 text-sm font-normal text-gray-500 placeholder-gray-500 focus:outline-none focus:border-transparent",
                                    style: {
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "125%",
                                        letterSpacing: "0%",
                                        verticalAlign: "middle",
                                        padding: "3px 4px"
                                    },
                                    onFocus: (e)=>{
                                        e.currentTarget.style.boxShadow = "0 0 0 2px #1c64f2";
                                    },
                                    onBlur: (e)=>{
                                        e.currentTarget.style.boxShadow = "none";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 my-5",
                    style: {
                        gap: "8px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "remember",
                            type: "checkbox",
                            checked: rememberMe,
                            onChange: (e)=>setRememberMe(e.target.checked),
                            className: "w-4 h-4 border border-gray-300 rounded bg-gray-50 cursor-pointer",
                            style: {
                                borderRadius: "4px",
                                borderWidth: "0.5px",
                                backgroundColor: "#F9FAFB",
                                borderColor: "#D1D5DB"
                            }
                        }, void 0, false, {
                            fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "remember",
                            className: "text-sm font-medium text-gray-500 cursor-pointer",
                            style: {
                                fontFamily: "Inter",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "14px",
                                letterSpacing: "0%",
                                verticalAlign: "middle"
                            },
                            children: "Remember me"
                        }, void 0, false, {
                            fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg mb-5",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        gap: "16px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isLoading,
                        onClick: handleSubmit,
                        className: "w-full rounded-lg text-white font-medium transition-colors duration-200",
                        style: {
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "150%",
                            letterSpacing: "0%",
                            padding: "2.5px 5px",
                            borderRadius: "8px",
                            backgroundColor: isLoading ? "#1c64f2" : "#1a56db",
                            cursor: isLoading ? "not-allowed" : "pointer"
                        },
                        onMouseEnter: (e)=>{
                            if (!isLoading) e.currentTarget.style.backgroundColor = "#1e40af";
                        },
                        onMouseLeave: (e)=>{
                            if (!isLoading) e.currentTarget.style.backgroundColor = "#1a56db";
                        },
                        children: isLoading ? "Signing in..." : "Sign in"
                    }, void 0, false, {
                        fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ten-twenty-timesheet/src/app/login/LoginForm.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "9xN0kBG+0vqMmIXBiWjs9+tOnmg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ten$2d$twenty$2d$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ten-twenty-timesheet/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/ten-twenty-timesheet/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ten-twenty-timesheet_ca3bbb15._.js.map