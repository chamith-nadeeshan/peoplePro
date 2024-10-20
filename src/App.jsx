import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
import AddEmployee from "./pages/AddEmployee";
import Designation from "./pages/Designation";
import Employee from "./pages/Employee";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/recruitment" element={<div>Recruitment Page</div>} />
          <Route path="/payroll" element={<div>Payroll Page</div>} />
          <Route path="/request" element={<div>requests Page</div>} />
          <Route path="employees/create" element={<AddEmployee />} />
          <Route path="designation" element={<Designation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { FiSettings } from "react-icons/fi";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
// import {
//   Ecommerce,
//   Orders,
//   Calendar,
//   Employees,
//   Stacked,
//   Pyramid,
//   Customers,
//   Kanban,
//   Line,
//   Area,
//   Bar,
//   Pie,
//   Financial,
//   ColorPicker,
//   ColorMapping,
//   Editor,
// } from "./pages";
// import "./App.css";

// import { useStateContext } from "./contexts/ContextProvider";

// const App = () => {
//   const {
//     setCurrentColor,
//     setCurrentMode,
//     currentMode,
//     activeMenu,
//     currentColor,
//     themeSettings,
//     setThemeSettings,
//   } = useStateContext();

//   useEffect(() => {
//     const currentThemeColor = localStorage.getItem("colorMode");
//     const currentThemeMode = localStorage.getItem("themeMode");
//     if (currentThemeColor && currentThemeMode) {
//       setCurrentColor(currentThemeColor);
//       setCurrentMode(currentThemeMode);
//     }
//   }, []);

//   return (
//     <div className={currentMode === "Dark" ? "dark" : ""}>
//       <BrowserRouter>
//         <div className="flex relative dark:bg-main-dark-bg">
//           <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
//             <TooltipComponent content="Settings" position="Top">
//               <button
//                 type="button"
//                 onClick={() => setThemeSettings(true)}
//                 style={{ background: currentColor, borderRadius: "50%" }}
//                 className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
//               >
//                 <FiSettings />
//               </button>
//             </TooltipComponent>
//           </div>
//           {activeMenu ? (
//             <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
//               <Sidebar />
//             </div>
//           ) : (
//             <div className="w-0 dark:bg-secondary-dark-bg">
//               <Sidebar />
//             </div>
//           )}
//           <div
//             className={
//               activeMenu
//                 ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
//                 : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
//             }
//             >
//             <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
//               <Navbar />
//             </div>
//             <div>
//               {themeSettings && <ThemeSettings />}

//               <Routes>
//                 {/* dashboard  */}
//                 <Route path="/" element={<Ecommerce />} />
//                 <Route path="/ecommerce" element={<Ecommerce />} />

//                 {/* pages  */}
//                 <Route path="/orders" element={<Orders />} />
//                 <Route path="/employees" element={<Employees />} />
//                 <Route path="/customers" element={<Customers />} />

//                 {/* apps  */}
//                 <Route path="/kanban" element={<Kanban />} />
//                 <Route path="/editor" element={<Editor />} />
//                 <Route path="/calendar" element={<Calendar />} />
//                 <Route path="/color-picker" element={<ColorPicker />} />

//                 {/* charts  */}
//                 <Route path="/line" element={<Line />} />
//                 <Route path="/area" element={<Area />} />
//                 <Route path="/bar" element={<Bar />} />
//                 <Route path="/pie" element={<Pie />} />
//                 <Route path="/financial" element={<Financial />} />
//                 <Route path="/color-mapping" element={<ColorMapping />} />
//                 <Route path="/pyramid" element={<Pyramid />} />
//                 <Route path="/stacked" element={<Stacked />} />
//               </Routes>
//             </div>
//             <Footer />
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
