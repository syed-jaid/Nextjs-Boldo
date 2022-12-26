import Nav from "./singleParts/nav";
import Header from "./singleParts/header";
import Services from "./singleParts/services";
import Connection from "./singleParts/connection";
import Review from "./singleParts/review";

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
        </>
    );
};

export default landingpage;