import handleSongs from '../utils/GetSongs';
import { useState, useEffect } from 'react';

const Results = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        handleSongs(props.prompt, props.token, setItems);
    }, [props.prompt]);


    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl p-4 uppercase font-extrabold">{props.prompt}</h2>
            <div className="p-2" />
            <div className="flex flex-col w-full max-w-2xl border-t">
                {items.map((item, index) => {
                    return <Song key={index}
                                 artist={item.artist_name}
                                 songTitle={item.name}
                                 albumImage={item.album_image_url}
                                 songUrl={item.external_url} />
                })}
            </div>
        </div>
    )
}

export default Results;

const Song = (props) => {
    return (
        <div className="flex p-3 items-center justify-between">
            <a className="flex items-center justify-start w-full" href={props.songUrl} target="_blank">
                <img className="w-20 h-20 rounded"src={props.albumImage}></img>
                <div className="p-2" />
                <div className="flex flex-col w-full">
                    <p className="text-white text-xl">{props.songTitle}</p>
                    <p className="text-lg">{props.artist}</p>
                </div>
            </a>
        </div>
    )
}