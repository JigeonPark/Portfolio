import styled from "styled-components";
import Introduce from "./Introduce";
import About from "./About";

const Container = styled.div``;

const Main = () => {
  return (
    <Container>
      <Introduce />
      <About />
    </Container>
  );
};

export default Main;
