import handleSongs from '../utils/GetSongs';
import postPlaylist from '../utils/PostPlaylist';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import Rings from './rings.svg';

const Results = (props) => {
    const [items, setItems] = useState([]);
    const [created, setCreated] = useState(false);
    const button = "mx-4 flex max-w-xs items-center justify-center text-base font-medium rounded-md text-black bg-green-300 hover:bg-green-400 px-8 py-3 md:py-4 md:text-lg md:px-10";
    const [itemsLoaded, setItemsLoaded] = useState(false);

    useEffect(() => {
        handleSongs(props.prompt, props.token, setItems, setItemsLoaded);
    }, [props.prompt]);

    const createPlaylist = () => {
        setCreated(true)

        postPlaylist(props.prompt, props.token, items);
    }
    const newPrompt = () => {
        setItems([]);
        setCreated(false);
        props.resetPrompt();
    }

    let displayComp = <img src={Rings} className="w-48"/>;
    if (itemsLoaded) {
       
        displayComp =<div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-center">
            {!created && <button onClick={createPlaylist} className={button}><FontAwesomeIcon icon={faSpotify} size="lg"/> <div className="px-1"></div>Create Playlist</button>}
            {<button onClick={newPrompt} className={button}><FontAwesomeIcon icon={faUndo} size="sm"/> <div className="px-1"></div>New Prompt!</button>}
        </div>
        <div className="p-2" />
        <div className="flex flex-col w-full max-w-2xl border-t">
        {items.map((item, index) => {
            return <Song key={index}
                         artist={item.artist_name}
                         songTitle={item.name}
                         albumImage={item.album_image_url}
                         songUrl={item.external_url} />
        })}
    </div></div>;
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl p-4 uppercase font-extrabold">{props.prompt}</h2>
            {displayComp}
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