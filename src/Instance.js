import React from "react";

import {
  Button,
  Page,
  PageSection,
  PageSectionVariants,
  ActionList,
  ActionListItem,
} from "@patternfly/react-core";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Array(200).fill({ color: "gray" }),
      index: 0,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentDidMount() {
    //this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleStart = () => {
    this.timerId = setInterval(() => this.tick(), 10);
  };

  handleStop = () => {
    clearInterval(this.timerId);
    this.setState({
      items: Array(200).fill({ color: "gray" }),
      index: 0,
    });
  };

  tick() {
    var index = this.state.index;
    if (index === 200) {
      index = 0;
    }
    var color = this.state.items[index]["color"];

    if (color === "gray") {
      color = "green";
    } else if (color === "green") {
      color = "blue";
    } else {
      color = "gray";
    }

    var newItem = { color: color };

    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        newItem,
        ...this.state.items.slice(index + 1),
      ],
      index: index + 1,
    });
  }

  render() {
    return (
      <Page>
        <PageSection variant={PageSectionVariants.light}>
          <ActionList>
            <ActionListItem>
            <Button variant="primary" onClick={this.handleStart}>
                Start
              </Button>
            </ActionListItem>
            <ActionListItem>
              <Button variant="danger" onClick={this.handleStop}>
                Stop
              </Button>
            </ActionListItem>
          </ActionList>
        </PageSection>
        <PageSection variant={PageSectionVariants.light}>
          <div className="grid">
            {this.state.items.map((item, i) => (
              <Instance key={i} value={item.color} className="--pf-global--BoxShadow--md" ></Instance>
            ))}
          </div>
        </PageSection>
      </Page>
    );
  }
}

class Instance extends React.Component {
  render() {
    return <div className={`${this.props.value}`}></div>;
  }
}

export default Grid;
