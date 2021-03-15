export default function ContactBanner({}) {
    return (
        <div className="w-full bg-yellow-100 py-8 mb-12 md:py-40">
            <div className="w-11/12 md:w-10/12 mx-auto md:flex md:space-x-12 md:items-center">
                <div className="md:w-8/12">
                    <h4 className="text-3xl mb-8  text-black font-medium font-title">Let's talk about your
                        project.</h4>
                    <p className="text-black mb-8 md:mb-0" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi at dolorem facere iusto maxime molestias, nisi quae</p>
                </div>
                <div className="w-full md:w-4/12">
                    <a href={"#contact"}
                       className="text-white flex text-center justify-center transition duration-150 hover:bg-gray-800 text-sm h-14 bg-black font-bold uppercase px-6 py-4 rounded w-full">Contáctanos</a>
                </div>
            </div>
        </div>
    )
}