import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { Image } from "../../types/image.type";
import { useImages } from "../../providers/ImageContextProvider";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  img: Image;
};

const GalleryImage = ({ img }: Props) => {
  const { selectedImages, setSelectedImages } = useImages();
  const [isSelected, setIsSelected] = useState<boolean>(
    selectedImages.find((image) => image._id === img._id) ? true : false
  );
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: img.id });

  const styles = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  useEffect(() => {
    setIsSelected(
      selectedImages.find((image) => image._id === img._id) ? true : false
    );
  }, [img._id, selectedImages]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setIsSelected(e.target.checked);
    if (selectedImages.find((image) => image._id === img._id)) {
      setSelectedImages(
        selectedImages.filter((image) => image._id !== img._id)
      );
    } else {
      setSelectedImages([...selectedImages, img]);
    }
  };

  return (
      <figure className="rounded-lg sm:first:col-span-2 sm:first:row-span-2 group hover:backdrop-brightness-50 relative cursor-pointer" >
        <img
          style={styles}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          src={`data:${img.imgData.type};base64, ${img.imgData.img}`}
          alt={img.name}
          className={`h-full w-full object-cover object-center rounded-lg group-hover:brightness-50 border-2 ${
            isSelected && "opacity-50 contrast-75"
          }`}
        />
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleChange}
          name="img-checkbox"
          id="img-checkbox"
          className={`absolute top-4 left-4 cursor-pointer ${
            isSelected ? "visible" : "invisible"
          } group-hover:visible h-5 w-5`}
        />
      </figure>
  );
};

export default GalleryImage;
