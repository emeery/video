import React from 'react';

const VideoDetalle = ({ video }) => {
    if(!video) {
        return <div>Cargando...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;
    return (
        <div className='video-detalle'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe
                className='embed-responsive-item'
                src={url}
                ></iframe>
            </div>
            <div className='details'>
                <p>{video.snippet.title}</p>
            </div>
        </div>
    );
}
 
export default VideoDetalle;