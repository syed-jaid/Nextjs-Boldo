import SNav from './serSinglepart/sNav'
import SHeader from './serSinglepart/sHeader'
import ImageGrid from './serSinglepart/imagegrid'
import ConnectUs from "./singleParts/connectUs";
import Footer from "./singleParts/footer";
export default function landingServices() {
    return (
        <>
            <div className='bg-white'>
                <div className='pt-[50px] px-[100px] h-[700px] bg-[#0A2640]'>
                    <SNav />
                    <SHeader />
                </div>
                <ImageGrid />
                <ConnectUs />
                <Footer />
            </div>
        </>
    )
}
