import Nav from "./singleParts/nav";
import Header from "./singleParts/header";
import Services from "./singleParts/services";
import Connection from "./singleParts/connection";

const landingpage = () => {
    return (
        <>
            <div className="py-[50px] px-[100px]">
                <Nav />
                <Header />
            </div>
            <Services />
            <Connection />
        </>
    );
};

export default landingpage;