const Title = (props) => {
    const setPrompt = () => {
        props.handle();
    }
    return (
        <div>
            <div className="flex justify-between items-end">
                <h1 className="text-7xl font-black text-left">Spotif.ai </h1>
                { props.prompt !== "" && <a href="" className="text-green-300 text-lg font-bold align-bottom" onClick={setPrompt}>Log out</a>}
            </div>
            <p className="text-xl py-4">Enter a prompt and find songs!</p>
        </div>
    )
}

export default Title;