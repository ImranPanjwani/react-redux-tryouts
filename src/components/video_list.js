import React from 'react';
import VideoListItem from './video_list_item';

// functional component, the props get passed as argument
const VideoList = ({videos, onVideoSelect}) => {
    const videoItems = videos.map((video, index) => {
        return <VideoListItem
                    onVideoSelect={onVideoSelect}
                    key={video.etag} 
                    video={video}
                />
    })
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;