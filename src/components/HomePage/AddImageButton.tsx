// type Props = {}
import photoIcon from '../../assets/icons/photo.svg';

const AddImageButton = () => {
  return (
    <button className='border-2 border-dashed rounded-lg flex flex-col gap-3 justify-center items-center hover:bg-gray-100'>
        <img src={photoIcon} alt="photo icon" className='h-8 w-8' />
        <p className=''>Add Image</p>
    </button>
  )
}

export default AddImageButton