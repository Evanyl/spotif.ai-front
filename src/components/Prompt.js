import React, { useState } from 'react';

const Prompt = (props) => {
    const [prompt, setPrompt] = useState("");

    const button = "flex max-w-xs items-center justify-center text-base font-medium rounded-md text-black bg-green-300 hover:bg-green-400 px-8 py-3 md:py-4 md:text-lg md:px-10";

    const submit = () => {
        props.handle(prompt);
    }

    return (
        <form onSubmit={submit} className="flex flex-col w-5/6 h-full">
            <textarea placeholder="What are you feeling..." className="outline-0 p-3 text-[#9CA3AF] w-full h-[10%] rounded-lg text text-2xl bg-[#111827] border border-white" value={prompt} onChange={e => setPrompt(e.target.value)} />
            <div className="p-2" />
            <button className={button} type="submit" value="Submit">Next</button>
        </form>
    )
}

export default Prompt;