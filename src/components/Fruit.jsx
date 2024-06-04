/* eslint-disable react/prop-types */
import { Info } from "lucide-react";
import { Send } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Heart } from "lucide-react";

export default function Fruit({fruitsProps}) {

  const showInfo = (fruitsProps) => {
    alert(` Name          : ${fruitsProps.name} \n Price            : IDR.${fruitsProps.price}, \n Category     : ${fruitsProps.category}\n Description : ${fruitsProps.description}`);
  }

  const showLike = (fruitsProps) => {
    alert(`I Like ${fruitsProps.name}`);
  }

  const showComment = () => {
     let found = prompt("Enter your comments :");
      found === null ? alert("Oke, no problem") : alert("Please click the send icon");
  }
  

  const showSend = () => {
    let result = confirm("Are you sure you want to send it ?");
    result ? alert("Thank you for your response") : alert("Canceled")
  }

  return (
    <>
      <div className="min-w-80 mx-auto my-10 bg-blue-200 rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover bg-gradient-to-r from-blue-100 to-blue-500"
          src={fruitsProps.photo}
          alt="Buah"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-950 mb-2">{fruitsProps.name}</h1>
          <p className="text-gray-900 mb-4">{fruitsProps.description}</p>
          <div className="flex items-center justify-between">
            <button className="text-blue-400 hover:text-blue-700" onClick={() => showInfo(fruitsProps)}>
              <Info />
            </button>
            <button className="text-pink-400 hover:text-pink-700 " onClick={() => showLike(fruitsProps)}>
              <Heart />
            </button>
            <button className="text-green-400 hover:text-green-700" onClick={()=> showComment()}>
              <MessageCircle />
            </button>
            <button className="text-slate-400 hover:text-slate-800" onClick={()=> showSend()}>
              <Send />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

  