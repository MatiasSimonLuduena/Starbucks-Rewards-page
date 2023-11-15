/* eslint-disable react/prop-types */
import { Container } from "./styles"

const NoLink = ({ noLink }) => {
  return (
    <Container in={noLink === "in"} out={noLink === "out"}>
      Enlace no disponible
    </Container>
  )
}

export default NoLink