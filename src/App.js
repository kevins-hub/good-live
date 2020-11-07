import logo from './logo.svg';
import './App.css';

import youtube from './apis/youtube';
import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import ArtistBox from './components/ArtistBox';


class App extends React.Component {
  
  state = {
      videos: []
  }
  
  handleSubmit = async (termFromSearchBar) => {
      const response = await youtube.get('/search', {
          params: {
              //q: termFromSearchBar
              q: `${termFromSearchBar} live`
          }
      })

      console.log(typeof(response.data.items))
      
      this.setState({
          videos: response.data.items,
          name: termFromSearchBar
      })
      
      console.log("this is resp",response);
      const map1 = this.state.videos.map(videoObj => console.log(videoObj))
      console.log(map1);
  };
  /*
  handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }
  */
  render() {
      return (
          <div className="app">
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
            </div>

            <ArtistBox artistName={this.state.name}/>



            <VideoList videoList={this.state.videos}/>


          </div>


          
      )
  }
}


/*
function App() {
  return (
    <div className="app">
      <div className="app__artistContainer">
        <img className="app__artistPic" src="https://media.gq.com/photos/5f36d6fb118c9e4805b7df81/master/w_1600%2Cc_limit/08-drake-Laugh-Now-Cry-Later-Lil-Durk-music-video-gq-august-2020.jpg"/>
        <h1 className="app__artistName">Drake</h1>
        <p className="app__question">Is he wack? yes</p>
      </div>

      <div className="app__videoContainer">
        <div className="app__videoGrid">
          <div className="app__video">
            <iframe src="https://www.youtube.com/embed/DMsqgFBrEL0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          <div className="app__video">
            <iframe src="https://www.youtube.com/embed/PCrhnl9S4nI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div className="app__video">
            <iframe src="https://www.youtube.com/embed/Zypyi3Dss9s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      


    </div>





  );
}
*/
export default App;
