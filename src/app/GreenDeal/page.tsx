// @ts-nocheck
"use client";
import { useState } from "react";
import {
  ShoppingCart,
  RefreshCw,
  Tag,
  UploadCloud,
  Smartphone,
  Laptop,
  Tv,
  Watch,
  Headphones,
  Camera,
  Gamepad2,
  Tablet,
  Printer,
  Speaker,
  Monitor,
  HardDrive,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RefurbishedMarketplace() {
  const items = [
    {
      id: 1,
      name: "Refurbished Laptop",
      condition: "Like New",
      price: "$450",
      image: "/images/laptop.jpg",
    },
    {
      id: 2,
      name: "Second-Hand Smartphone",
      condition: "Good",
      price: "$250",
      image: "/images/smartphone.jpg",
    },
    {
      id: 3,
      name: "Pre-Owned Smartwatch",
      condition: "Fair",
      price: "$120",
      image: "/images/smartwatch.jpg",
    },
    {
      id: 4,
      name: "Recycled Office Chair",
      condition: "Good",
      price: "$90",
      image: "/images/chair.jpg",
    },
    {
      id: 5,
      name: "Used Gaming Console",
      condition: "Like New",
      price: "$300",
      image: "/images/console.jpg",
    },
    {
      id: 6,
      name: "Refurbished Tablet",
      condition: "Good",
      price: "$200",
      image: "/images/tablet.jpg",
    },
    {
      id: 7,
      name: "Eco-Friendly Printer",
      condition: "Fair",
      price: "$150",
      image: "/images/printer.jpg",
    },
    {
      id: 8,
      name: "Reused Bicycle",
      condition: "Like New",
      price: "$180",
      image: "/images/bicycle.jpg",
    },
    {
      id: 9,
      name: "Second-Hand AirPods",
      condition: "Good",
      price: "$80",
      image: "/images/airpods.jpg",
    },
    {
      id: 10,
      name: "Repaired Coffee Maker",
      condition: "Fair",
      price: "$60",
      image: "/images/coffeemaker.jpg",
    },
    {
      id: 11,
      name: "Pre-Loved DSLR Camera",
      condition: "Like New",
      price: "$500",
      image: "/images/camera.jpg",
    },
    {
      id: 12,
      name: "Used Electric Scooter",
      condition: "Good",
      price: "$400",
      image: "/images/scooter.jpg",
    },
  ];

  return (
    <div className={`container mx-auto px-4 py-16 ${poppins.className}`}>
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 tracking-tight">
          Refurbished & Reused{" "}
          <span className="text-green-600">Marketplace</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Give electronics a second life and reduce e-waste! Buy, sell, or
          donate refurbished items.
        </p>
        <Link href="/GreenDeal/SellPage">
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-4 px-8 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
            Sell an Item
            <UploadCloud className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-10 mb-20">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}

function ProductCard({ item }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center text-center">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-40 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
      <p className="text-lg font-bold text-green-600">{item.price}</p>
      <p className="text-gray-600">Condition: {item.condition}</p>
      <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
        Buy Now <ShoppingCart className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
