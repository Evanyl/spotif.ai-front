import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = (props) => {
    return (
        <div className="flex flex-col w-full">
            <h2 className="text-5xl font-black text-left pt-8">How it works</h2>
            <div className="flex w-full items-center justify-center pt-2">
                <div className="flex flex-col items-center justify-center w-1/3 pt-2">
                    <FontAwesomeIcon icon={faMicrochip} size="4x" className="text-green-300"/> 
                    <p className="pt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 pt-2">
                    <FontAwesomeIcon icon={faMicrochip} size="4x" className="text-green-300"/> 
                    <p className="pt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 pt-2">
                    <FontAwesomeIcon icon={faMicrochip} size="4x" className="text-green-300"/> 
                    <p className="pt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default About;