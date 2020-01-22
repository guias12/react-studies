import React, { Component } from 'react';

import SearchBar from '../SearchBar'
import VideoList from '../VideoList'

import api from '../../services/api';

const KEY = process.env.REACT_APP_YT_KEY

class App extends Component {
    state = {
        videos: [],
    };

    onTermSubmit = async term => {
        const response = await api.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY,
            },
        });

        const { items } = response.data;
        this.setState({ videos: items })
    };

    render(){
        return(
            <div className="ui container">                
                <SearchBar onFormSubmit={ this.onTermSubmit }/>
                <VideoList videos={ this.state.videos }/>
            </div>
        )
    };
}

export default App;