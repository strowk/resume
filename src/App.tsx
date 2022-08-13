import { Main } from "./stories/main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
