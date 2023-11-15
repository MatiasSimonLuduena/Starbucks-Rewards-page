/* eslint-disable react/prop-types */
import { Container, H2, Img } from "./styles"
import { P } from "../getting/styles"
import { Button } from "../../global/styles.global"

const Coming = ({ setNoLink }) => {
  return (
    <Container out>
      <Container in>
        <H2>Keep the Rewards Coming</H2>
        <P>
          The Rewards don&apos;t stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.
        </P>
        <Img
          src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png" alt="image"
          />
        <P>
          <a onClick={() => setNoLink("in")}>Link your Delta SkyMiles®</a> and Starbucks® Rewards accounts to earn 1 mile per $1* spent at Starbucks and double Stars on Delta travel days.
        </P>
        <Button green onClick={() => setNoLink("in")}>Join Starbucks® Rewards</Button>
      </Container>
    </Container>
  )
}

export default Coming