import { data } from "./data"

import { Container, H2, P, P2, H22, Div } from "./styles"

const Questions = () => {
  return (
    <div>
        <Container top>
            <H2>Questions?</H2>
            <P>
                We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions. <a>right over here.</a>
            </P>
        </Container>
        <Container bottom>
            <P2>At participating stores. Restrictions apply.</P2>
            <P2>
                * Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars.
            </P2>
            <P2>
                Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit <a>deltastarbucks.com/terms</a>
            </P2>
            <Div>
                {
                    data.map((item, i) => (
                        <div key={i}>
                            <H22>{ item.h2 }</H22>
                            <P2 dangerouslySetInnerHTML={{ __html: item.p }}></P2>
                        </div>
                    ))
                }
            </Div>
        </Container>
    </div>
  )
}

export default Questions