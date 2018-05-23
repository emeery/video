import React from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import Forma from './Forma';
import VideoLista from './VideoLista';
import Cabecera from './Cabecera'
import VideoEnGrande from './VideoEnGrande';

const API_KEY = 'AIzaSyBrovGRv5KkhekeTb6TmLbWfNqKbpTAmWU';
class AppVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            videoSeleccion: null
        }
        this.unaBusqueda('messi');
    }
    unaBusqueda = (term) => {
        YTSearch({key:API_KEY, term: term}, (videos)=>{
            this.setState({ 
                videos: videos,
                videoSeleccion: videos[0]
            });
            //console.log(videos);
        });
    }
    seleccionaVideo = (videoSeleccion)=> {
        this.setState({ videoSeleccion })
    }

    render() { 
        const videoBusqueda = _.debounce((term)=>{
            this.unaBusqueda(term)
        }, 300);
        return (
            <div>
                <Cabecera
                titulo='Videos'
                subtitulo='Buscador en YouTube'
                />
                <Forma 
                enFormaCambio={videoBusqueda}
                />
                <VideoEnGrande
                video={this.state.videoSeleccion}
                />
                <VideoLista
                seleccionaVideo={this.seleccionaVideo}
                videos={this.state.videos}
                />
            </div>
        )
    }
}
 
export default AppVideos;

