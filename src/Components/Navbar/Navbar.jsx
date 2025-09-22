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

const Navbar = () => {
    return (
        <nav>
            <div className=" bg-[#660B05] p-2 mx-5 rounded-xl mt-2 justify-between flex items-center">
                <h1 className=" bg-[#3E0703] font-bold text-2xl text-[#FFF0C4] rounded-tl-lg rounded-br-lg shadow-xl/50 mx-5 p-3">My Navbar</h1>
                <ul className="flex justify-center gap-10">
                    {
                        navBars.map(n => <li key={n.id}
                            className="text-xl font-semibold text-[#FFF0C4] rounded-2xl shadow-xl/50 border-1 border-[#3E0703] p-3">
                            <a href={n.path}></a> {n.name}</li>)
                    }
                </ul>
                <button className="text-xl font-semibold text-[#FFF0C4] rounded-2xl shadow-xl/50 border-1 border-[#3E0703] p-3">Click Me</button>
            </div>
        </nav>
    );
};

export default Navbar;