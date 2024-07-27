interface MenuItemProps {
    item: {
      id: number;
      name: string;
      description: string;
      price: string;
      imageUrl: string;
      isVegan?: boolean;
    };
  }

  const MenuItem: React.FC<MenuItemProps> = ({ item }) => (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <span className="text-lg font-bold">${item.price}</span>
        </div>
        {item.isVegan && <span className="text-sm text-green-600">Vegan</span>}
        <p className="text-gray-700 mt-2">{item.description}</p>
      </div>
    </div>
  );

  export default MenuItem;
