import Image from "next/image";

export default function BannerWelcome({}) {
    return (
        <div className="w-11/12 mx-auto mb-12 flex flex-wrap">
            <div className="w-full relative z-0">
                <div className="h-80">
                    <Image
                        src={"/pages/home/flame-1415.png"}
                        // width={400}
                        className={"h-12 w-12"}
                        // height={600}
                        layout={"fill"}
                        objectFit={"contain"}
                    />
                </div>
            </div>
            <div className="w-full mt-5">
                <h1 className="text-5xl font-bold font-title">
                    We Grow Digital Brands
                </h1>
            </div>
        </div>
    )
}