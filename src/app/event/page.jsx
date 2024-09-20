
import  Card3DSlider from '@/components/Card3DSlider';
import Navbar from '@/components/Navbar';
import Discover from '@/pages/Discover';
const page = () => {
    return (
        <div>
            <Navbar/>
            <Card3DSlider />
            <Discover/>
        </div>
    );
};

export default page;