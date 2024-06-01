export default function Header(){
    return(
        <>
        <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">My Awesome Fruits</h1>
            <nav className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-200">Home</a>
                <a href="#" className="text-white hover:text-gray-200">About</a>
                <a href="#" className="text-white hover:text-gray-200">Services</a>
                <a href="#" className="text-white hover:text-gray-200">Contact</a>
            </nav>
        </div>
    </header>
        </>
    )
}