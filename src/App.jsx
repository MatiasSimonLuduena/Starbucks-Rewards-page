import { useState } from "react"

// components imports
import Navbar from "./components/navbar/Navbar"
import Slider from "./components/navbar/Slider"
import Header from "./components/header/Header"
import Fixed from "./components/header/Fixed"
import Getting from "./components/getting/Getting"
import Favorites from "./components/favorites/Favorites"
import Extras from "./components/extras/Extras"
import Cashorcard from "./components/cashorcard/Cashorcard"
import Coming from "./components/coming/Coming"
import Questions from "./components/questions/Questions"

function App() {
  const [slider, setSlider] = useState(false);

  return (
    <>
      <Slider setSlider={setSlider} slider={slider}/>
      <Navbar setSlider={setSlider} slider={slider}/>
      <div style={{ height: 100 }}></div>
      <Fixed/>
      <Header/>
      <Getting/>
      <Favorites/>
      <Extras/>
      <Cashorcard/>
      <Coming/>
      <Questions/>
    </>
  )
}

export default App
