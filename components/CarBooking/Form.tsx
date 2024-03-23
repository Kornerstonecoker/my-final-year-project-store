//
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Product } from "@/types";
import { postBooking } from "@/actions/post-booking";

// Mock store locations
const STORE_LOCATIONS = [
  "Dublin City Center",
  "Liffey Valley",
  "Blanchardstown",
  "Tallaght",
  "Dundrum",
  "Swords",
  "Dun Laoghaire",
  "Sandyford",
  "Rathmines",
  "Rathfarnham",
  "Lucan",
  "Clondalkin",
  "Ballyfermot",
  "Blackrock",
  "Rathdrum",
  "Rathcormac",
  "Rathdowney",
  "Rath",
  "Rathmolyon",
  "Waterford",
  "Cork",
  "Galway",
  "Limerick",
  "Kilkenny",
  "Wexford",
  "Sligo",
  "Athlone",
  "Mullingar",
  "Carlow",
  "Naas",
  "Newbridge",
  "Maynooth",
  "Celbridge",
  "Leixlip",
  "Portlaoise",
  "Ennis",
  "Shannon",
];

interface FormValues {
  location: string;
  pickUpDate: string;
  dropOffDate: string;
  pickUpTime: string;
  dropOffTime: string;
  contactNumber: string;
}

function Form({ product }: { product: Product }) {
  const [formValues, setFormValues] = useState<FormValues>({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
  });

  const today = new Date().toISOString().split("T")[0]; // Format today's date as yyyy-mm-dd

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Stop the form from submitting traditionally

    try {
      // Use the imported postBooking function
      const bookingData = { ...formValues, productId: product.id };
      const createBookingResponse = await postBooking(bookingData);

      if (createBookingResponse) {
        toast.success("Booking created successfully!");
      } else {
        toast.error("Failed to create booking.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("Failed to create booking:", error);
    }
  };

  return (
    <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Enter your Details!
      </h3>

      {/* Pickup Location */}
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          PickUp Location
        </label>
        <select
          id="location"
          name="location"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a location
          </option>
          {STORE_LOCATIONS.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Drop off location */}
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          DropOff Location
        </label>
        <select
          id="location"
          name="location"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a location
          </option>
          {STORE_LOCATIONS.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Date and Time Inputs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
        <div>
          <label
            htmlFor="pickUpDate"
            className="block text-sm font-medium text-gray-700"
          >
            Pick Up Date
          </label>
          <input
            type="date"
            name="pickUpDate"
            id="pickUpDate"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
            min={today}
          />
        </div>
        <div>
          <label
            htmlFor="dropOffDate"
            className="block text-sm font-medium text-gray-700"
          >
            Drop Off Date
          </label>
          <input
            type="date"
            name="dropOffDate"
            id="dropOffDate"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Time Inputs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
        {/* Pick Up Time */}
        <div>
          <label
            htmlFor="pickUpTime"
            className="block text-sm font-medium text-gray-700"
          >
            Pick Up Time
          </label>
          <input
            type="time"
            id="pickUpTime"
            name="pickUpTime"
            value={formValues.pickUpTime}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Drop Off Time */}
        <div>
          <label
            htmlFor="dropOffTime"
            className="block text-sm font-medium text-gray-700"
          >
            Drop Off Time
          </label>
          <input
            type="time"
            id="dropOffTime"
            name="dropOffTime"
            value={formValues.dropOffTime}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          // value={formValues.email}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="contactNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Contact Number
        </label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={formValues.contactNumber}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
    </form>
  );
}

export default Form;

// This function can make an HTTP POST request to your backend API endpoint
// which in turn uses Prisma to create a booking in your PlanetScale database.
// const createBooking = async (bookingData: any) => {
//   // Replace this URL with your actual API endpoint
//   const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/bookings`;

//   try {
//     const response = await fetch(endpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(bookingData),
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     return response.json();
//   } catch (error) {
//     console.error("There was an error creating the booking:", error);
//     throw error;
//   }
// };
