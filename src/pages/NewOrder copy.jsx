import { useState } from "react";
import options from "../options.json";

const NewOrder = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    selectedProduct: "",
    selectedSizes: [],
    orderDescription: "",
    quantity: "",
    deliveryDate: "",
  });
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSizeDropdown = () => {
    setIsSizeDropdownOpen((prev) => !prev);
  };

  const handleSizeSelection = (size) => {
    const updatedSizes = formData.selectedSizes.includes(size)
      ? formData.selectedSizes.filter((s) => s !== size)
      : [...formData.selectedSizes, size];
    setFormData((prev) => ({ ...prev, selectedSizes: updatedSizes }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Data Submitted:", formData);
    alert("Order submitted successfully!");
    setFormData({
      customerName: "",
      mobileNumber: "",
      selectedProduct: "",
      selectedSizes: [],
      orderDescription: "",
      quantity: "",
      deliveryDate: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Customer Name and Mobile Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        {/* Product Dropdown and Size Dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Product Dropdown */}
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
              <option value="" disabled>
                Choose a product
              </option>
              {options.products.map((product, index) => (
                <option key={index} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>

          {/* Size Multi-Select Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Select Sizes</label>
            <div
              className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer"
              onClick={toggleSizeDropdown}
            >
              {formData.selectedSizes.length > 0
                ? formData.selectedSizes.join(", ")
                : "Select sizes"}
            </div>
            {isSizeDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-40 overflow-y-auto">
                {Array.from({ length: 9 }, (_, i) => (26 + i * 2).toString()).map((size) => (
                  <div
                    key={size}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSizeSelection(size)}
                  >
                    <input
                      type="checkbox"
                      id={`size-${size}`}
                      checked={formData.selectedSizes.includes(size)}
                      onChange={() => handleSizeSelection(size)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`size-${size}`}
                      className="ml-2 text-sm text-gray-700 cursor-pointer"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Order Description */}
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

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter quantity"
          />
        </div>

        {/* Delivery Date */}
        <div>
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

        {/* Submit Button */}
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
