import React from 'react';
//sfc   

//const video = props.video; , ({ video })
const VideoListaItem = ({ video }) => {
    const titulo = video.snippet.title;
    const imagen = video.snippet.thumbnails.high.url;
    return(<li>
        <div className="video-group-item" >
            <div className='video-list media'>
                <div className="media-left">
                    <img className="media-object" 
                    src={imagen}
                    />
                    <div className="media-body">
                        <div className="media-heading">
                        {titulo}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            </li>
    )
}
 
export default VideoListaItem