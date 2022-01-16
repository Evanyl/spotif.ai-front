const Results = (props) => {
    let items = [
        ["Flashing Lights", "https://i.scdn.co/image/ab67616d0000b2739bbd79106e510d13a9a5ec33"],
        ["Praise God", "https://i.scdn.co/image/ab67616d0000b273cad190f1a73c024e5a40dddd"],
        ["Through the Wire", "https://i.scdn.co/image/ab67616d0000b27325b055377757b3cdd6f26b78"],
        ["80 Degrees", "https://s3.amazonaws.com/filepicker-images-rapgenius/q4mimanyu0e"],
        ["Street Lights", "https://i.scdn.co/image/ab67616d0000b273346d77e155d854735410ed18"],
        ["Follow God", "https://i.scdn.co/image/ab67616d0000b2731bb797bbfe2480650b6c2964"],
        ["Gone", "https://i.scdn.co/image/ab67616d0000b273428d2255141c2119409a31b2"], 
        ["Fellas in Paris", "https://i.scdn.co/image/ab67616d0000b2734a767758e8ebe2443591c9fd"],
        ["Reborn", "https://i.scdn.co/image/ab67616d0000b273013c00ee367dd85396f79c82"],
        ["On Sight", "https://i.scdn.co/image/ab67616d0000b2731dacfbc31cc873d132958af9"],
        ["Lost in the World", "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f"],
        ["Saint Pablo", "https://i.scdn.co/image/ab67616d0000b2732a7db835b912dc5014bd37f4"],
        ["Ghost Town", "https://i.scdn.co/image/ab67616d0000b2730cd942c1a864afa4e92d04f2"]
    ]
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl p-4 uppercase font-extrabold">{props.prompt}</h2>
            <div className="p-2" />
            <div className="flex flex-col w-full max-w-2xl border-t">
                {items.map((item, _) => {
                    return <Song artist="Kanye West" 
                                 songTitle={item[0]}
                                 albumImage={item[1]}
                                 artistUrl="https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"
                                 songUrl="https://open.spotify.com/track/4b1PzI3GX8H6gLy6cFnfIG" />
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