import { FaStar } from 'react-icons/fa';

interface Props {
  name: string;
  car: string;
  rating: number;
  comment: string;
}

export default function ReviewCard({ name, car, rating, comment }: Props) {
  return (
    <div className="border shadow-md rounded-2xl p-4 bg-white hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <div className="flex gap-1 text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} size={16} />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-1">Car Rented: {car}</p>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
}
