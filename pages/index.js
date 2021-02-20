import MainLayout from "../src/components/Layouts/main";
import BannerWelcome from "../src/components/pages/BannerWelcome";
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('../src/components/ContactForm'));

const Home = () => (
    <MainLayout>
        <BannerWelcome/>
        <ContactForm/>
    </MainLayout>
)

export default Home
