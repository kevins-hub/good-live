
import React from 'react';
import '../style/SearchBar.css';

import ArtistBox from '../components/ArtistBox.js'

class SearchBar extends React.Component {
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
                <div className='search-bar ui segment'>
                    <form onSubmit={this.handleSubmit} className='ui form'>
                        <div className='field'>
                            {/*<label htmlForm="video-search">Artist Name</label>*/}
                            <input onChange={this.handleChange} name='video-search' className='vid-search-form' type="text" placeholder="Search for an Artist..."/>
                        </div>
                    </form>
                </div>
            </>
            
        )
        


    }
}
export default SearchBar;