import * as React from "react";
import { IExampleService, BasicExampleService } from "@ts-example/core";
import { ExtendedExampleService } from "@ts-example/extended";
import "./App.css";

const logo = require("./logo.svg");

class App extends React.Component<{}, { useExtended: boolean }> {
  render() {
    const exampleService: IExampleService = this.state && this.state.useExtended ?
        new ExtendedExampleService() : new BasicExampleService();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
            {exampleService.doExampleWork("Hello World!")}
        </p>
        <p>
            <button onClick={() => this.setState({ useExtended: true })}>Use extended service</button>
        </p>
      </div>
    );
  }
}

export default App;
