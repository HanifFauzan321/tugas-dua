import Fruit from "./components/Fruit";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex gap-5 flex-wrap bg-gradient-to-r from-blue-100 to-blue-500 p-6">
        {fruits.map((data) => (
          <Fruit key={data} fruitsProps={data} />
        ))}
      </div>
    </>
  );
}

const fruits = [
  {
    id: 1,
    name: "Avocado",
    price: 15000,
    category: "Tropical",
    description: "This fruit is green and tasty",
    photo: "src/image/Alpukat.jpg",
  },
  {
    id: 2,
    name: "Apple",
    price: 17000,
    category: "Tropical",
    description: "The fruit is red and fresh",
    photo: "src/image/Apel.jpg",
  },
  {
    id: 3,
    name: "Orange fruit",
    price: 10000,
    category: "Tropical",
    description: "the fruit is orange and sweet",
    photo: "src/image/Jeruk.jpg",
  },
  {
    id: 4,
    name: "Watermelon",
    price: 16000,
    category: "Tropical",
    description: "This fruit has green skin and sweet red contents",
    photo: "src/image/Semangka.jpg",
  },
  {
    id: 5,
    name: "Banana",
    price: 20000,
    category: "Tropical",
    description: "The yellow fruit has a sweet taste",
    photo: "src/image/Pisang.jpg",
  },
  {
    id: 6,
    name: "Longan fruit",
    price: 22000,
    category: "Tropical",
    description: "The fruit has another name 'cat's eye'",
    photo: "src/image/Kelengkeng.jpg",
  },
  {
    id: 7,
    name: "Lemon",
    price: 12500,
    category: "Tropical",
    description: "The fruit is yellow and tastes sour",
    photo: "src/image/Lemon.png",
  },
  {
    id: 8,
    name: "Grape",
    price: 23500,
    category: "Tropical",
    description: "The purple fruit has a sweet and sour taste",
    photo: "src/image/Anggur.png",
  },
  
  
];

export default App;
