import Gallery from "../components/HomePage/Gallery";
import Header from "../components/HomePage/Header";
import ImageContextProvider from "../providers/ImageContextProvider";

const HomePage = () => {
  return (
    <ImageContextProvider>
      <section className="bg-white shadow-lg rounded-lg w-11/12 md:w-5/6 lg:w-2/3">
        <Header />
        <Gallery />
      </section>
    </ImageContextProvider>
  );
};

export default HomePage;
