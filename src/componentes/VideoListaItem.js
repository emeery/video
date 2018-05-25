import React from 'react';
//sfc   

const VideoListaItem = ({ video, seleccionaVideo, scrollToTop }) => {
    
    const titulo = video.snippet.title;
    const descripcion = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;
    return(
          
  <div 
    onClick={() => seleccionaVideo(video)}
    className="row">
        <div className="col s12 m7">
            <div className="card">
                
                <div className="card-content">
                    <span 
                    className="card__title"
                    >{titulo}</span>
                    <p>{descripcion}</p>
                </div>
                    <center>
                    <iframe
                    src={url}
                    ></iframe>
                    </center>
            </div>
        </div>
  </div>
            
    )
}
 
export default VideoListaItem