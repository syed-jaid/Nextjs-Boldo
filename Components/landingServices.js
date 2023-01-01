import SNav from './serSinglepart/sNav'
import SHeader from './serSinglepart/sHeader'
import ImageGrid from './serSinglepart/imagegrid'

export default function landingServices() {
    return (
        <>
            <div className='pt-[50px] px-[100px] h-[700px] bg-[#0A2640]'>
                <SNav />
                <SHeader />
                <ImageGrid />
            </div>
        </>
    )
}
