import { MessageCircle } from "lucide-react";
import { Heart } from "lucide-react";

export default function Fruit(){
    return(
        <>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Buah" />
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Nama Buah</h1>
            <p className="text-gray-600 mb-4">Tiga Kata Deskripsi</p>
            <div className="flex items-center justify-between">
                <button className="text-blue-500 hover:text-blue-700">
                <Heart />
                </button>
                <button className="text-green-500 hover:text-green-700">
                <MessageCircle />
                </button>
            </div>
        </div>
    </div>
        </>
    )
}