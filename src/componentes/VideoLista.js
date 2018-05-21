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
    return ( <ul>{videoItem}</ul> )
}
 
export default VideoLista;