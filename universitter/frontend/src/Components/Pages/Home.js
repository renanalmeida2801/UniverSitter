
import SectionHome from '../Layout/SectionHome';
import SectionInfo from '../Layout/SectionInfo';
import SectionAbout from '../Layout/SectionAbout';
import './Home.module.css';

function Home() {
    return (
        <div>
            <SectionHome />
            <SectionInfo />
            <SectionAbout />
        </div>
    );
}

export default Home;