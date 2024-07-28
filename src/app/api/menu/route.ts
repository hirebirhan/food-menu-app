// src/app/api/menu/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
      id: 1,
      title: 'Delicious Pasta',
      description: 'A mouth-watering pasta dish with a blend of rich flavors.',
      image: 'https://i.ytimg.com/vi/EbZFbWirh6c/sddefault.jpg'
    },
    {
      id: 2,
      title: 'Grilled Steak',
      description: 'A perfectly grilled steak served with fresh vegetables.',
      image: 'https://everylittlecrumb.com/wp-content/uploads/2020/01/lambmandi1-768x1152.jpg'
    },
    {
      id: 3,
      title: 'Sushi Platter',
      description: 'An exquisite sushi platter with a variety of fresh sushi.',
      image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaharban/Arabian_Chicken_Mandhi.jpg'
    },
    {
      id: 4,
      title: 'Delicious Pasta',
      description: 'A mouth-watering pasta dish with a blend of rich flavors.',
      image: 'https://everylittlecrumb.com/wp-content/uploads/2020/01/lambmandi1-768x1152.jpg'
    },
    {
      id: 5,
      title: 'Shwarma',
      description: 'A perfectly grilled steak served with fresh vegetables.',
      image: 'https://jackednutrition.pk/cdn/shop/articles/Arabic_shawarma_1200x800.jpg?v=1679388118'
    },
    {
      id: 6,
      title: 'Sushi Platter 6',
      description: 'An exquisite sushi platter with a variety of fresh sushi.',
      image: 'https://i.ytimg.com/vi/EbZFbWirh6c/sddefault.jpg'
    }
  ];

  return NextResponse.json(data);
}
