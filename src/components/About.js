import { faMicrochip, faMusic, faParagraph } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = (props) => {
    return (
        <div className="flex flex-col w-full">
            <h2 className="text-5xl font-black text-left pt-8">How it works</h2>
            <div className="flex w-full items-start justify-between pt-4">
                <div className="flex flex-col items-center justify-center w-1/4 p-2">
                    <FontAwesomeIcon icon={faParagraph} size="5x" className="text-green-300"/> 
                    <p className="pt-4 text-center text-sm">You will enter a phrase you want to see in song form.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-1/4 p-2">
                    <FontAwesomeIcon icon={faMicrochip} size="5x" className="text-green-300"/> 
                    <p className="pt-4 text-center text-sm">Our machine learning algorithm finds the best song choices for you.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-1/4 p-2">
                    <FontAwesomeIcon icon={faMusic} size="5x" className="text-green-300"/> 
                    <p className="pt-4 text-center text-sm">See your song choices and save them to Spotify!</p>
                </div>
            </div>
        </div>
    )
}

export default About;