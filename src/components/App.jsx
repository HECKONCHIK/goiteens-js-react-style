import { GlobalStyle } from "./Global.styled";
import { Alert } from "./Alert/Alert";

export const App = () => {
  return (
  <>
    <GlobalStyle/>
    <Alert type="error" />
    <Alert type="success" />
    <Alert type="warning" />    
  </>

  );
};
