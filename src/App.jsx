import { useState, useEffect } from "react"

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
import Footer from "./components/footer/Footer"

// global
import Message from "./global/message/Message"
import NoLink from "./global/NoLink/NoLink"

function App() {
  const [slider, setSlider] = useState(false);
  const [out, setOut] = useState(false);
  const [noLink, setNoLink] = useState("init");

  useEffect(() => {
    setTimeout(() => !out && setOut(true), 5000);
    setTimeout(() => noLink === "in" && setNoLink("out"), 3000)
  }, [noLink]);

  return (
    <>
      <Message action={out} setOut={setOut}/>
      <NoLink noLink={noLink}/>

      <Slider setSlider={setSlider} slider={slider} setNoLink={setNoLink}/>
      <Navbar setSlider={setSlider} slider={slider} setNoLink={setNoLink}/>
      <div style={{ height: 100 }}></div>
      <Fixed/>
      <Header setNoLink={setNoLink}/>
      <Getting/>
      <Favorites/>
      <Extras setNoLink={setNoLink}/>
      <Cashorcard/>
      <Coming setNoLink={setNoLink}/>
      <Questions/>
      <Footer setNoLink={setNoLink}/>
    </>
  )
}

export default App
