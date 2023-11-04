import { useImages } from "../../providers/ImageContextProvider";

const Header = () => {
  const { selectedImages, deleteSelectedImages } = useImages();

  return (
    <header className="py-3 px-7 border-b flex justify-between flex-wrap">
      {selectedImages.length ? (
        <h3 className="text-xl font-semibold">
          {selectedImages.length}
          {selectedImages.length > 1 ? " Files " : " File "}
          Selected
        </h3>
      ) : (
        <h3 className="text-xl">Gallery</h3>
      )}

      {selectedImages.length ? (
        <button
          onClick={deleteSelectedImages}
          className="text-orange-400 hover:underline hover:drop-shadow-sm p-1 rounded-lg"
        >
          Delete
          {selectedImages.length > 1 ? " Files" : " File"}
        </button>
      ) : null}
    </header>
  );
};

export default Header;
