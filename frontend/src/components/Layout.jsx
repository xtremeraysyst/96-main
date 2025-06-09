import { Outlet, useLocation } from "react-router";
import background from "../assets/background.png";
import ElninoLogo from "../assets/elnino-logo.jsx";

export default function Layout() {
  const location = useLocation();
  const isContractPage = location.pathname.includes('/create-contract');
  
  if (isContractPage) {
    return (
      <div className="relative min-h-screen flex flex-col bg-gray-100 select-none">
        <img
          src={background}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        
        <div className="relative z-10 flex-1">
          <Outlet />
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-100 select-none">
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="absolute top-4 sm:top-10 left-1/2 sm:left-6 transform -translate-x-1/2 sm:translate-x-0 z-10">
        <div className="transform scale-75 sm:scale-100 origin-center sm:origin-left">
          <ElninoLogo/>
        </div>
      </div>
      
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <main className="bg-white sm:bg-white/90 sm:backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
