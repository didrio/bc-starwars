import React, { Component } from 'react';

class Character extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homeworld: '',
      species: ''
    }
  }

  componentDidMount() {
    this.fetchData.call(this, 'homeworld', this.props.character.homeworld);
    this.fetchData.call(this, 'species', this.props.character.species);
  }

  fetchData(key, url) {
    fetch(url).then(response => response.json()).then(data => {
      this.setState({ [key]: data.name })
    });
  }
 
  renderDetails() {
    return Object.keys(this.props.character).map((key, i) => {
      if (key === 'films' || key === 'vehicles' || key === 'starships' || key === 'created' || key === 'edited' || key === 'url') return;
      return (
        <div key={i} className='character__field'>
          <div className='character__description'>
            {key}
          </div>
          {key === 'homeworld' || key === 'species' ? this.state[key] : this.props.character[key]}
        </div>
      );
    });
  }

  render() {
    return (
      <div className='character'>
        {this.state.homeworld !== '' && this.state.species !== '' ? this.renderDetails() : 'Loading...'}
      </div>
    );
  }
}

export default Character;