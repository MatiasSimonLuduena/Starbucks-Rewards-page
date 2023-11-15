import { FixedContainer } from './styles';
import { Button, Show } from "../../global/styles.global"

const Fixed = () => {
  return (
    <FixedContainer>
      <span>STARBUCKS® REWARDS</span>
      <Show>
        <Button greenwhite>Join in the app</Button>
      </Show>
    </FixedContainer>
  )
};

export default Fixed;
