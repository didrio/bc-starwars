import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      results: [],
      hidden: true
    }
  }

  handleInput(event) {
    this.setState({ input: event.target.value, results: [] }, () => {
      if (this.state.input === '') {
        this.setState({ hidden: true });
        return
      } else {
        const matches = [];
        this.props.characters.forEach(character => {
          if (character.name.toLowerCase().startsWith(this.state.input.toLowerCase())) {
            matches.push(character.name);
          }
        });
        this.setState({ hidden: false, results: matches });
      }
    });
  }

  handleResultClick(result) {
    this.setState({ hidden: true, input: '' });
    this.props.characterSelected(result);
  }

  renderResults() {
    return this.state.results.map((result, i) => {
      return (
        <div key={i} onClick={this.handleResultClick.bind(this, result)} className='search__result'>
          {result}
        </div>
      );
    });
  }

  render() {
    return (
      <div className='search'>
        <input value={this.state.input} onChange={this.handleInput.bind(this)} className='search__input' type='text'></input>
        <div className='search__auto-complete' style={this.state.hidden ? { display: 'none' } : { display: 'flex' } } >
          {this.renderResults.call(this)}
        </div>
      </div>
    );
  }
}

export default Search;