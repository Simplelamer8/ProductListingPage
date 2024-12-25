import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard, HoverCardContent } from "@radix-ui/react-hover-card";
import React from "react";
import Counter from "../../Counter/Counter";
import { ProductCardProps } from "@/app/types/types";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    
    <Card>
      <CardHeader>
        <div className="relative group flex justify-center">
          <h1 className="truncate text-2xl text-center max-w-[250px] overflow-hidden text-ellipsis">{product.title}</h1>
          <h1 className="absolute left-[50%] translate-x-[-50%] top-full mt-1 hidden max-w-xs p-2 text-sm text-white bg-black rounded shadow-lg group-hover:block">
            {product.title}
          </h1>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        {/* <div className="flex flex-col items-center justify-center"> */}
          <HoverCard>
            <HoverCardTrigger className="flex flex-col items-center justify-center">
              <img src={product.images[0]} alt="product image" className="w-1/3 self-center hover:w-1/2 transition-all ease-in-out delay-500" />
            </HoverCardTrigger>
            <HoverCardContent side="right" className="p-4 bg-white rounded-md shadow-lg border border-gray-200">
              <CardDescription>🚢 {product.shippingInformation}</CardDescription>
              <CardDescription>⏰ {product.warrantyInformation}</CardDescription>
              <CardDescription>📦 {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}m</CardDescription>
              <CardDescription>🏋 {product.weight}kg</CardDescription>
            </HoverCardContent>
          </HoverCard>
          <CardDescription className="xl:text-base lg:text-left lg:text-sm md:text-center sm:text-base">{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="justify-between lg:flex-row md:flex-col items-center">
          <p className="xl:text-base lg:text-base sm:text-base">{product.rating}★</p>
          <p className="xl:text-base lg:text-base lg:ml-[5%] md:ml-0 sm:text-base">{product.price}$</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="ml-[5%] xl:w-auto xl:text-base lg:text-sm md:text-base">Add to shopping cart</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Counter product_id={`${product.id}`} />
            </DropdownMenuContent>
          </DropdownMenu>

      </CardFooter>
    </Card>
  );
}
