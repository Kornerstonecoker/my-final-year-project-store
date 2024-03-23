// post-booking.tsx
import { Booking } from "@/types"; // Assuming you have a Booking type defined similar to Product

const URL = `${process.env.NEXT_PUBLIC_API_URL}/bookings`;

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

// export const postBooking = async (bookingData: any): Promise<Booking> => {
//   const response = await fetch(URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(bookingData)
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return response.json();
// };

// export default postBooking;
// post-booking.tsx

export const postBooking = async (bookingData: any): Promise<Booking> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      // If the response is not successful, throw an error to be caught below
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // Parse the JSON response body
  } catch (error) {
    console.error('There was an error creating the booking:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

