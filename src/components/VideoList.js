
import React from 'react';

/*
class VideoList extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
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
            </>
        )
    }
}
*/

const VideoList = ({videoList}) => {
    
    const renderedVideos =  videoList.map(video => {


        
        return (
    
        <div className="app__video">
            <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen=""></iframe>
        </div>
        
        )
               
    });

    if (videoList.length == 0){
        return (
            <>
            </>
        )
    } else {
        return (
            <div className="app__videoContainer">
                <div className="app__videoGrid">
                    {renderedVideos}
                </div>
            </div>

            
        )
    }

};
export default VideoList;
