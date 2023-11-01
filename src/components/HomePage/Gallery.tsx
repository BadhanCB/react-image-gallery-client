// type Props = {}
import img1 from "../../assets/images/image-1.webp";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  const images = [
    {
      url: img1,
      name: "headphone1",
    },
    {
      url: img1,
      name: "headphone2",
    },
    {
      url: img1,
      name: "headphone3",
    },
    {
      url: img1,
      name: "headphone4",
    },
    {
      url: img1,
      name: "headphone5",
    },
    {
      url: img1,
      name: "headphone4",
    },
    {
      url: img1,
      name: "headphone5",
    },
    {
      url: img1,
      name: "headphone1",
    },
    {
      url: img1,
      name: "headphone2",
    },
    {
      url: img1,
      name: "headphone3",
    },
    {
      url: img1,
      name: "headphone4",
    },
    {
      url: img1,
      name: "headphone5",
    },
    {
      url: img1,
      name: "headphone4",
    },
    {
      url: img1,
      name: "headphone5",
    },
  ];

  return (
    <main className="py-3 px-7 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-rows-[repeat(1,_200px)] auto-rows-[200px] gap-5">
      {images.map((img, i) => (
        <GalleryImage imgUrl={img.url} imgName={img.name} key={i} />
      ))}
    </main>
  );
};

export default Gallery;
