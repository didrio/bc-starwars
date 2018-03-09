import React, { Component } from 'react';
import Search from './Search';
import Character from './Character';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selected: null
    }
  }

  componentDidMount() {
    this.fetchCharacters.call(this, 1);
  }

  fetchCharacters(page) {
    if (page > 9) return;
    fetch(`https://swapi.co/api/people/?page=${page}`).then(response => response.json()).then(data => {
      this.setState(prevState => ({ characters: [ ...prevState.characters, ...data.results ] }), () => {
        this.fetchCharacters(++page);
      });
    });
  }

  characterSelected(result) {
    this.state.characters.forEach(character => {
      if (result === character.name) {
        this.setState({ selected: character });
      }
    });
  }

  render() {
    return (
      <div className='main'>
        <Search characterSelected={this.characterSelected.bind(this)} characters={this.state.characters} />
        {this.state.selected ? <Character key={this.state.selected.name} character={this.state.selected} /> : <div className='character'>Select a character</div>}
      </div>
    );
  }
}

export default Main;