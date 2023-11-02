import { Dispatch, FormEventHandler, SetStateAction, useState } from "react";
import imgPlaceHolder from "../../assets/icons/photo.svg";
import Upload from "../JSXIcons/Upload";
import Close from "../JSXIcons/Close";

type Props = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

const AddImageModal = ({ isOpenModal, setIsOpenModal }: Props) => {
  const [imageFile, setImageFile] = useState<FileList | null>(null);

  const handleSubmitImage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(imageFile);
  };

  return (
    <section
      onClick={() => setIsOpenModal(false)}
      className={`${
        isOpenModal ? "flex" : "hidden"
      } fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-4 rounded-lg relative text-center"
      >
        <button
          onClick={() => setIsOpenModal(false)}
          className="bg-gray-100 absolute top-0 right-0 rounded-lg hover:bg-orange-400 hover:text-white"
        >
          <Close />
        </button>
        {imageFile ? (
          <figure>
            <img
              src={
                imageFile[0]
                  ? URL.createObjectURL(imageFile[0])
                  : imgPlaceHolder
              }
              alt="preview-image"
              className="w-40 h-40 object-contain mx-auto"
            />
            <figcaption>{imageFile[0]?.name}</figcaption>
          </figure>
        ) : (
          <img
            src={imgPlaceHolder}
            alt="preview-image"
            className="w-40 h-40 object-contain mx-auto opacity-50"
          />
        )}
        <form onSubmit={handleSubmitImage}>
          <label
            className="my-2 flex text-center justify-between items-center border-2 border-green-400 px-5 py-3 w-full rounded-lg cursor-pointer hover:shadow-sm hover:bg-gray-50"
            htmlFor="image"
          >
            Choose Image from Locals
          </label>
          <input
            onChange={(e) => setImageFile(e.target.files)}
            type="file"
            name="image"
            id="image"
            accept="image/*"
            className="hidden"
          />
          <button
            type="submit"
            className="flex gap-2 justify-center items-center text-white bg-green-400 px-5 py-3 w-full rounded-lg hover:bg-green-500 hover:shadow-sm"
          >
            <Upload /> Upload
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddImageModal;
