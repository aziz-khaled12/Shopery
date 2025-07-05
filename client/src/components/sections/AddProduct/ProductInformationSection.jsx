import { Input, Textarea, Divider } from "../../ui";

const ProductInformationSection = ({ formData, handleInputChange }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Product Information
        </h2>
        <p className="text-slate-500">
          Enter the basic details of your product
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Product Title
          </label>
          <Input
            placeholder="Enter product title..."
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="text-lg font-medium"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Product Brand
          </label>
          <Input
            placeholder="Enter product brand..."
            value={formData.brand}
            onChange={(e) => handleInputChange("brand", e.target.value)}
            className="text-lg font-medium"
          />
        </div>

        <Divider />

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Description
          </label>
          <Textarea
            placeholder="Describe your product in detail..."
            value={formData.description}
            onChange={(e) =>
              handleInputChange("description", e.target.value)
            }
            className="w-full min-h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductInformationSection