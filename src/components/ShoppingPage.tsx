
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const shops = [
  {
    name: "Pawsome Toys",
    description: "Premium toys for your furry friend",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
    category: "Toys",
  },
  {
    name: "Stylish Tails",
    description: "Fashion for your four-legged companion",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    category: "Clothes",
  },
  {
    name: "Healthy Bites",
    description: "Nutritious and delicious pet food",
    image: "https://images.unsplash.com/photo-1601758282760-b6cc3d07523d",
    category: "Food",
  },
  {
    name: "Comfort Zone",
    description: "Cozy beds and accessories",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55",
    category: "Accessories",
  },
];

const ShoppingPage = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Pet Shopping</h2>
          <p className="text-gray-600 mb-6">Find the perfect items for Luna</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {shops.map((shop, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{shop.name}</h3>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-sm">
                      {shop.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{shop.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Visit Shop
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
