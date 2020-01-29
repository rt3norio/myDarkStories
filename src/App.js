import React from 'react';

import './App.css';
import BlackStoryCard from './components/BlackStoryCard'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: null,
    }
  }
  componentDidMount() {
    fetch('https://frozen-mountain-10391.herokuapp.com/graphql?query=%7B%0A%20%20getOneCard%7B%0A%20%20%20%20name%0A%20%20%20%20plot%0A%20%20%20%20plotReveal%0A%20%20%7D%0A%7D',{ method: 'GET',mode: 'cors'})
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: responseData.data.getOneCard
        })
      });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">

          {this.state.data && <BlackStoryCard data={this.state.data}/>} 
        </header>
      </div>
    )  
  }
}



export default App;
