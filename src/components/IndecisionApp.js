import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  /* Class Properties, ES6 Style */
  state = {
    options: [],
    selectedOption: undefined,
  };

  // Remove all Options
  handleDeleteOptions = () => {
    // this.setState(() => {
    //   return {
    //     options: [],
    //   };
    // });
    this.setState(() => ({ options: [] }));
  };
  // Remove 1 Option
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };
  // Pick option at random
  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];

    this.setState(() => ({ selectedOption: option }));
  };
  // Add an Option
  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  };
  // Clear Selected Option and Close Modal
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  /* Class Methods */
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("Component Unmount");
  }

  render() {
    const subtitle = "When you just don't know what to do!";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
