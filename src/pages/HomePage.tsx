import Gallery from "../components/HomePage/Gallery";
import Header from "../components/HomePage/Header";

// type Props = {}

const HomePage = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg">
      <Header />
      <Gallery />
    </section>
  );
};

export default HomePage;
