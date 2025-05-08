import ReviewCard from './components/ReviewCard';

const reviews = [
  {
    name: 'Ravi Patel',
    car: 'Hyundai i20',
    rating: 5,
    comment: 'The car was clean and smooth to drive. Excellent service!',
  },
  {
    name: 'Megha Shah',
    car: 'Maruti Swift',
    rating: 4,
    comment: 'Easy pickup process and affordable rates. Will rent again.',
  },
  {
    name: 'Ankit Joshi',
    car: 'Honda City',
    rating: 5,
    comment: 'Highly professional staff and top condition vehicle.',
  },
];

export default function ReviewsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">What Our Customers Say</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}
