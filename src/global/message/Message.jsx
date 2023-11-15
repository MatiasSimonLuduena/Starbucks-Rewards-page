/* eslint-disable react/prop-types */
import { Container } from "./styles"

const Message = ({ action, setOut }) => {
  return (
    <Container out={action} in={!action}>
        <p>
            Este sitio web es una emulación de la página Rewards del sitio web oficial de Starbucks. Puedes ver el original en
            <a href="https://www.starbucks.com/rewards" target="_blank" rel="noreferrer">
                www.starbucks.com
            </a>
        </p>
        <div>
            <button onClick={() => setOut(true)}>Cerrar</button>
        </div>
    </Container>
  )
}

export default Message