import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col ml-3 bg-slate-100 h-96 justify-center w-full items-center">
          <h2 className="text-5xl mb-4 font-bold">
            Frontend Developer
          </h2>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla     tempora nostrum delectus voluptas,  officia. </p>

          <button className="bg-slate-600 p-4 rounded text-white hover:bg-slate-500">
            LET'S TALK
          </button>

      </div>
      
      <About/>
      <Projects/>
      <Contact/>

      <Footer/>
    </>
  )
}
