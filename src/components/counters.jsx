import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };

  handleDelete = counterId => {
    const { counters } = this.state;
    this.setState({
      counters: [
        ...counters.slice(0, counterId),
        ...counters.slice(counterId + 1)
      ]
    });
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        {counters.map((counter, index) => (
          <Counter
            key={counter.id}
            id={index}
            onDelete={this.handleDelete}
            value={counter.value}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
