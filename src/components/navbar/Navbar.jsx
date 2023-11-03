/* eslint-disable react/prop-types */
// styles imports
import { Nav, A, Bars } from "./styles"
import { Flex, Button, Show } from "../../global/styles.global"

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
        <Button m10>Sign in</Button>
        <Button black m10>Join now</Button>
      </Flex>

      <Show w840>
        <Bars onClick={() => setSlider(slider === "in" ? "out" : "in")}>
          <FontAwesomeIcon icon={slider === "in" ? faXmark : faBars}/>
        </Bars>
      </Show>
    </Nav>
  )
}

export default Navbar