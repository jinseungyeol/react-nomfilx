import { Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>{" "}
        {/* / 경로를 제일 마지막에 넣어야함 */}
      </Switch>
    </>
  );
}

export default App;
