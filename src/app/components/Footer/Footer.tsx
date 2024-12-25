import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { footerInterface, setSkipValue } from "@/redux/slices/footerSlice";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Footer() {
  const dispatch = useDispatch();
  const skipValue = useSelector((state: { footer: footerInterface }) => state.footer.skipValue);

  // Update skip value for pagination
  const handlePaginationClick = (page: number) => {
    dispatch(setSkipValue((page - 1) * 10));
  };

  // Handle previous/next pagination
  const handleStepChange = (direction: "plus" | "minus") => {
    if ((direction === "minus" && skipValue === 0) || (direction === "plus" && skipValue === 90)) {
      return;
    }
    const step = direction === "plus" ? 10 : -10;
    dispatch(setSkipValue(skipValue + step));
  };

  // Generate an array of pages (1–10)
  const pages = Array.from({ length: 10 }, (_, index) => index + 1);

  // Calculate the current active page
  const activePage = skipValue / 10 + 1;

  return (
    <Pagination className="my-10">
      <PaginationContent>
        {/* Previous button */}
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => handleStepChange("minus")} />
        </PaginationItem>

        {/* Page buttons */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === activePage}
              onClick={() => handlePaginationClick(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next button */}
        <PaginationItem>
          <PaginationNext href="#" onClick={() => handleStepChange("plus")} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
