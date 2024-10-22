import axios from "axios";
import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";

const PricingBox = ({ product }: { product: Price }) => {
  // POST request
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: product.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-secondary px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {product.nickname === "Avançado" && (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Recomendado
          </p>
        )}
        <span className="text-center mb-5 block text-xl font-medium text-primary dark:text-white">
          {product.nickname}
        </span>
        <h2 className="mb-11 text-center text-4xl font-semibold text-white dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">R$ </span>
          <span className="-ml-1 -tracking-[2px]">
            {product.unit_amount}
          </span>
          <span className="text-base font-normal text-white dark:text-dark-6">
            {" "}
            Mensais
          </span>
        </h2>

        <div className="mb-[50px]">
          <h3 className="mb-5 text-lg font-medium text-white dark:text-white">
            funcionalidades
          </h3>
          <div className="mb-10">
            {product?.offers.map((offer, i) => (
              <OfferList key={i} text={offer} />
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          <button
            onClick={handleSubscription}
            className="inline-block rounded-md bg-green-500 px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90"
          >
            Testar Gratís
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
