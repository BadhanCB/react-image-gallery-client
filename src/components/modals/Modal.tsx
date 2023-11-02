import Close from "../JSXIcons/Close";

type Props = {
    children: React.ReactNode,
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({children, isOpenModal, setIsOpenModal }: Props) => {
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
        {children}
      </div>
    </section>
  )
}

export default Modal