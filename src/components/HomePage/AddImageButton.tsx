import { useState } from "react";
import photoIcon from "../../assets/icons/photo.svg";
import AddImageModal from "../modals/AddImageModal";
// type Props = {}

const AddImageButton = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpenModal(true)} className="border-2 border-dashed rounded-lg flex flex-col gap-3 justify-center items-center hover:bg-gray-100">
        <img src={photoIcon} alt="photo icon" className="h-8 w-8" />
        <p className="">Add Image</p>
      </button>
      {/* pop up a modal to upload image */}
      <AddImageModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
};

export default AddImageButton;
