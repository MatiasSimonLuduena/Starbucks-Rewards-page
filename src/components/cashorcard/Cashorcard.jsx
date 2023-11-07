import { data } from "./data"

import { Container, Data, Img, PerDolar, Pnative, H3 } from "./styles"
import { Flex } from "../../global/styles.global"
import { H2, P } from "../getting/styles"

const Cashorcard = () => {
  return (
    <Container>
        <Flex column center>
            <H2>Cash or card, you earn Stars</H2>
            <P>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</P>
        </Flex>
        {
            data.map((item, i) => (
                <Data out key={i}>
                    <PerDolar>
                        <Pnative p1>{ item.p1 } ★ per dollar</Pnative>
                        <Pnative p2>{ item.p2 }</Pnative>
                    </PerDolar>
                    <Data mid>
                        {
                            item.module.map((mod, ind) => (
                                <Data in key={ind}>
                                    <Img alt="image" src={mod.img} />
                                    <div>
                                        <H3>{ mod.h3 }</H3>
                                        <Pnative p3>{ mod.p3 }</Pnative>
                                    </div>
                                </Data>
                            ))
                        }
                    </Data>
                </Data>
            ))
        }
    </Container>
  )
}

export default Cashorcard