// data of navbar

import { Menu, X } from "lucide-react";
import { useState } from "react";

// **
const navBars = [
    {
        id: 1,
        name: "Home",
        path: "/",
        description: "The main landing page with an overview and quick access to features."
    },
    {
        id: 2,
        name: "About",
        path: "/about",
        description: "Contains information about the company, mission, and team."
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
        description: "Details of the services or products offered, with pricing and features."
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog",
        description: "A collection of articles, tutorials, and latest news updates."
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
        description: "Provides a contact form, email, and location details for inquiries."
    }
];

// **
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navbar = navBars.map(n => <li key={n.id}
        className="text-xl font-semibold text-[#FFF0C4] 
        rounded-2xl shadow-xl/50 
        border-1 border-[#3E0703] p-3
        transform transition duration-300 ease-in-out hover:scale-110">
        <a href={n.path}></a> {n.name}</li>)
    return (
        <nav>
            <div className=" bg-[#660B05] p-2 mx-5 rounded-xl mt-2 justify-between flex items-center">
                {/* logo */}
                <div>
                    <h1 className=" bg-[#3E0703] font-bold text-2xl text-[#FFF0C4] rounded-tl-full rounded-br-full shadow-xl/50 mx-5 p-3">My Navbar</h1>
                </div>
                {/* navbar items */}
                <div>
                    <ul className="md:flex md:justify-center md:gap-10 hidden">
                        {
                            navbar
                        }
                    </ul>
                </div>
                {/* info button */}
                <div className="flex items-center gap-5">
                    {/* menu */}
                    <div onClick={() => setOpen(!open)}>
                        {open ? <X className="md:hidden"></X> : <Menu color="white" className="md:hidden"></Menu>}
                        <div className="md:hidden">
                            <ul className={`
                                bg-none 
                                absolute duration-1000 ${open ? 'top-20 right-44' : '-top-80 right-44'}`}>
                                {
                                    navbar
                                }
                            </ul>
                        </div>
                    </div>
                    {/* menu */}
                    <button className="text-xl font-semibold text-[#FFF0C4] rounded-2xl shadow-xl/50 border-1 border-[#3E0703] p-3">Click Me</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;