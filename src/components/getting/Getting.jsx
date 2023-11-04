import { data } from "./data"

import { Flex, Show, Hidden } from "../../global/styles.global"
import { H2, H3, P, Img } from "./styles"

const Getting = () => {
  return (
    <Flex column center container>
        <Flex column center>
            <H2>Getting started is easy</H2>
            <P>Earn Stars and get rewarded in a few easy steps.</P>
        </Flex>
        <Flex column768>
            { data.map((item, index) => (
                <Flex column align_center m1 align_start768 row768 key={index}>
                    <Img alt={`image ${index + 1}`} src={item.img} />
                    <Flex column align_start768>
                        {
                            item.h3Media ? (
                                <Hidden><H3>{item.h3}</H3></Hidden>
                            ) : <H3>{item.h3}</H3>
                        }
                        <Show>
                            <H3>{ item.h3Media }</H3>
                        </Show>
                        {
                            item.h3Media ? (
                                <Hidden>
                                    <P dangerouslySetInnerHTML={{ __html: item.p }} start768></P>
                                </Hidden>
                            ) : <P dangerouslySetInnerHTML={{ __html: item.p }} start768></P>
                        }
                        <Show>
                            <P dangerouslySetInnerHTML={{ __html: item.pMedia }} start768></P>
                        </Show>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    </Flex>
  )
}

export default Getting