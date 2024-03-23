// ProductCardBooking.tsx
import Image from "next/image";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import { Expand } from "lucide-react";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardBookingProps {
  product: Product;
}

const ProductCardBooking: React.FC<ProductCardBookingProps> = ({ product }) => {
  const previewModal = usePreviewModal();
  
  const onPreview = () => {
    previewModal.onOpen(product);
  }

  return (
    <div className="bg-white rounded-xl border p-3 space-y-4">
      {/* Image */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={product.images?.[0]?.url} 
          alt={product.name} 
          layout="fill"
          className="object-cover rounded-md"
        />
        <div className="absolute bottom-5 w-full flex justify-center">
          <button onClick={onPreview}>
            <Expand size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
      {/* Description and Price */}
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
        <div className="flex items-center justify-between">
          <Currency value={product?.price}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCardBooking;
