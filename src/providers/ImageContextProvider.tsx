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
};

const IMAGE_CONTEXT = createContext<ImgContextType>({
  images: [],
  setImages: () => {},
  reFetchImages: () => {},
});

export const useImages = () => useContext(IMAGE_CONTEXT);

const ImageContextProvider = ({ children }: Props) => {
  const [images, setImages] = useState<Image[]>([]);

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

  return (
    <IMAGE_CONTEXT.Provider value={{ images, setImages, reFetchImages }}>
      {children}
    </IMAGE_CONTEXT.Provider>
  );
};

export default ImageContextProvider;
