import { useState } from "react";
type Props = {
  imgUrl: string;
  imgName: string;
};

const GalleryImage = ({ imgUrl, imgName }: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <figure className="border-2 rounded-lg sm:first:col-span-2 sm:first:row-span-2 group relative cursor-pointer">
      <img
        src={imgUrl}
        alt={imgName}
        className={`h-full w-full object-cover object-center rounded-lg group-hover:brightness-50 ${isSelected && 'opacity-50 contrast-75'}`}
      />
      <input
        type="checkbox"
        checked={isSelected}
        onChange={(e) => setIsSelected(e.target.checked)}
        name="img-checkbox"
        id="img-checkbox"
        className={`absolute top-4 left-4 cursor-pointer ${isSelected ? 'visible' : 'invisible'} group-hover:visible h-5 w-5`}
      />
    </figure>
  );
};

export default GalleryImage;