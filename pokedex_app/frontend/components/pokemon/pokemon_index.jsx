import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAllPokemon;
  }

  render(){
    const allPokemon = this.props.pokemon.map((pokemon,index) => <li key={index}>{pokemon.name}</li>);
    return (
      <div>
        <ul>
          { allPokemon }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
