import HomePage from "./pages/HomePage"
import { initializeFirebase } from "./utils/firebase.config"

function App() {
  initializeFirebase();
  
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-5">
      <HomePage />
    </div>
  )
}

export default App
