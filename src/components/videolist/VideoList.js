import React, { useState, useEffect } from 'react';
import VideoTime from '../videotime/VideoTime';
import CreatorImage from '../creatorimage/CreatorImage';
import './VideoList.css';

function VideoList(props) {
    const [videos, setVideos] = useState([]);

    const FetchData = async () => {
        var count = 20;
        var API_KEY = "AIzaSyC3C27yjXyZGxbNyD5BndbcP4dwYUu3u7w";
        var q = "hypercars"; // search
        var url = "https://www.googleapis.com/youtube/v3/search?key=" + API_KEY + "&maxResults=" + count + "&part=snippet&type=video&q=" + q;

        fetch(url)
            .then((result) => result.json())
            .then((obj) => setVideos(obj));
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
        <div className="video-list">
            {console.log(videos.items)}
            {videos.items?.map((item) => {
                return <div className="video" key={item.id.videoId}>
                    <div className="video-thumbnail-image">
                        <img src={item.snippet.thumbnails.high.url} alt="" />
                    </div>
                    <div className="video-info">
                        <div className="video-creator-image">
                            <CreatorImage creator={item.snippet.channelId} />
                        </div>
                        <div className="video-text-info">
                            <h4 className="title">{item.snippet.title}</h4>
                            <h4>{item.snippet.channelTitle}</h4>
                            <h4 className="video-viewers-time-info">Views • <VideoTime time={item.snippet.publishTime} /></h4>
                        </div>
                    </div>
                </div>

            })}
        </div>
    );
}

export default VideoList;