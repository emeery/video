import React from 'react';
import YTSearch  from 'youtube-api-search';
import Forma from '../componentes/Forma';
import VideoLista from '../componentes/VideoLista';

const API_KEY = 'AIzaSyBrovGRv5KkhekeTb6TmLbWfNqKbpTAmWU';
class AppVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] }
        YTSearch({key:API_KEY, term: 'futbol'}, (videos)=>{
            this.setState({ videos });
            console.log(videos);
        });
    }
    estableceVideos=() => {
        
        
    }
    render() { 
        return (<div>
            <h2>Videos</h2>
            <Forma/>
            <VideoLista
            videos={this.state.videos}
            />
            </div>)
    }
}
 
export default AppVideos;

