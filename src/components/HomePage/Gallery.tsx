import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useImages } from "../../providers/ImageContextProvider";
import AddImageButton from "./AddImageButton";
import GalleryImage from "./GalleryImage";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

const Gallery = () => {
  const { images, setImages } = useImages();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setImages((imgs) => {
        const oldIndex = images.findIndex((img) => img.id === active.id);
        const newIndex = images.findIndex((img) => img.id === over?.id);
        return arrayMove(imgs, oldIndex, newIndex);
      });
    }
  };

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext items={images} strategy={rectSortingStrategy}>
        <main className="py-3 px-7 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] grid-rows-[repeat(1,_200px)] auto-rows-[200px] gap-5">
          {images.map((img, i) => (
            <GalleryImage img={img} key={i} />
          ))}
          <AddImageButton />
        </main>
      </SortableContext>
    </DndContext>
  );
};

export default Gallery;
