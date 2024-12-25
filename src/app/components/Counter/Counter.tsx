import { updateCart } from "@/redux/slices/headerSlice";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product_id }: { product_id: string }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.header.cart);
  const quantity = cart[product_id] || 0;
  const [isDisabled, setIsDisabled] = useState(false);

  const addToCart = () => {
    const newQuantity = (cart[product_id] || 0) + 1;
    dispatch(updateCart({ product_id: [product_id], quantity: newQuantity }));
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 500);
  };

  const removeFromCart = () => {
    if (!cart[product_id]) return; // If the product is not in the cart, do nothing
    const newQuantity = cart[product_id] - 1;
    dispatch(updateCart({ product_id: [product_id], quantity: newQuantity }));
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 500);
  };

  return (
    <div className="flex items-center gap-6">
      <Button
        variant="outline"
        size="sm"
        onClick={removeFromCart}
        disabled={isDisabled}
      >
        -
      </Button>
      <span className="text-lg font-medium">{quantity}</span>{" "}
      {/* Display the quantity from the cart */}
      <Button
        variant="outline"
        size="sm"
        onClick={addToCart}
        disabled={isDisabled}
      >
        +
      </Button>
    </div>
  );
};

export default ProductCard;
