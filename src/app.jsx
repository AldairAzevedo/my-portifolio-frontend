import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Navbar } from "./components/nav/nav";
import { Footer } from "./components/footer/footer";
import { Project } from "./components/project/project";

export const WebContent = () => {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

