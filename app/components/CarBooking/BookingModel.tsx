import { useState } from "react";
import { useRouter } from "next/navigation";
import CarCard from "../Home/CarCard";
import Form from "./Form";
import ToastMsg from "../ToastMsg";

interface Car {
  name: string;
  price: string;
  image: string;
}

interface BookingModelProps {
  car: Car;
}

function BookingModel({ car }: BookingModelProps) {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [toastMessage, setToastMessage] = useState("");
  const router = useRouter();

  const handleValidation = (formData: Record<string, string>): boolean => {
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        alert(`Please fill in the ${key.replace(/([A-Z])/g, " $1").toLowerCase()}.`);
        return false;
      }
    }

    setToastMessage(
      "✅ Your booking has been successfully confirmed. Thank you for choosing our service. We will contact you shortly with the details."
    );

    setTimeout(() => setToastMessage(""), 5000);
    setIsFormOpen(false);
    return true;
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    router.push("/");
  };

  return (
    <>
      {toastMessage && <ToastMsg msg={toastMessage} />}
      {isFormOpen && (
        <form
          method="dialog"
          className="model-box w-11/12 max-w-5xl bg-white rounded-lg p-6 md:p-10 max-h-[90vh] overflow-y-auto"
        >
          <div className="border-b-[1px] pb-4">
            <h3 className="text-xl md:text-[30px] font-light text-gray-400 text-center md:text-left">
              Rent A Car
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div>
              {car && (
                <CarCard name={car.name} price={car.price} image={car.image} />
              )}
            </div>
            <div>
              <Form
                onValidate={handleValidation}
                onSubmit={(formData) => console.log(formData)}
                onCancel={handleCancel}
              />
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default BookingModel;
