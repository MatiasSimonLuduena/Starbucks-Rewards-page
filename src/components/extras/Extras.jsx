/* eslint-disable react/prop-types */
import { Flex } from "../../global/styles.global"
import { H2, H3, P} from "../getting/styles"
import { Img, Button } from "./styles"


import { data } from "./data"

const Extras = ({ setNoLink }) => {
  return (
    <Flex column center container>
      <Flex column center>
        <H2>Endless Extras</H2>
        <P>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</P>
      </Flex>
      <Flex column768>
        {
          data.map((item, i) => (
            <Flex column align_center m1 align_start768 row768 key={i}>
              <Img alt={`image ${i + 1}`} src={item.img} />
              <Flex column align_start768>
                <H3>{ item.h3 }</H3>
                <P start768>{ item.p }</P>
                <Button onClick={() => setNoLink("in")}>Learn more</Button>
              </Flex>
            </Flex>
          ))
        }
      </Flex>
    </Flex>
  )
}

export default Extras