/* eslint-disable react/prop-types */
// styles imports
import { Nav, A, Button, Bars } from "./styles"
import { Flex } from "../../global/styles.global"

// components
import Icon from "./Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({ setSlider, slider }) => {
  return (
    <Nav>
      <Flex>
        <Icon/>
        <Flex center width840>
          <A uppercase hover>Menu</A>
          <A uppercase hover>Rewards</A>
          <A uppercase hover>Gift cards</A>
        </Flex>
      </Flex>
      <Flex width840>
        <A hover><FontAwesomeIcon icon={faLocationDot}/> Find a store</A>
        <Button>Sign in</Button>
        <Button black>Join now</Button>
      </Flex>

      <Bars onClick={() => setSlider(slider === "in" ? "out" : "in")}>
        <FontAwesomeIcon icon={slider === "in" ? faXmark : faBars}/>
      </Bars>
    </Nav>
  )
}

export default Navbar