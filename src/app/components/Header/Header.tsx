"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { useSelector, useDispatch } from "react-redux";
import { updateSearchText, updateFilterValue, setTotal, headerInterface } from "@/redux/slices/headerSlice";
import { useCartProducts } from "@/app/hooks/useCartProducts";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";



export default function Header() {
  let dispatch = useDispatch();
  const searchText = useSelector((state: {header: headerInterface}) => state.header.searchText);
  const filterValue = useSelector((state: {header: headerInterface}) => state.header.filterValue);
  const cart = useSelector((state: {header: headerInterface}) => state.header.cart);
  const total = useSelector((state: {header: headerInterface}) => state.header.total);

  const products = useCartProducts(cart);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchText(e.target.value));
  };

  const handleFilterChange = ( value: "rating" | "price" | "weight" | "reset" ) => {
    dispatch(updateFilterValue(value));
  };

  useEffect(() => {
    let sum = 0;
    for (const key in products) {
      sum += products[key].price * cart[products[key].id];
    }
    dispatch(setTotal(sum));
  }, [cart, products, dispatch]);

  return (
    <div className="flex items-center max-w-[80%] my-10 w-full lg:max-w-[60%] md:max-w-[70%] sm:max-w-[80%]">
      <Input
        type="text"
        placeholder="Item name"
        value={searchText}
        onChange={handleInputChange}
      />

      <Select value={filterValue} onValueChange={handleFilterChange}>
        <SelectTrigger>
          <SelectValue placeholder="Sort by..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="weight">Weight</SelectItem>
            <SelectItem value="reset">⟲ Reset Filter</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="link"
            className="border border-black bg-black text-white"
          >
            Shopping Cart 🛒
          </Button>
        </SheetTrigger>
        <SheetContent className="min-w-[40vw]">
          <SheetHeader>
            <SheetTitle>Shopping Cart 🛒</SheetTitle>
            <SheetDescription>
              The list of products you have added to your cart:
            </SheetDescription>
          </SheetHeader>

          <ShoppingCart products={products} cart={cart} total={total}/>
        
        </SheetContent>
      </Sheet>
    </div>
  );
}
