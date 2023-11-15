/* eslint-disable react/prop-types */
// styles imports
import { Nav, A, Bars } from "./styles"
import { Flex, Button, Show } from "../../global/styles.global"

// components
import Icon from "./Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({ setSlider, slider, setNoLink }) => {
  return (
    <Nav>
      <Flex>
        <Icon/>
        <Flex center width840>
          <A uppercase hover onClick={() => setNoLink("in")}>Menu</A>
          <A uppercase hover barra>Rewards</A>
          <A uppercase hover onClick={() => setNoLink("in")}>Gift cards</A>
        </Flex>
      </Flex>
      <Flex width840 align_center>
        <A hover onClick={() => setNoLink("in")}>
          <FontAwesomeIcon icon={faLocationDot}/> Find a store
        </A>
        <Button m10 onClick={() => setNoLink("in")}>Sign in</Button>
        <Button black m10 onClick={() => setNoLink("in")}>Join now</Button>
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