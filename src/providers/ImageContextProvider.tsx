import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { Image } from "../types/image.type";

type Props = {
  children: ReactNode;
};

type ImgContextType = {
  images: Image[];
  setImages: Dispatch<SetStateAction<Image[]>>;
  reFetchImages: () => void;
  selectedImages: Image[];
  setSelectedImages: Dispatch<SetStateAction<Image[]>>;
  deleteSelectedImages: () => void;
};

const IMAGE_CONTEXT = createContext<ImgContextType>({
  images: [],
  setImages: () => {},
  reFetchImages: () => {},
  selectedImages: [],
  setSelectedImages: () => {},
  deleteSelectedImages: () => {},
});

export const useImages = () => useContext(IMAGE_CONTEXT);

const ImageContextProvider = ({ children }: Props) => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch("http://localhost:4321/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  }, []);

  const reFetchImages = () => {
    fetch("http://localhost:4321/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  };

  const deleteSelectedImages = async () => {
    try {
      const selectedImageIds = selectedImages.map((img) => img._id);

      const response = await fetch("http://localhost:4321/gallery", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedImageIds),
      });
      const data = await response.json();

      console.log(data);
      setSelectedImages([]);
      reFetchImages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IMAGE_CONTEXT.Provider
      value={{
        images,
        setImages,
        reFetchImages,
        selectedImages,
        setSelectedImages,
        deleteSelectedImages,
      }}
    >
      {children}
    </IMAGE_CONTEXT.Provider>
  );
};

export default ImageContextProvider;
