import React, { Component } from 'react';
import './App.css';

const imgArr = [
  'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg',
  'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',

];



class App extends Component {
  state = {
    imageIndex: 0,
  };

  handleRightClick = () => {
    this.setState({ imageIndex: this.state.imageIndex + 1 });
  }

  handleLeftClick = () => {
    this.setState({ imageIndex: this.state.imageIndex - 1 });
  }

  render() {
    return (

      <div className="App">
        <img src={imgArr[this.state.imageIndex]} />

        {this.state.imageIndex !== imgArr.length - 1 && <button onClick={this.handleRightClick}>Right</button>}
        {this.state.imageIndex !== 0 && <button onClick={this.handleLeftClick}>Left</button>}

      </div>
    )
  }
}





export default App;
