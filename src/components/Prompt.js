import React, { useState } from 'react';

const Prompt = (props) => {
    const [prompt, setPrompt] = useState("");

    const button = "flex max-w-xs items-center justify-center text-base font-medium rounded-md text-black bg-green-300 hover:bg-green-400 px-8 py-3 md:py-4 md:text-lg md:px-10";

    return (
        <form onSubmit={props.handle} className="flex flex-col w-5/6 h-full">
            <textarea className="pb-8 w-full" />
            <button className={button} type="submit" value="Submit">Hi</button>
        </form>
    )
}

export default Prompt;