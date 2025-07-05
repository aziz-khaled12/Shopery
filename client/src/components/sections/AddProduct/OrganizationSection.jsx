import { categories, tags } from "../../../consts/BlogsConsts";
import { Select, ChipSelect } from "../../ui";

const OrganizationSection = ({ formData, handleInputChange }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Organization
        </h2>
        <p className="text-slate-500">
          Categorize and tag your product
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Category
          </label>
          <Select
            options={categories}
            value={formData.category}
            selectOption={(value) =>
              handleInputChange("category", value)
            }
            placeholder="Choose a category"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Tags
          </label>
          <ChipSelect
            options={tags}
            selected={formData.tags}
            setSelected={(tags) => handleInputChange("tags", tags)}
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection