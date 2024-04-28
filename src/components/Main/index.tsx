import styled from "styled-components";
import About from "./About";
import Resume from "./Resume";

const Container = styled.div``;

const Main = () => {
  return (
    <Container>
      <About />
      <Resume />
    </Container>
  );
};

export default Main;
