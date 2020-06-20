import React from 'react';

export default class AddOption extends React.Component {
  // Class Properties, ES6 Style
  state = {
    error: undefined,
  };
  
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  // Class Methods
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" placeholder="Option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
