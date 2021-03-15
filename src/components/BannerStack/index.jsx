import {useState} from 'react';
import {SITE_NAME} from "../../utils/info";

export default function BannerStack({}) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div className="w-full relative mb-12">
            <div className="w-11/12 relative mx-auto flex flex-wrap justify-start hidden md:flex">
                <h3 className="mb-20 mt-8 font-bold text-3xl font-title w-full text-center">Especializados en</h3>
                <IconBanner src={"/pages/home/icons8-amazon-s3-100.svg"} text={"AWS S3"}/>
                <IconBanner src={"/pages/home/icons8-amazon-web-services-100.svg"} text={"AWS"}/>
                <IconBanner src={"/pages/home/icons8-javascript-100.svg"} text={"JavaScript"}/>
                <IconBanner src={"/pages/home/icons8-nodejs-100.svg"} text={"Node JS"}/>
                <IconBanner src={"/pages/home/icons8-ruby-programming-language-100.svg"}
                            text={"Ruby on Rails"}/>
                <IconBanner src={"/pages/home/icons8-git-100.svg"} text={"Git"}/>
                <IconBanner src={"/pages/home/icons8-github-100.svg"} text={"Github"}/>
                <IconBanner src={"/pages/home/icons8-graphql-100.svg"} text={"GraphQL"}/>
                <IconBanner src={"/pages/home/icons8-react-native-100.svg"} text={"React Native"}/>
                <IconBanner src={"/pages/home/icons8-firebase-100.svg"} text={"Firebase"}/>
                <IconBanner src={"/pages/home/icons8-nodejs-100.svg"} text={"Node JS"}/>
                <IconBanner src={"/pages/home/icons8-ruby-programming-language-100.svg"}
                            text={"Ruby on Rails"}/>
                <h3 className="mt-8 font-bold text-3xl font-title w-full text-center">¡Y muuuchoo más!</h3>
            </div>
            <div className="w-11/12 relative mx-auto flex flex-wrap justify-start md:hidden">
                <h3 className="mb-12 font-bold text-2xl font-title w-full text-center">Especializados en</h3>
                <IconBanner src={"/pages/home/icons8-amazon-s3-100.svg"} text={"AWS S3"}/>
                <IconBanner src={"/pages/home/icons8-amazon-web-services-100.svg"} text={"AWS"}/>
                <IconBanner src={"/pages/home/icons8-apollo-100.svg"} text={"Apollo"}/>
                <IconBanner src={"/pages/home/icons8-javascript-100.svg"} text={"JavaScript"}/>
                {
                    open &&
                    <div className="w-full flex flex-wrap md:hidden">
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
        <div className={`w-3/12 ${wm ? "mb-8 md:mb-16" : ""}`}>
            <img
                alt={`Image ${SITE_NAME} ${text}`}
                className={"w-10 h-10 md:w-14 md:h-14 mx-auto"}
                src={src}
                height={40}
                width={40}
                draggable={false}
            />
            <p className="text-xs text-gray-700 font-bold mx-auto mt-4 w-full text-center">{text}</p>
        </div>
    )
}