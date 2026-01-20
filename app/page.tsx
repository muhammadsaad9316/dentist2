import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OfficesSummary from '@/components/OfficesSummary';
import FeatureCarousel from '@/components/FeatureCarousel';
import Amenities from '@/components/Amenities';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#F5F1ED' }}>
                <Hero />
                <OfficesSummary />
                <FeatureCarousel />
                <Amenities />
                <Footer />
            </div>
        </main>
    );
}
