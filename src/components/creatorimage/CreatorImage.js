import React, { useState, useEffect } from 'react';
import './CreatorImage.css'

function CreatorImage({ creator }) {
    const [image, setImage] = useState("");

    useEffect(() => {
        var count = 1;
        var API_KEY = "AIzaSyC3C27yjXyZGxbNyD5BndbcP4dwYUu3u7w";
        var q = ""; // search
        //var url = "https://www.googleapis.com/youtube/v3/channels/&key=" + API_KEY + "&maxResults=" + count + "&part=snippet&type=channel&q=" + q;
        var url = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + creator + "&key=" + API_KEY;

        fetch(url)
            .then((resp) => resp.json())
            .then((result) => setImage(result.items[0].snippet.thumbnails.default.url));
    }, []);

    return (
        <img
            className="profile-img"
            src={image}
            alt=""
        />
    )
}

export default CreatorImage
