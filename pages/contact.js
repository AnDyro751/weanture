import MainLayout from "../src/components/Layouts/main";
import ContactForm from "../src/components/ContactForm";
import Footer from "../src/components/Footer";
import BannerStack from "../src/components/BannerStack";

export default function ContactPage() {
    return (
        <MainLayout>
            <div className="w-full bg-indigo-200 py-12 z-0">
                <div className="w-11/12 mx-auto z-10 text-center">
                    <h1 className="text-3xl font-bold font-title">Contáctanos</h1>
                    <h2 className="text-gray-800 text-sm mt-2">
                        Uno de nuestros asesores se pondrá en contacto contigo para resolver tus dudas.
                    </h2>
                </div>
            </div>
            <div className="relative z-10 mb-12">
                <div className="w-full bg-white pt-10">
                    <ContactForm withText={false}/>
                </div>
            </div>
            <BannerStack/>
        </MainLayout>
    )
}