import { useSortable } from "@dnd-kit/sortable";
import { Image } from "../../types/image.type";
import { CSS } from "@dnd-kit/utilities";

type Props = {
    img: Image
}

const OverlayImage = ({img}: Props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({ id: img.id });
    
      const styles = {
        transition,
        transform: CSS.Transform.toString(transform),
        transformOrigin: "0 0",
      };

  return (
    <img
        style={styles}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        src={`data:${img.imgData.type};base64, ${img.imgData.img}`}
        alt={img.name}
        className={`h-full w-full object-cover object-center rounded-lg group-hover:brightness-50 border-2 sm:first:col-span-2 sm:first:row-span-2`}
      />
  )
}

export default OverlayImage;