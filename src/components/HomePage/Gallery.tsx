import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
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
import HomePageSkeletonLoader from "../shared/HomePageSkeletonLoader";
import { useState } from "react";
import { Image } from "../../types/image.type";
import OverlayImage from "./OverlayImage";

const Gallery = () => {
  const { images, setImages } = useImages();
  const [activeImage, setActiveImage] = useState<Image | undefined>(undefined);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveImage(images.find(img => img.id == event.active.id))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveImage(undefined);
    const { active, over } = event;
    
    if (active.id !== over?.id) {
      setImages((imgs) => {
        const oldIndex = images.findIndex((img) => img.id === active.id);
        const newIndex = images.findIndex((img) => img.id === over?.id);
        return arrayMove(imgs, oldIndex, newIndex);
      });

      setImages((imgs) => imgs.map((img, i) => ({ ...img, id: i + 1 })));
    }
  };

  const handleDragCancle = () => {
    setActiveImage(undefined);
  }

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancle}
      sensors={sensors}
    >
      {images.length ? (
        <SortableContext items={images} strategy={rectSortingStrategy}>
        <main className="py-3 px-7 grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] grid-rows-[repeat(1,_120px)] auto-rows-[120px] gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {images.map((img, i) => (
            <GalleryImage img={img} key={i} />
          ))}
          <AddImageButton />
        </main>
      </SortableContext>
      ) : (
        <HomePageSkeletonLoader />
      )}
      <DragOverlay adjustScale={true}>
        {activeImage ? (<OverlayImage img={activeImage} />) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Gallery;
