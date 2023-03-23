import Pages from "./pages/Pages";
import Search from "./components/Search";
import Cuisine from "./components/Cuisine";
import {BrowserRouter} from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "./components/Title";
import {GiKnifeFork} from "react-icons/gi";
import {useState, useEffect} from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])

  return (
    <div className="App">
         {
      loading?
      <ClimbingBoxLoader

        color={"black"}
        loading={loading}
        size={20}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"

      />
      :
      <BrowserRouter>
      <Nav>
        <GiKnifeFork className="Emoji"/>
        <Logo to={"/"}> VeggieRe</Logo>
      </Nav>
      <Title/>
      <Search/>
      <Cuisine/>
      <Pages/>
      </BrowserRouter>
}
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: "Lobster Two", cursive;
@media (max-width: 1680px) {
  font-size: -1rem;
}
`;

const Nav = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}`;

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


export default App;
