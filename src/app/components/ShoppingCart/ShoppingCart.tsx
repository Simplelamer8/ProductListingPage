import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Cart, TempProduct } from "../../types/types";
import { Button } from "@/components/ui/button";

type ShoppingCartProps = {
  products: TempProduct[];
  cart: Cart;
  total: number;
};

export const ShoppingCart = ({ products, cart, total }: ShoppingCartProps) => {
  return (
    <div className="tableBody flex flex-col items-center">
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3 text-center">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{cart[product.id]}</TableCell>
              <TableCell>
                {(cart[product.id] * product.price).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-medium"></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>{total.toFixed(2)}$</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button className="w-96">Proceed To Payment</Button>
    </div>
  );
};
