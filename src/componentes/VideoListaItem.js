import React from 'react';
//sfc   

//const video = props.video;
const VideoListaItem = ({ video, seleccionaVideo }) => {
    
    const titulo = video.snippet.title;
    const descripcion = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;
    return(
          
  <div 
  onClick={() => seleccionaVideo(video) }
  className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          
          
        </div>
        <div className="card-content">
        <span className="card__title">{titulo}</span>
          <p>{descripcion}</p>
        </div>
        <iframe
        src={url}
        ></iframe>
      </div>
    </div>
  </div>
            
    )
}
 
export default VideoListaItem