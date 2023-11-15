/* eslint-disable react/prop-types */
import styles from "./slider.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

// styles imports
import { A } from "./styles"
import { Flex, Button } from "../../global/styles.global"

const Slider = ({ slider, setSlider, setNoLink }) => {
  return (
    <div
      className={`
        ${styles.containerOut}
        ${slider === "in" ? styles.in : (slider === "out" ? styles.out : styles.hidden)}
      `}
      onClick={() => setSlider("out")}
    >
      <div className={styles.containerIn} onClick={e => e.stopPropagation()}>
        <div style={{ height: 100 }}></div>
        <Flex column start>
          <A slide onClick={() => setNoLink("in")}>Menu</A>
          <A slide>Rewards</A>
          <A slide onClick={() => setNoLink("in")}>Gift cards</A>
        </Flex>
        <br/><hr/><br/>
        <Flex column start>
        <div>
          <Button onClick={() => setNoLink("in")}>Sign in</Button>
          <Button black onClick={() => setNoLink("in")}>Join now</Button>
        </div>
        <A hover onClick={() => setNoLink("in")}>
          <FontAwesomeIcon icon={faLocationDot}/> Find a store
        </A>
      </Flex>
      </div>
    </div>
  )
}

export default Slider