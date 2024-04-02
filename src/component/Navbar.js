const Navbar = () => {
    return ( 
        <div className="navbar ">
            <header className="bg-yellow-400 container-fluid text-center text-md font-semibold">
                Are you a University or school Student for an online tutoring partnership?<a className="text-sky-500 " href="#">Talk to us</a>
            </header>
            <nav className="container mx-auto mt-1 flex flex-row justify-between items-center">
                <div className="nav-logo">
                 <h1 className="text-2xl font-bold"> hr-tutor</h1>
                </div>
                <div className="nav-links flex gap-6 font-semibold list-none">
                    <li className=" text-sky-700"><a href="#">Home</a></li>
                    <li className="hover:text-sky-700"><a href="#">For Student</a></li>
                    <li className="hover:text-sky-700"><a href="#">For Resources</a></li>
                    <li className="hover:text-sky-700"><a href="#">About Us</a></li>
                    <li className="hover:text-sky-700"><a href="#">Contact Us</a></li>
                </div>
                <div className="buttons flex gap-5">
                    <button className="text-md font-semibold hover:border-2 px-4 py-3 rounded-lg hover:border-sky-700">Sign In</button>
                    <button className="bg-sky-700 hover:bg-sky-600 text-white px-4 py-3 rounded-lg">Register</button>
                </div>
            </nav>
        </div>
        
        
        );
}
 
export default Navbar;