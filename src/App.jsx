import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Community from "./components/community/community";
import Register from "./components/register/register";
import Footer from "./components/footer/footer";
import AOS from "aos";


const App = () => {
  AOS.init();
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Community />
      <Register />
      <Footer />
    </>
  );
};

export default App;
