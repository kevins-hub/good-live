import React from 'react';


class ArtistBox extends React.Component {
    /*
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    */

    render() {

        if (!this.props.artistName){
            return (
                <>
                </>
            )
        } else {
            return (
                <>
                    <div className="app__artistContainer">
                        {/*<img className="app__artistPic" src="https://media.gq.com/photos/5f36d6fb118c9e4805b7df81/master/w_1600%2Cc_limit/08-drake-Laugh-Now-Cry-Later-Lil-Durk-music-video-gq-august-2020.jpg"/>*/}
                        <h1 className="app__artistName">{this.props.artistName}</h1>
                        <p className="app__question">How are they live?</p>
                    </div>
                </>
            )

        }
        

    }
}
export default ArtistBox;
