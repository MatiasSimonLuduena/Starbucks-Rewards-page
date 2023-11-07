import { useState } from "react"

// components imports
import Navbar from "./components/navbar/Navbar"
import Slider from "./components/navbar/Slider"
import Header from "./components/header/Header"
import Getting from "./components/getting/Getting"
import Favorites from "./components/favorites/Favorites"
import Extras from "./components/extras/Extras"
import Cashorcard from "./components/cashorcard/Cashorcard"
import Coming from "./components/coming/Coming"

function App() {
  const [slider, setSlider] = useState(false);

  return (
    <>
      <Slider setSlider={setSlider} slider={slider}/>
      <Navbar setSlider={setSlider} slider={slider}/>
      <Header/>
      <Getting/>
      <Favorites/>
      <Extras/>
      <Cashorcard/>
      <Coming/>
    </>
  )
}

export default App
