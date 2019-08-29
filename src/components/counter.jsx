import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 13,
    fontWeight: 700
  };

  handleIncrement = tag => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = tag => {
    this.setState({ value: this.state.value - 1 });
  };

  checkValue() {
    let classes = "badge p-2 badge-";

    classes +=
      this.state.value > 0
        ? "info"
        : this.state.value < 0
        ? "danger"
        : "warning";

    return classes;
  }
  renderTags() {
    let classes = this.checkValue();
    const { value } = this.state;
    return (
      <div>
        <h4>
          Object #{this.props.id} with Values of:{" "}
          <span className={classes}>{value}</span>{" "}
        </h4>

        <ul>
          {this.state.tags.map(tag => (
            <li className={this.styles} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="p-3">
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
        <button
          className="btn m-1 btn-success"
          onClick={() => {
            this.handleIncrement();
          }}
        >
          Increment
        </button>
        <button
          className="btn m-1  btn-warning"
          onClick={() => {
            this.handleDecrement();
          }}
        >
          Decrement
        </button>
        <button
          className="btn m-1  btn-danger"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
