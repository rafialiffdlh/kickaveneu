import React from "react";
import ProductItem from "./ProductItem";

const products = [
  {
    image:
      "https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzc4MjEzL2EyN2M4NjU2Nzk2MjYyMDkzODBhNTc3ZWQzOWQ0NGZhLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==",
    name: "Nike P-6000 Metallic Silver Sail",
    price: "IDR 1,500,000",
    hot: true,
  },
  {
    image:
      "https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzY0MTQ2LzNlZDdjMzQ0OWFjZDVlMTNmNDhmZjU5MTI1ZTEzMDZlLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMH0sIndlYnAiOnsicXVhbGl0eSI6NTB9fX0=",
    name: "ASICS Gel-Kayano 14 Cream Black Metallic...",
    price: "IDR 2,350,000",
    hot: false,
  },
  {
    image:
      "https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzM4NDUyLzljMGE2N2ViYmE2ODIxZTAxMWVkZWI2YjQwMTNmY2IyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==",
    name: "Salomon XT-6 Black Phantom",
    price: "IDR 3,150,000",
    hot: true,
  },
  {
    image:
      "https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzc0NjY3LzVjN2NhZjYzNzI2ZDg1YmFhODAxMDA0MTYxOWVmMDBjLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==",
    name: "Adidas Samba Nylon Wales Bonner Core Black",
    price: "IDR 5,850,000",
    hot: false,
  },
  {
    image:
      "https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzk1ODQ4L2NlNzZhNGRiYjJlNTIzMzI4Y2M3OGFlOWY5NmYxYmVmLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==",
    name: "Adidas Samba OG Maroon (W)",
    price: "IDR 3,190,000",
    hot: false,
  },
  {
    image:
      "https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzk2Nzk2LzE4MmIyMzdhNjk5ODQyZmU0NTFmYjFmNjhlZWRmZmQzLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==",
    name: "Adidas Samba OG Cream White Sand...",
    price: "IDR 1,650,000",
    hot: true,
  },
  {
    image:
      "https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzczNTk4LzY4OTA0MWY0OWVkYTM0MTg1NjUyODM1MmM3ODFiMmVkLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==",
    name: "New Balance 990v6 x Carhartt WIP Sculptur...",
    price: "IDR 4,700,000",
    hot: false,
  },
  {
    image:
      "https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzc2MzQ2L2JjZGZhMjAxNmRiZmQyYWE4NTZkOTVmODQ0NmQ0ODZlLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ==",
    name: "Adidas Samba Pony Tonal Wales Bonner...",
    price: "IDR 4,400,000",
    hot: false,
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Trending Now</h2>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            hot={product.hot}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
