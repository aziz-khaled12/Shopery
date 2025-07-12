import { DollarSign, Percent } from "lucide-react";
import { Input, Divider } from "../../ui";
import DatePickerInput from "../../ui/inputs/DatePickerInput";

const PricingInventorySection = ({
  formData,
  handleInputChange,
  calculateDiscountedPrice,
}) => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Pricing & Inventory
        </h2>
        <p className="text-slate-500">
          Set your product pricing and stock levels
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Price
            </label>
            <div className="relative">
              <Input
                type="number"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                icon={DollarSign}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Quantity
            </label>
            <Input
              type="number"
              placeholder="0"
              value={formData.quantity}
              onChange={(e) => handleInputChange("quantity", e.target.value)}
            />
          </div>
        </div>

        <Divider />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Add Discount
              </label>
              <p className="text-sm text-slate-500">
                Offer a special price for this product
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.discount.isActive}
                onChange={() =>
                  handleInputChange("discount", {
                    ...formData.discount,
                    isActive: !formData.discount.isActive,
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {formData.discount.isActive && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-700">
                  Discount Value
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.discount.percentage}
                    onChange={(e) =>
                      handleInputChange("discount", {
                        ...formData.discount,
                        percentage: e.target.value,
                      })
                    }
                    icon={Percent}
                  />
                </div>
              </div>

              <div className="w-full flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-slate-700">
                    Start Date
                  </label>
                  <div className="relative">
                    <DatePickerInput
                      value={formData.discount.startDate}
                      onChange={(e) =>
                        handleInputChange("discount", {
                          ...formData.discount,
                          startDate: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-slate-700">
                    End Date
                  </label>
                  <div className="relative">
                    <DatePickerInput
                      value={formData.discount.endDate}
                      onChange={(e) =>
                        handleInputChange("discount", {
                          ...formData.discount,
                          endDate: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              {formData.price > 0 && formData.discount.percentage > 0 && (
                <div className="md:col-span-2 p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-sm text-green-800">
                    <span className="font-medium">Final Price: </span>
                    <span className="line-through text-slate-500">
                      ${formData.price}
                    </span>
                    {" → "}
                    <span className="text-green-700 font-semibold">
                      ${calculateDiscountedPrice().toFixed(2)}
                    </span>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingInventorySection;
