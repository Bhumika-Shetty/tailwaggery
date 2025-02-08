
import Sidebar from "@/components/Sidebar";
import PetProfile from "@/components/PetProfile";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1">
        <PetProfile />
      </main>
    </div>
  );
};

export default Index;
