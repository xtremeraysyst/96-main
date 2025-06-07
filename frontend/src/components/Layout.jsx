import { Outlet } from "react-router";
import background from "../assets/background.png";
import ElninoLogo from "../assets/elnino-logo.jsx";

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gray-100 select-none">
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {}
      <div className="absolute top-10 left-6 z-10">
          <ElninoLogo/>
      </div>
      <div className="relative z-10 mt-28 w-full max-w-md px-4">
        <main className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
