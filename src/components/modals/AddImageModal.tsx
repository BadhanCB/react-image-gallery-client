import { Dispatch, FormEventHandler, SetStateAction, useState } from "react";
import imgPlaceHolder from "../../assets/icons/photo.svg";
import Upload from "../JSXIcons/Upload";
import Modal from "./Modal";
import { useImages } from "../../providers/ImageContextProvider";

type Props = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

const AddImageModal = ({ isOpenModal, setIsOpenModal }: Props) => {
  const [imageFile, setImageFile] = useState<FileList | null>(null);
  const { images, reFetchImages } = useImages();

  const handleSubmitImage: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      reset: () => void;
    };

    try {
      if (imageFile) {
        const formData: FormData = new FormData();
        formData.append("file", imageFile[0]);
        formData.append("slNo", images.length.toString());
        await fetch(
          "http://localhost:4321/gallery",
          {
            method: "POST",
            body: formData,
          }
        );

        reFetchImages();
        form.reset();
        setIsOpenModal(false);
      } else {
        console.log("Please Select a Image");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // import Modal component and implenent image uploading related functionallity as children
  return (
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      {imageFile ? (
        <figure>
          <img
            src={
              imageFile[0] ? URL.createObjectURL(imageFile[0]) : imgPlaceHolder
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
        {imageFile?.length ? (
          <button
            type="submit"
            className="flex gap-2 justify-center items-center text-white bg-green-400 px-5 py-3 w-full rounded-lg hover:bg-green-500 hover:shadow-sm"
          >
            <Upload /> Upload
          </button>
        ) : null}
      </form>
    </Modal>
  );
};

export default AddImageModal;
