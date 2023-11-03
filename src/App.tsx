import HomePage from "./pages/HomePage"
import { initializeFirebase } from "./utils/firebase.config"

function App() {
  initializeFirebase();
  
  return (
    <>
      <HomePage />
    </>
  )
}

export default App
