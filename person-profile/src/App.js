import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // State to store person's data and the visibility flag
    this.state = {
      person: {
        fullName: "Yenni Sucre",
        bio: "I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Zedstatement.",
        imgSrc: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        profession: "Software Developer"
      },

      // Flag to show/hide the profile
      shows: false, 

      // Time since component was mounted
      timeSinceMount: 0 
    };
    this.interval = null;
  }

  componentDidMount() {
    // Start the interval to update the timeSinceMount
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is about to be removed
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Yenni Profile Page</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "View Profile"}
        </button>

        {shows && (
          <div className="profile">
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p><strong>Profession:</strong> {profession}</p>
            <p>{bio}</p>
          </div>
        )}

        <div>
          <p>Time since mounted: {timeSinceMount} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
