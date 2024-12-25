import React from "react";
import { useSelector } from "react-redux";
import { headerInterface } from "@/redux/slices/headerSlice";
import { footerInterface } from "@/redux/slices/footerSlice";
import ProductCard from "./ProductCard.tsx/ProductCard";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import useFetch from "@/app/hooks/useFetch";
import { Product } from "@/app/types/types";

export default function Products() {
  const searchText = useSelector((state: { header: headerInterface }) => state.header.searchText);
  const filterValue = useSelector((state: { header: headerInterface }) => state.header.filterValue);
  const skipValue = useSelector((state: { footer: footerInterface }) => state.footer.skipValue);

  // Only fetch if skipValue is defined and greater than or equal to 0
  const fetchUrl =
    skipValue !== undefined && skipValue >= 0
      ? `https://dummyjson.com/products?limit=10&skip=${skipValue}`
      : null;

  const { data, loading, error } = useFetch<{ products: Product[] }>(fetchUrl);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-4/5">
        <div className="grid grid-cols-3 gap-3 left-1/2 place-items-center justify-stretch">
          {[...Array(10).keys()].map((index) => (
            <SkeletonCard key={index}></SkeletonCard>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (data) {
    return (
      <div className="flex items-center justify-center w-4/5 lg:w-11/12 md:w-[90%]">
        <div className="grid lg:grid-cols-3 gap-3 left-1/2 place-items-center justify-stretch md:grid-cols-2">
          {data.products
            .filter((product) =>
              product.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .sort((a, b) => {
              if (!filterValue || filterValue === "reset") {
                return 0;
              }
              return a[filterValue] > b[filterValue] ? 1 : -1;
            })
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    );
  }

  return null; // No data to display
}
