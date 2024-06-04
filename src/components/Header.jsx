import { Grape } from "lucide-react";

export default function Header() {

  const showAbout = () => {
    alert("This is a website assignment given by Riri");
  }

  const showServices = () => {
    let found = prompt("What is your complaint ?");
    found === null ? alert("Oke, no problem") :  confirm("Do you want to send it ?") ? alert("Sorry, its just Alert") : alert("Canceled");
  }

  const showContact = () => {
    alert("Contact Hanif Fauzan (0831 - **** - ****), the owner of this contact");
  }

  return (
    <>
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Grape />
            <h1 className="text-3xl font-bold hover:cursor-none ">My Awesome Fruits</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-white hover:text-black" onClick={()=> showAbout()}>
              About
            </a>
            <a href="#" className="text-white hover:text-black" onClick={()=> showServices()}>
              Services
            </a>
            <a href="#" className="text-white hover:text-black" onClick={()=> showContact()}>
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
