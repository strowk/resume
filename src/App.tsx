import { Main } from "./stories/main/Main";
import { HashRouter as UsedRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <UsedRouter>
        <Main></Main>
      </UsedRouter>
    </div>
  );
}

export default App;
