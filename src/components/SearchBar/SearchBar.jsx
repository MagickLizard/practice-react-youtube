import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};
  onInputChange = event => {
    this.setState({term: event.target.value});
  }
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
  render() {
    return (
      <div className="container subtitle">
        <form onSubmit={this.onFormSubmit}>
        <input
        className="input is-medium" 
        type="text" 
        value={this.state.term}
        onChange={this.onInputChange}></input>
        </form>
      </div>
    )
  }

}
export default SearchBar;