import "./App.css";
import Main from "./Components/Main/Main";
import styled from "styled-components";
import FormAddUser from "./Components/FormAddUser/FormAddUser";

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  height: 100vh;
  background: white;
`;

function App() {

  return(
    <AppStyle>
    <FormAddUser />
    <Main />
  </AppStyle>
  );
 
}

export default App;


