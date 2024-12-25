"use client";
import Header from "@/app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import { Provider } from "react-redux";
import store from "@/redux/store";


export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <Products />
        <Footer />
      </div>
    </Provider>
  );
}
