import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Maker from "./components/maker/maker";
function App({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} FileInput={FileInput} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
