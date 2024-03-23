import React from "react";
import Modal from "../ui/modal";
import { Product } from "@/types";
import ProductCardBooking from "./product-card-booking";
import Form from "./Form";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  product: Product;
}

const BookingModal: React.FC<BookingModalProps> = ({
  open,
  onClose,
  product,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-box w-full max-w-4xl mx-auto bg-white p-6 rounded-lg ">
        <div className="border-b pb-4">
          <h3 className="text-2xl font-medium text-gray-700">
            Rent A Bike Now!
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          <ProductCardBooking product={product} />
          <Form product={product} />
        </div>
        <div className="flex justify-between items-center pt-4">
          <button
            className="text-sm bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="text-sm bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            type="submit"
            form="booking-form" 
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;
