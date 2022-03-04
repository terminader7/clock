import "./App.css";
import styled from "styled-components";
import { Clock } from "./components/Clock";

const AppPage = styled.div`
  background-color: #80CBC4;
`;

function App() {
  return (
    <AppPage>
      <Clock />
    </AppPage>
  );
}

export default App;
