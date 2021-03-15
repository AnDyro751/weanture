import Image from 'next/image'
import ButtonsPrimary from "../Buttons/primary";

export default function OurExperience({}) {
    return (
        <div className="w-full">
            <div className="w-11/12 mx-auto mb-12 flex flex-wrap md:items-center md:space-x-12 md:flex-nowrap">
                <div className="w-full relative h-80 md:h-xxl w-full pointer-events-none md:w-7/12">
                    <Image
                        alt={"image our experience"}
                        draggable={false}
                        className="select-none pointer-events-none"
                        src={"/pages/home/our_experience/cpWas13nPasSasP12df.png"}
                        layout={"fill"}
                        objectFit={"cover"}
                        draggable={false}
                    />
                </div>
                <div className="w-full mt-8 md:w-5/12">
                    <h2 className="text-2xl md:text-3xl font-medium font-title">
                        Ultimate experiences with story, emotion and purpose
                    </h2>
                    <h3 className="text-gray-800 my-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores assumenda
                        blanditiis consectetur cumque delectus ea harum molestias nisi placeat quasi quidem quis rem
                        sequi, similique tenetur voluptatum. Eligendi, iure.
                    </h3>
                    <div className="w-full">
                        <ButtonsPrimary text={"DISCOVER MORE"} type={"text"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}