// components
import Fixed from './Fixed';

// styles
import { HeaderContainer, H2, Span, A } from './styles';
import { Button, Hidden, Show } from "../../global/styles.global"

const Header = () => {
  return (
    <div>
      <div style={{ height: 100 }}></div>
      <Fixed/>
      <HeaderContainer>
        <H2>FREE COFFEE <br/> IS A TAP AWAY</H2>
        <div>
          <Span>Join now to start earning Rewards.</Span>
        </div>
        <Hidden>
          <a><Button green>Join now</Button></a>
        </Hidden>
        <Show>
          <a><Button green>Join the app</Button></a>
        </Show>
        <Hidden>
          <Span>Or <A>join in the app</A> for the best experience</Span>
        </Hidden>
        <Show>
          <Span><A>Or join online</A></Span>
        </Show>
      </HeaderContainer>
    </div>
  );
};

export default Header;
