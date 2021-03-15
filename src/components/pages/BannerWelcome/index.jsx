import Image from "next/image";
import InputText from "../../Input/text";
import ButtonsPrimary from "../../Buttons/primary";

export default function BannerWelcome({}) {
    return (
        <div className="bg-yellow-100 pb-12 mb-12">
            <div
                className="w-11/12 mx-auto flex flex-wrap md:flex-nowrap md:flex-row-reverse md:items-center md:h-screen">
                <div className="w-full relative z-0 md:w-7/12 md:ml-12">
                    <div className="h-80 md:h-screen mx-auto">
                        <Image
                            priority={true}
                            alt={"Image banner welcome"}
                            src={"/pages/home/taxi-design.png"}
                            className={"h-12 w-12"}
                            layout={"fill"}
                            objectFit={"contain"}
                            draggable={false}
                        />
                    </div>
                </div>
                <div className="w-full mt-5 md:w-5/12 md:mr-12">
                    <h1 className="text-5xl md:text-6xl md:leading-normal leading-tight font-bold font-title">
                        Anture Grow Digital Brands
                    </h1>
                    <h2 className="my-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                        consectetur
                        debitis deleniti eveniet fuga impedit!</h2>
                    <div className="hidden md:block">
                        <form className="w-full space-y-3 mt-12">
                            <InputText
                                id={"welcome_email"}
                                label={"Correo Electrónico"}
                                placeholder={"Correo de contacto"} type={"text"}/>
                            <ButtonsPrimary text={"¡Crezcamos juntos ya!"}/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto md:hidden">
                <form className="w-full space-y-3">
                    <InputText
                        id={"welcome_email"}
                        label={"Correo Electrónico"}
                        placeholder={"Correo de contacto"} type={"text"}/>
                    <ButtonsPrimary text={"Crezcamos juntos"}/>
                </form>
            </div>
        </div>
    )
}