import React from 'react';
import YTSearch  from 'youtube-api-search';
import Forma from '../componentes/Forma';
import VideoLista from '../componentes/VideoLista';
import VideoDetalle from '../componentes/VideoDetalle';
import Cabecera from '../componentes/Cabecera'

const API_KEY = 'AIzaSyBrovGRv5KkhekeTb6TmLbWfNqKbpTAmWU';
class AppVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            videoSeleccion: null
        }
        
    }
    componentDidMount = () => {
        YTSearch({key:API_KEY, term: 'messi'}, (videos)=>{
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
        return (
            <div>
                <Cabecera
                titulo='Videos'
                subtitulo='Buscador en YouTube '
                />
                <Forma/>
                <VideoDetalle
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

