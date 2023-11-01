// type Props = {}

const Header = () => {
  return (
    <header className="py-3 px-7 border-b flex justify-between flex-wrap">
        <h3 className="text-xl">Gallery</h3>
        <button className="text-orange-400 hover:underline hover:drop-shadow-sm p-1 rounded-lg">Delete File</button>
    </header>
  )
}

export default Header;