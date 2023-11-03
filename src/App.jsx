import { useState } from "react"

// components imports
import Navbar from "./components/navbar/Navbar"
import Slider from "./components/navbar/Slider"
import Header from "./components/header/Header";

function App() {
  const [slider, setSlider] = useState(false);

  return (
    <>
      <Slider setSlider={setSlider} slider={slider}/>
      <Navbar setSlider={setSlider} slider={slider}/>
      <Header/>
    </>
  )
}

export default App
