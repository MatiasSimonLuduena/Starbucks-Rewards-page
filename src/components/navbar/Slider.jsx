/* eslint-disable react/prop-types */
import styles from "./slider.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

// styles imports
import { A } from "./styles"
import { Flex, Button } from "../../global/styles.global"

const Slider = ({ slider, setSlider }) => {
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
        <Flex column>
          <A slide>Menu</A>
          <A slide>Rewards</A>
          <A slide>Gift cards</A>
        </Flex>
        <br/><hr/><br/>
        <Flex column>
        <div>
          <Button>Sign in</Button>
          <Button black>Join now</Button>
        </div>
        <A hover><FontAwesomeIcon icon={faLocationDot}/> Find a store</A>
      </Flex>
      </div>
    </div>
  )
}

export default Slider