/* eslint-disable react/prop-types */
// styles
import { HeaderContainer, H2, Span, A } from './styles';
import { Button, Hidden, Show } from "../../global/styles.global"

const Header = ({ setNoLink }) => {
  return (
    <div>
      <HeaderContainer>
        <H2>FREE COFFEE <br/> IS A TAP AWAY</H2>
        <div>
          <Span>Join now to start earning Rewards.</Span>
        </div>
        <Hidden>
          <a><Button green m30 onClick={() => setNoLink("in")}>Join now</Button></a>
        </Hidden>
        <Show>
          <a><Button green m30 onClick={() => setNoLink("in")}>Join the app</Button></a>
        </Show>
        <Hidden>
          <Span>
            Or <A onClick={() => setNoLink("in")}>join in the app</A> for the best experience
          </Span>
        </Hidden>
        <Show>
          <Span><A onClick={() => setNoLink("in")}>Or join online</A></Span>
        </Show>
      </HeaderContainer>
    </div>
  );
};

export default Header;
