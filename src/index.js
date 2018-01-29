import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDSiVfyNLEwpy5XEQ7pnOT0dT67MTLQD50';

// create a component that produces html
// class based component, the props is available throughout the class as this.props
class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            searchedVideos : [],
            selectedVideo : null     
        };
        this.searchVideo('surfboards');
    }
    searchVideo(wordToSearch) {
        YTSearch({key: API_KEY, term: wordToSearch}, (searchedVideos) => {
            this.setState({ 
                searchedVideos: searchedVideos,
                selectedVideo: searchedVideos[0] 
            });
        });
    }
    render() {
        const searchVideo = _.debounce((searchWord)=>{this.searchVideo(searchWord)}, 300);
        return (
            <div>
                <SearchBar onVideoSearch={searchVideo}/>
                <VideoDetail  video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.searchedVideos}/>
            </div>
        )
    }
}
// add this html to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));