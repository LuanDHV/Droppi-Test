"use client";

import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface IProductProps {
  id: number;
  name: string;
  price: number;
  discount: number;
  sold: number;
  image: string;
  freeShipping: boolean;
  gift: boolean;
  flashSale: boolean;
}

export default function ProductCard({ product }: { product: IProductProps }) {
  const [isWishlisted, setWishlisted] = useState(false);

  const handleWishlist = () => {
    setWishlisted(!isWishlisted);
    console.log("Wishlist clicked", isWishlisted);
  };

  const formatNumber = (num: number): string =>
    num >= 1_000
      ? (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k"
      : num.toString();

  return (
    <>
      <Link
        href="#"
        className="group relative w-full max-w-[183px] overflow-hidden rounded-b-lg rounded-t-lg border shadow-xl transition-all duration-300 ease-in-out md:max-w-[250px] lg:max-w-[300px]"
      >
        <div className="relative w-full">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={290}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Discount Label */}
          {product.discount > 0 && (
            <label className="absolute left-0 top-0 flex h-5 w-[37px] items-center justify-center rounded-br-lg rounded-tl-lg bg-[#F04438] md:h-6 md:w-[50px] lg:h-8 lg:w-[60px]">
              <strong className="h-[16px] w-[29px] text-center text-[10px] font-bold text-white md:text-xs lg:text-sm">
                {product.discount}%
              </strong>
            </label>
          )}

          {/* Wishlist Button */}
          <button
            className={`h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ${
              isWishlisted
                ? "bg-red-500 hover:bg-red-600"
                : "bg-white/90 hover:bg-gray-200"
            } absolute right-2 top-2 flex items-center justify-center rounded-full duration-300 ease-in-out`}
            onClick={handleWishlist}
          >
            <Image
              src={
                !isWishlisted
                  ? "/icons/heart-icon-black.svg"
                  : "/icons/heart-icon-white.svg"
              }
              alt="Heart Icon"
              width={24}
              height={24}
              className="h-4 w-4 object-contain md:h-5 md:w-5 lg:h-6 lg:w-6"
            />
          </button>

          {/* Coupon */}
          <div className="absolute bottom-0 left-0 flex w-full">
            {product.freeShipping && (
              <div className="flex h-5 w-[46px] items-center justify-center gap-[2px] bg-[#12B76A] px-1 pb-[2px] pt-[2px] md:h-6 md:w-auto">
                <div className="flex h-3 w-3 items-center justify-center md:h-4 md:w-4 lg:h-5 lg:w-5">
                  <Image
                    src="/icons/shipping-icon.svg"
                    alt="Shipping Icon"
                    width={24}
                    height={24}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase text-white md:text-xs lg:text-sm">
                  Free
                </span>
              </div>
            )}
            {product.gift && (
              <div className="flex h-5 w-[63px] items-center justify-center gap-[2px] rounded-tr-lg bg-[#FFE2B8] px-1 pb-[2px] pt-[2px] md:h-6 md:w-auto">
                <div className="flex h-3 w-3 items-center justify-center md:h-4 md:w-4 lg:h-5 lg:w-5">
                  <Image
                    src="/icons/gift-icon.svg"
                    alt="Gift Icon"
                    width={24}
                    height={24}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="items-center whitespace-nowrap text-[10px] font-medium text-[#CC7600] md:text-xs lg:text-sm">
                  Quà tặng
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="h-[127px] max-w-[183px] grid-rows-4 items-center border-t p-2 md:grid md:h-[150px] md:max-w-[250px] lg:h-[200px] lg:max-w-[300px] lg:p-5">
          <div className="h-[26px] w-full">
            {product.flashSale && (
              <div className="flex h-[16px] items-center rounded-md bg-[#FFE7ED] px-[6px] md:h-5 lg:h-6 lg:px-5">
                <div className="h-[14px] w-[61px] md:h-4 lg:h-5 lg:w-[100px]">
                  <Image
                    src="/images/flash-sale.png"
                    alt="Flash Sale"
                    width={140}
                    height={24}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="flex items-center text-[10px] font-medium text-[#E62F59] md:text-xs lg:text-sm">
                  •20:20•12/12
                </span>
              </div>
            )}
          </div>
          <h2 className="line-clamp-2 h-[42px] w-full overflow-hidden text-ellipsis text-[13px] font-medium text-[#393E40] md:h-auto md:text-sm">
            {product.name}
          </h2>
          <p className="h-[22px] w-full text-sm font-bold text-[#F79009] transition-all duration-300 ease-in-out group-hover:text-[#ff5e00] md:h-auto md:text-base">
            đ {product.price.toLocaleString("vi-VN")}
          </p>
          <div className="flex h-[21px] w-full items-center">
            {product.sold && product.sold !== 0 && (
              <p className="text-xs font-normal text-[#5C6366] md:text-sm">
                {formatNumber(product.sold)} Đã bán
              </p>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
