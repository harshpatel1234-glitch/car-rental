"use client";

import { useState } from "react";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/Home/SearchInput";
import CarFilterOption from "./components/Home/CarFilterOption";
import CarList from "./components/Home/CarList";
import ToastMsg from "./components/ToastMsg";
import { BookingCreated } from "@/context/BookingCreated";
import AboutShowroom from "./components/About/AboutShowroom";
import ReviewCard from "./components/ReviewCard";

export default function Home() {
  const carData = [
    { id: 1, name: "Tata Harrier", price: "45", image: "/TATA_HARRIER.jpg" },
    {
      id: 2,
      name: "Mercedes-Benz A-class",
      price: "75",
      image: "/mercedes-benz-a-class-limousine.png",
    },
    { id: 3, name: "KIA Carens", price: "40", image: "/KIA_CARENS.jpg" },
    { id: 4, name: "BMW X1", price: "70", image: "/BMW_X1.png" },
    { id: 5, name: "Honda Civic", price: "42", image: "/Civic.png" },
    { id: 6, name: "Toyota Fortuner", price: "45", image: "/fortuner.jpeg" },
    {
      id: 7,
      name: "Mercedes-Benz C-class",
      price: "80",
      image: "/C-class.png",
    },
    { id: 8, name: "BMW X3", price: "75", image: "/BMW_X3.png" },
    { id: 9, name: "Toyota Innova", price: "40", image: "/innova.png" },
  ];

  const initialReviews = [
    {
      name: "Ravi Patel",
      car: "Hyundai i20",
      rating: 5,
      comment: "The car was clean and smooth to drive. Excellent service!",
    },
    {
      name: "Megha Shah",
      car: "Maruti Swift",
      rating: 4,
      comment: "Easy pickup process and affordable rates. Will rent again.",
    },
    {
      name: "Ankit Joshi",
      car: "Honda City",
      rating: 5,
      comment: "Highly professional staff and top condition vehicle.",
    },
    {
      name: "Neha Singh",
      car: "Ford EcoSport",
      rating: 4,
      comment: "Great experience overall, but the car could have been cleaner.",
    },
    {
      name: "Vikram Singh",
      car: "Toyota Corolla",
      rating: 5,
      comment:
        "The booking process was seamless, and the car was in perfect condition.",
    },
  ];

  const [reviews] = useState(initialReviews);
  const [newReviews, setNewReviews] = useState<any[]>([]);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPriceOrder, setSelectedPriceOrder] = useState<string | null>(
    null
  );
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);

  // Review Form State
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleCarSelection = (brandName: string) => setSelectedBrand(brandName);
  const handlePriceOrderSelection = (order: string) =>
    setSelectedPriceOrder(order);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    const newReview = { name, car, rating, comment };
    setNewReviews([newReview, ...newReviews]);

    // Reset form & close modal
    setName("");
    setCar("");
    setRating(1);
    setComment("");
    setShowModal(false);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookingCreated.Provider value={{ showToastMsg, setShowToastMsg }}>
        <Hero />
        <SearchInput />
        <CarFilterOption
          carlists={carData}
          onCarSelect={handleCarSelection}
          onPriceOrderSelect={handlePriceOrderSelection}
        />
        <CarList
          carlists={carData}
          selectedBrand={selectedBrand}
          priceOrder={selectedPriceOrder}
        />
        {showToastMsg && <ToastMsg msg={""} />}
      </BookingCreated.Provider>

      <AboutShowroom />

      {/* Reviews Section */}
      <div id="reviews-section" className="p-6">
        <h2 className="text-5xl text-black font-bold m-5">Customer Reviews</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={`initial-${index}`} {...review} />
          ))}

          {showAllReviews &&
            newReviews.map((review, index) => (
              <ReviewCard key={`new-${index}`} {...review} />
            ))}
        </div>

        {/* Actions Buttons */}
        <div className="text-center mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
            onClick={() => setShowAllReviews(true)}
            disabled={newReviews.length === 0}
          >
            {newReviews.length > 0 ? "Read More Reviews" : "Read More Reviews"}
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all"
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* Modal for Writing Review */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Write a Review
            </h1>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block font-semibold">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold">Car Rented</label>
                <input
                  type="text"
                  value={car}
                  onChange={(e) => setCar(e.target.value)}
                  required
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold">Rating</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full p-3 border rounded-md"
                >
                  <option value={1}>1 - Poor</option>
                  <option value={2}>2 - Fair</option>
                  <option value={3}>3 - Good</option>
                  <option value={4}>4 - Very Good</option>
                  <option value={5}>5 - Excellent</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold">Your Review</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  rows={4}
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-800"
                >
                  Submit Review
                </button>
              </div>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
