import React from 'react';
import VideoListaItem from '../componentes/VideoListaItem';

const VideoLista = (props) => {
    const videoItem = props.videos.map((video, i) => {
        return <VideoListaItem
            key={i}
            video={video}
            seleccionaVideo={props.seleccionaVideo}
        />
    })
    return (<div
        className='video-lista'
        >
        <h2>selecciona un video de la lista</h2>
        <div
            
        >
        {videoItem}</div>
        </div>
    
    )
}
 
export default VideoLista;