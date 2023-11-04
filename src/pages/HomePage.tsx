import Gallery from "../components/HomePage/Gallery";
import Header from "../components/HomePage/Header";
import ImageContextProvider from "../providers/ImageContextProvider";

const HomePage = () => {
  return (
    <ImageContextProvider>
      <section className="bg-white shadow-lg rounded-lg">
        <Header />
        <Gallery />
      </section>
    </ImageContextProvider>
  );
};

export default HomePage;
