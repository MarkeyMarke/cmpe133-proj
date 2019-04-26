import React, { Component } from "react";

class ConfirmPage extends Component {
  render() {
    return (
      <div>
        <h1>This is the confirmation page</h1>
        <button
          onClick={() => this.props.handlePhaseChange(4)}
          className="btn btn-outline-danger"
        >
          Finish & Keep Shopping
        </button>
        <div />
      </div>
    );
  }
}

export default ConfirmPage;
