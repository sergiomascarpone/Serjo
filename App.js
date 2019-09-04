import React, { Component } from 'react';
import './App.css'


 class App extends Component {
  state = {
    images: [
      'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg',
  'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
    ],
    counter: 0
  };
  

  onRightSlide = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    if (this.state.counter === this.state.images.length - 1) {
      this.setState({
        counter: 0
      })
    }
    // console.log(this.state.counter)      
  }

  onleftSlide = () => {
    this.setState({
      counter: this.state.counter - 1
    })
    if (this.state.counter === 0) {
      this.setState({
        counter: this.state.images.length - 1
      })
    }
    // console.log(this.state.counter)      
  }

  render() {
    return (
      <div className="mainApp">
        <img className="background" src={this.state.images[this.state.counter]} alt=''></img>
        <button 
        className='leftArrow' 
        onClick={this.onleftSlide}>
          -
          </button>
        <button 
        className='rightArrow' 
        onClick={this.onRightSlide}>
           +
           </button>
        <div className="circles">
          {
            this.state.images.map((img, index) => (
              <div key={img} className={index === this.state.counter ? 'blackCircle' : 'circle'}></div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default  App;