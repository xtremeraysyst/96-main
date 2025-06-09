import { Outlet } from "react-router";
import background from "../assets/background.png";
import ElninoLogo from "../assets/elnino-logo.jsx";

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-100 select-none">
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Logo positioned at top */}
      <div className="absolute top-4 sm:top-10 left-4 sm:left-6 z-10">
        <div className="transform scale-75 sm:scale-100 origin-left">
          <ElninoLogo/>
        </div>
      </div>
      
      {/* Centered container */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-sm sm:max-w-md">
          <main className="bg-white/90 backdrop-blur-md p-4 sm:p-8 rounded-2xl shadow-xl">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
