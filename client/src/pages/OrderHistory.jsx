import React, { useState } from "react";
import { orderHistory } from "../consts/DashboardConsts";
import { Pagination } from "../components/ui";

const OrderHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 0);
  };

  const totalPages = Math.ceil(orderHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = orderHistory.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
      case "refunded":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <div>
      <div className="bg-white border border-[#e6e6e6] rounded-lg overflow-hidden">
        <div className="py-4 px-4 sm:px-6">
          <h1 className="text-lg sm:text-xl font-medium">Order History</h1>
        </div>

        {/* Desktop Table Header - Hidden on mobile */}
        <div className="hidden bg-gray-100 md:grid md:grid-cols-9 gap-4 py-3 px-6 border-b border-[#e6e6e6] text-sm font-medium text-[#4d4d4d]">
          <div className="col-span-2">ORDER ID</div>
          <div className="col-span-2">DATE</div>
          <div className="col-span-2">TOTAL</div>
          <div className="col-span-2">STATUS</div>
          <div className="col-span-1"></div>
        </div>

        {/* Order History Items */}
        {currentData.map((item) => (
          <div
            key={item._id}
            className={`grid grid-cols-1 md:grid-cols-9 gap-4 p-4 border-[#e6e6e6] ${currentData.indexOf(item) === currentData.length - 1 ? 'border-b-0' : 'border-b'}`}
          >
            {/* Mobile view - stacked layout */}
            <div className="md:hidden space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Order ID:</span>
                <span className="truncate max-w-[150px]">
                  #{item._id.slice(-6).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Date:</span>
                <span>{item.createdAt.toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total:</span>
                <span>
                  ${item.total.toFixed(2)} ({item.products.length}{" "}
                  {item.products.length > 1 ? "items" : "item"})
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Status:</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Desktop view - grid layout */}
            <div className="hidden md:block col-span-2 truncate">
              #{item._id.slice(-6).toUpperCase()}
            </div>
            <div className="hidden md:block col-span-2">
              {item.createdAt.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="hidden md:block col-span-2 font-medium">
              ${item.total.toFixed(2)}{" "}
              <span className="font-normal">
                ({item.products.length} Products)
              </span>
            </div>
            <div className="hidden md:block col-span-2">
              <span
                className={`px-2 py-1 rounded-full text-sm ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
            </div>
            <div className="hidden md:flex col-span-1 justify-end">
              <button className="text-primary cursor-pointer hover:text-hard-primary text-sm font-medium">
                View Details
              </button>
            </div>

            {/* Mobile view action button */}
            <div className="md:hidden pt-2">
              <button className="w-full cursor-pointer py-2 border border-[#e6e6e6] rounded text-primary hover:bg-green-gray-50">
                View Details
              </button>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-6 mb-8"
        />

        {orderHistory.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="text-gray-400 mb-4">
              <History className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No order history
            </h3>
            <p className="text-gray-500 mb-6">
              Buy something to see your order history
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
