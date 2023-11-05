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
  updateImageSerialId: (newImgs: Image[]) => Promise<void>
};

const IMAGE_CONTEXT = createContext<ImgContextType>({
  images: [],
  setImages: () => {},
  reFetchImages: () => {},
  selectedImages: [],
  setSelectedImages: () => {},
  deleteSelectedImages: () => {},
  updateImageSerialId: () => Promise.resolve(),
});

export const useImages = () => useContext(IMAGE_CONTEXT);

const ImageContextProvider = ({ children }: Props) => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch("https://react-image-gallery.onrender.com/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  }, []);

  const reFetchImages = () => {
    fetch("https://react-image-gallery.onrender.com/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
  };

  const deleteSelectedImages = async () => {
    try {
      const selectedImageIds = selectedImages.map((img) => img._id);

      const response = await fetch(
        "https://react-image-gallery.onrender.com/gallery",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedImageIds),
        }
      );
      const data = await response.json();

      console.log(data);
      setSelectedImages([]);
      reFetchImages();
    } catch (error) {
      console.log(error);
    }
  };

  const updateImageSerialId = async (newImgs: Image[]) => {
    try {
      const newIds = newImgs.map((img) => {
        return { _id: img._id, id: img.id };
      });
  
      const response = await fetch("http://localhost:4321/gallery", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newIds),
      });
  
      console.log(response);
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
        updateImageSerialId
      }}
    >
      {children}
    </IMAGE_CONTEXT.Provider>
  );
};

export default ImageContextProvider;
