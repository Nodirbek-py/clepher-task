import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <section className="min-h-screen bg-sky-200">
      <div className="mx-auto max-w-screen-xl px-4 py-6">
        <Navbar />
        <div className="mt-10 px-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default App;
