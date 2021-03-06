import Image from "next/image";
import InputText from "../../Input/text";
import ButtonsPrimary from "../../Buttons/primary";

export default function BannerWelcome({}) {
    return (
        <div className="w-11/12 mx-auto mb-12 flex flex-wrap">
            <div className="w-full relative z-0">
                <div className="h-80">
                    <Image
                        priority={true}
                        alt={"Image banner welcome"}
                        src={"/pages/home/flame-1415.png"}
                        className={"h-12 w-12"}
                        layout={"fill"}
                        objectFit={"contain"}
                    />
                </div>
            </div>
            <div className="w-full mt-5">
                <h1 className="text-5xl font-bold font-title">
                    We Grow Digital Brands
                </h1>
                <h2 className="my-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                    consectetur
                    debitis deleniti eveniet fuga impedit!</h2>
            </div>
            <form className="w-full space-y-3">
                <InputText
                    id={"welcome_email"}
                    label={"Correo Electrónico"}
                    placeholder={"Correo de contacto"} type={"text"}/>
                <ButtonsPrimary text={"Crezcamos juntos"}/>
            </form>
        </div>
    )
}