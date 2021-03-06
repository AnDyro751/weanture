import MainLayout from "../src/components/Layouts/main";
import BannerWelcome from "../src/components/pages/BannerWelcome";
import dynamic from 'next/dynamic'
import BannerStack from "../src/components/BannerStack";

const BannerStack = dynamic(() => import('../src/components/BannerStack'));
const ContactForm = dynamic(() => import('../src/components/ContactForm'));
const OurExperience = dynamic(() => import('../src/components/OurExperince'));
const OurServices = dynamic(() => import('../src/components/OurServices'));
const ContactBanner = dynamic(() => import('../src/components/ContactBanner'));

// import BannerStack from "../src/components/BannerStack";
// import OurExperience from "../src/components/OurExperince";
// import OurServices from "../src/components/OurServices";
// import ContactBanner from "../src/components/ContactBanner";

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
