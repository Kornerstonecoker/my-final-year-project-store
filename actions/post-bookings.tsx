// post-bookings.tsx
import { Booking } from "@/types"; // Assuming you have a Booking type defined similar to Product

const URL = `${process.env.NEXT_PUBLIC_API_URL}/bookings`;

const postBookings = async (bookingData?: any): Promise<Booking[]> => {
  const requestOptions = bookingData ? {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookingData)
  } : {};

  const response = await fetch(URL, requestOptions);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export default postBookings;
