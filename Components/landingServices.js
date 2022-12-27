import SNav from './serSinglepart/sNav'
import SHeader from './serSinglepart/sHeader'

export default function landingServices() {
    return (
        <>
            <div className='pt-[50px] px-[100px] bg-[#0A2640]'>
                <SNav />
                <SHeader />
            </div>
        </>
    )
}
