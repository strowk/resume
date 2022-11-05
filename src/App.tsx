import { Main } from "./stories/main/Main";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Main></Main>
      </HashRouter>
    </div>
  );
}

export default App;
