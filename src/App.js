import "@patternfly/react-core/dist/styles/base.css";
import "./App.css";
import Grid from "./Instance";
import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button
} from "@patternfly/react-core";

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon'

function App() {
  let items = [];
  let max = 200;
  for (let index = 0; index < max; index++) {
    let color = "red";
    if (index % 2 === 0) {
      color = "green";
    }
    let item = {
      color: color,
    };
    items.push(item);
  }

  return (
    <div className="App">
      <Masthead id="basic-example">
        <MastheadToggle>
          <Button
            variant="plain"
            onClick={() => {}}
            aria-label="Global navigation"
          >
            <BarsIcon />
          </Button>
        </MastheadToggle>
        <MastheadMain>
          <MastheadBrand>Logo</MastheadBrand>
        </MastheadMain>
        <MastheadContent>
          <span>Content</span>
        </MastheadContent>
      </Masthead>
      <div className="App-header">
        <Grid />
      </div>
    </div>
  );
}

export default App;
