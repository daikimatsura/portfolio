import About from "@/components/molecules/About";
import Blogs from "@/components/organisms/Blogs";
import Skills from "@/components/molecules/Skills";
import Contact from "@/components/molecules/Contact";
const Home = async () => {
  return (
    <>
      <About />

      {/* Works セクション */}
      <Blogs />

      {/* Skills セクション */}
      <Skills />

      {/* Contact セクション */}
      <Contact />
    </>
  );
};

export default Home;
