import {useState} from 'react';
import {SITE_NAME} from "../../utils/info";

export default function BannerStack({}) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div className="w-full relative mb-12">
            <div className="w-11/12 relative mx-auto flex flex-wrap justify-start">
                <h3 className="mb-12 font-bold text-2xl font-title w-full text-center">Our Stack</h3>
                <IconBanner src={"/pages/home/icons8-amazon-s3-100.svg"} text={"AWS S3"}/>
                <IconBanner src={"/pages/home/icons8-amazon-web-services-100.svg"} text={"AWS"}/>
                <IconBanner src={"/pages/home/icons8-apollo-100.svg"} text={"Apollo"}/>
                <IconBanner src={"/pages/home/icons8-javascript-100.svg"} text={"JavaScript"}/>
                {
                    open &&
                    <div className="w-full flex flex-wrap">
                        <IconBanner src={"/pages/home/icons8-nodejs-100.svg"} text={"Node JS"}/>
                        <IconBanner src={"/pages/home/icons8-ruby-programming-language-100.svg"}
                                    text={"Ruby on Rails"}/>
                        <IconBanner src={"/pages/home/icons8-git-100.svg"} text={"Git"}/>
                        <IconBanner src={"/pages/home/icons8-github-100.svg"} text={"Github"}/>
                        <IconBanner src={"/pages/home/icons8-gitlab-100.svg"} text={"Gitlab"}/>
                        <IconBanner src={"/pages/home/icons8-graphql-100.svg"} text={"GraphQL"}/>
                        <IconBanner src={"/pages/home/icons8-react-native-100.svg"} text={"React Native"}/>
                        <IconBanner src={"/pages/home/icons8-firebase-100.svg"} text={"Firebase"}/>
                    </div>
                }

                <button
                    onClick={handleClick}
                    className="border-none focus:outline-none w-full py-3 rounded text-sm font-title text-center hover:bg-gray-100 hover:shadow">
                    {open ? "Ver menos" : "Ver más"}
                </button>

            </div>
        </div>
    )
}

const IconBanner = ({src = "", text = "", wm = true}) => {
    return (
        <div className={`relative w-3/12 mx-auto flex justify-center flex-wrap ${wm ? "mb-8" : ""}`}>
            <img
                aspe
                alt={`Image ${SITE_NAME} ${text}`}
                className={"-10 h-10"}
                src={src}
            />
            <p className="text-xs text-gray-700 font-bold mx-auto mt-3 w-full text-center">{text}</p>
        </div>
    )
}