
export default function sNav() {
    return (
        <div>
            <div className="navbar">
                <div className="flex-1">
                    <img src='/Logos.png' alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-[#FFFFFF] font-semibold">
                        <li><a>Product</a></li>
                        <li><a>Services</a></li>
                        <li><a>About</a></li>
                        <li className="px-[40px] pt-[8px] h-[49px] text-[#0A2640] border-2 rounded-full bg-[#FFFFFF] border-#FFFFFF-900 ml-[10px]">log In</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
