// @ts-nocheck
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud, Tag, DollarSign, CheckCircle } from "lucide-react";

export default function SellPage() {
  const [formData, setFormData] = useState({
    name: "",
    condition: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Item submitted:", formData);
    // Add backend logic here
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Sell Your Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Item Name
          </label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            icon={Tag}
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Condition
          </label>
          <Input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            placeholder="New, Like New, Used, etc."
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Price ($)
          </label>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            icon={DollarSign}
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Description
          </label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide additional details about your item"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="mt-2"
            accept="image/*"
            required
          />
        </div>
        <Button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white w-full text-lg py-4 rounded-lg font-medium flex items-center justify-center"
        >
          Submit Listing <CheckCircle className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
