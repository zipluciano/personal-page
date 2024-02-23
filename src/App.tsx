import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components";

const App = () => (
  <main className="w-screen min-h-screen bg-stone-900 text-stone-200 flex justify-center">
    <div className="sm:w-screen lg:w-8/12 lg:h-5/6 mt-8">
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  </main>
);

export default App;
