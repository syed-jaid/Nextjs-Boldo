import Nav from "./singleParts/nav";
import Header from "./singleParts/header";
import Services from "./singleParts/services";
import Connection from "./singleParts/connection";
import Review from "./singleParts/review";
import Faq from "./singleParts/faq";
import BlogPart from "./singleParts/blogPart";
import ConnectUs from "./singleParts/connectUs";
import Footer from "./singleParts/footer";

const landingpage = () => {
    return (
        <>
            <div className="py-[50px] px-[100px]">
                <Nav />
                <Header />
            </div>
            <Services />
            <Connection />
            <Review />
            <Faq />
            <BlogPart />
            <ConnectUs />
            <Footer />
        </>
    );
};

export default landingpage;