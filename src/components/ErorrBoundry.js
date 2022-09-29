import { Component } from "react";

class ErorrBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something Wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErorrBoundry;
