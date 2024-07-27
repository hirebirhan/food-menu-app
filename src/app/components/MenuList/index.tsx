import MenuItem from "../MenuItem";

interface MenuListProps {
  items: {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    isVegan?: boolean;
  }[];
}

const MenuList: React.FC<MenuListProps> = ({ items }) => (
  <div className="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto p-4">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map(item => (
      <MenuItem key={item.id} item={item} />
    ))}
  </div>
  </div>
);

export default MenuList;
