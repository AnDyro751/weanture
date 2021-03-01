import MainLayout from "../src/components/Layouts/main";
import BannerWelcome from "../src/components/pages/BannerWelcome";
import dynamic from 'next/dynamic'
import BannerStack from "../src/components/BannerStack";
import OurExperience from "../src/components/OurExperince";
import OurServices from "../src/components/OurServices";
import ContactBanner from "../src/components/ContactBanner";

const ContactForm = dynamic(() => import('../src/components/ContactForm'));

const Home = () => (
    <MainLayout>
        <BannerWelcome/>
        <BannerStack/>
        <OurExperience/>
        <ContactBanner/>
        <OurServices/>
        <div id={"contact"}>
            <ContactForm/>
        </div>
    </MainLayout>
)

export default Home
