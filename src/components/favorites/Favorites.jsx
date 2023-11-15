import { 
    Container, Card, Card_div, ContainerCard, Width50, H2, Button, Img, Star, H3, P, Div
} from "./styles"
import { Flex } from "../../global/styles.global"

import { buttons, cards } from "./data"

import { useState } from "react"

const Favorites = () => {
    const [change, setChange] = useState(0);

  return (
    <Container>
        <H2>Get your favorites for free</H2>
        <Flex between768>
            { buttons.map((item, i) => (
                <Button
                    key={i} onClick={() => setChange(i)} after={change === i ? true : false}
                >
                    { item }<Star>★</Star>
                </Button>
            ))}
        </Flex>
        <ContainerCard>
            { cards.map((item, i) => (
                <Card key={i} active={change === i ? true : false}>
                    <Width50>
                        <Img alt={`image ${i + 1}`} src={item.img} />
                        <Card_div>
                            <H3>{ item.h3 }</H3>
                            <P>{ item.p }</P>
                        </Card_div>
                    </Width50>
                </Card>
            ))}
        </ContainerCard>
        <Div></Div>
    </Container>
  )
}

export default Favorites