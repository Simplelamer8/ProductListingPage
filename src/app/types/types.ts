export type Product = {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
      rating: number;
      comment: string;
      date: string; // ISO 8601 string
      reviewerName: string;
      reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string; // ISO 8601 string
      updatedAt: string; // ISO 8601 string
      barcode: string;
      qrCode: string;
    };
    images: string[];
    thumbnail: string;
  };
  
export type ProductCardProps = {
    product: Product;
};

export type TempProduct = {
  id: string;
  title: string;
  price: number;
}

export type Cart = {
    [key: string]: number;
};
