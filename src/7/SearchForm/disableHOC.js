import React, { Component } from "react";

const DisableHOC = WrapperComponent => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        value: "",
        disabled: true
      };
    }

    onChangeHandler = event => {
      this.setState({
        value: event.target.value,
        disabled: !(event.target.value.length > 0)
      });
    };

    onSubmitHandler = event => {
      event.preventDefault();

      const { value, disabled } = this.state;

      if (!disabled) {
        this.props.onSearch(value);
      }
    };

    render() {
      const { value, disabled } = this.state;

      return (
        <WrapperComponent
          {...this.props}
          value={value}
          disabled={disabled}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
      );
    }
  };
};

export default DisableHOC;
