import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picEXP1 from '../../assets/picEXP1.png' 
const Experience = () => {
    return (
        <div>
            <div className="text-left text-primaryAccent font-medium">Experience</div>
            <div className="grid grid-cols-[30%_70%]">
                <div>Experience</div>
                <div>
                    <div className="text-left">
                        <span className="text-sm">2024-2025</span>
                    </div>
                    <div>2024-2025</div>
                    <div>
                        <img src={picEXP} className="w-5/6 rounded-md borded-2" />
                        </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className=" text-left text-primaryAccent">Fashion Ecommerce</div>
                    <div className="flex gap-4 text-lg">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faMedium} />
                        <FontAwesomeIcon icon={faYoutube} />

                    </div>
                    <div>Designing and developing a sports data analysis system that scrapes data from</div>
                    <div className="text-left flex gap-4 text-sm">
                        <div className="text-gray-100 font-medium bg-primaryTilte px-2 py-1 rounded-md hover:text-primaryBase">React</div>
                        <div className="text-gray-100 font-medium bg-primaryTilte px-2 py-1 rounded-md hover:text-primaryBase">Tailwind</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;