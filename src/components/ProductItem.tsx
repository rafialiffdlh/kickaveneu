import React from "react";

interface ProductItemProps {
  image: string;
  name: string;
  price: string;
  hot?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({
  image,
  name,
  price,
  hot,
}) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
        {hot && <span className="absolute top-2 right-2">🔥</span>}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-blue-500 font-semibold">{price}</p>
    </div>
  );
};

export default ProductItem;
