
const nav = () => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <img src='/Logo.png' alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a>Product</a></li>
                    <li><a>Services</a></li>
                    <li><a>About</a></li>
                    <li className="px-[40px] pt-[8px] h-[49px] border-2 rounded-full border-gray-900 ml-[10px]">log In</li>
                </ul>
            </div>
        </div>
    );
};

export default nav;