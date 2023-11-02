import { useImages } from "../../providers/ImageContextProvider";
import AddImageButton from "./AddImageButton";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  const { images } = useImages();

  return (
    <main className="py-3 px-7 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-rows-[repeat(1,_200px)] auto-rows-[200px] gap-5">
      {images.map((img, i) => (
        <GalleryImage image={img} key={i} />
      ))}
      <AddImageButton />
    </main>
  );
};

export default Gallery;
