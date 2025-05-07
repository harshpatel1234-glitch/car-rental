import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModel from "../CarBooking/BookingModel";

function CarList({ carlists, selectedBrand, priceOrder }: any) {
  const [selectedCar, setSelectedCar] = useState<any>(null);

  // Filter cars based on selected brand
  let filteredCars = selectedBrand
    ? carlists.filter((car: any) =>
        car.name.toLowerCase().includes(selectedBrand.toLowerCase())
      )
    : carlists;

  // Sort cars based on price order selection
  if (priceOrder === "low-to-high") {
    filteredCars = filteredCars.sort(
      (a: any, b: any) => parseFloat(a.price) - parseFloat(b.price)
    );
  } else if (priceOrder === "high-to-low") {
    filteredCars = filteredCars.sort(
      (a: any, b: any) => parseFloat(b.price) - parseFloat(a.price)
    );
  }

  const handleCarClick = (car: any) => {
    setSelectedCar(car);
    (window as any).my_modal_4.showModal();
  };

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCars.map((car: any) => (
        <div
          key={car.id}
          className="cursor-pointer border rounded-lg shadow-md p-4 bg-white"
          onClick={() => handleCarClick(car)}
        >
          <CarCard name={car.name} price={car.price} image={car.image} />

          {/* Damage Info */}
          {car.damageReports && car.damageReports.length > 0 && (
            <div className="mt-2 text-sm bg-red-100 p-2 rounded">
              <h4 className="font-semibold text-red-600">Damage Reports:</h4>
              {car.damageReports.map((report: any, index: number) => (
                <div key={index} className="border-t border-gray-300 mt-1 pt-1">
                  <p><strong>Status:</strong> {report.status}</p>
                  <p><strong>Description:</strong> {report.description}</p>
                  {report.image && (
                    <img
                      src={report.image}
                      alt="damage"
                      className="mt-1 rounded w-full h-32 object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Modal for Booking */}
      <dialog id="my_modal_4" className="modal">
        {selectedCar && <BookingModel car={selectedCar} />}
      </dialog>
    </div>
  );
}

export default CarList;
