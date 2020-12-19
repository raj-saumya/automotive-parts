import styled from "styled-components";
import "./App.css";
import Banner from "./components/Banner";
import ColorPanel from "./components/ColorPanel";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <Main>
      <Header />
      <Banner />
      <ColorPanel />
      <Footer />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export default App;
