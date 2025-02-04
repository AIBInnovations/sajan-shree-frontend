import { useState } from "react";
import options from "../options.json";

const NewOrder = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    selectedProduct: "",
    sizeQuantities: {}, // Object to store quantities for each size
    collarType: "",
    cuffType: "",
    neckShapeType: "",
    orderDescription: "",
    deliveryDate: "",
    image: null, // Added for image upload
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSizeQuantityChange = (size, value) => {
    setFormData((prev) => ({
      ...prev,
      sizeQuantities: {
        ...prev.sizeQuantities,
        [size]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Data Submitted:", formData);
    alert("Order submitted successfully!");
    setFormData({
      customerName: "",
      mobileNumber: "",
      selectedProduct: "",
      sizeQuantities: {},
      collarType: "",
      cuffType: "",
      neckShapeType: "",
      orderDescription: "",
      deliveryDate: "",
      image: null,
    });
  };

  const isShirtOrTShirt =
    formData.selectedProduct.toLowerCase().includes("shirt") ||
    formData.selectedProduct.toLowerCase().includes("t-shirt");

  return (
    <div className="bg-white w-full h-full px-8 py-6">
      <h1 className="text-2xl font-bold mb-6">Create New Order</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter customer name"
            />
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter mobile number"
            />
          </div>
        </div>

        <div>
          <label htmlFor="selectedProduct" className="block text-sm font-medium text-gray-700">
            Select Product
          </label>
          <select
            id="selectedProduct"
            name="selectedProduct"
            value={formData.selectedProduct}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Choose a product</option>
            {options.products.map((product, index) => (
              <option key={index} value={product}>{product}</option>
            ))}
          </select>
        </div>

        {isShirtOrTShirt && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <label htmlFor="collarType" className="block text-sm font-medium text-gray-700">
                Collar Type
              </label>
              <select
                id="collarType"
                name="collarType"
                value={formData.collarType}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose a collar type</option>
                {["Mandarin", "Spread", "Button-Down", "Wingtip"].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cuffType" className="block text-sm font-medium text-gray-700">
                Cuff Type
              </label>
              <select
                id="cuffType"
                name="cuffType"
                value={formData.cuffType}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose a cuff type</option>
                {["Barrel", "French", "Convertible", "Round"].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="neckShapeType" className="block text-sm font-medium text-gray-700">
                Neck Shape Type
              </label>
              <select
                id="neckShapeType"
                name="neckShapeType"
                value={formData.neckShapeType}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose a neck shape type</option>
                {["Round", "V-Neck", "Crew", "Henley"].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Enter Quantities for Each Size
          </label>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  {Array.from({ length: 11 }, (_, i) => 22 + i * 2).map((size) => (
                    <th key={size} className="px-4 py-2 border border-gray-300">
                      {size}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Array.from({ length: 11 }, (_, i) => 22 + i * 2).map((size) => (
                    <td key={size} className="px-4 py-2 border border-gray-300">
                      <input
                        type="number"
                        min="0"
                        value={formData.sizeQuantities[size] || ""}
                        onChange={(e) => handleSizeQuantityChange(size, e.target.value)}
                        className="w-full p-1 text-center border rounded focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <label htmlFor="orderDescription" className="block text-sm font-medium text-gray-700">
            Order Description
          </label>
          <textarea
            id="orderDescription"
            name="orderDescription"
            value={formData.orderDescription}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter order details"
          />
        </div>

        {/* Delivery Date and Image Upload */}
        <div className="flex flex-wrap gap-8">
          <div className="flex-1">
            <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">
              Delivery Date
            </label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              onChange={handleImageChange}
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewOrder;
