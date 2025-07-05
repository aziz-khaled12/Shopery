import { Upload, Plus, X } from "lucide-react";

const ProductImagesSection = ({ 
  formData, 
  handlePreviewImageUpload, 
  handleAdditionalImageUpload, 
  removeAdditionalImage,
}) => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Product Images
        </h2>
        <p className="text-slate-500">
          Upload preview and additional images
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Preview Image
          </label>
          <label className="block cursor-pointer">
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center bg-slate-50/50 hover:bg-slate-100/50 transition-colors">
              <Upload className="mx-auto h-10 w-10 text-slate-400 mb-3" />
              <p className="text-sm font-medium text-slate-600 mb-1">
                Click to upload preview image
              </p>
              <p className="text-xs text-slate-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePreviewImageUpload}
              className="hidden"
            />
          </label>
          {formData.previewImage && (
            <div className="mt-4">
              <img 
                src={formData.previewImage} 
                alt="Preview" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Additional Images
          </label>
          <label className="block cursor-pointer">
            <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center bg-blue-50/50 hover:bg-blue-100/50 transition-colors">
              <Plus className="mx-auto h-10 w-10 text-blue-400 mb-3" />
              <p className="text-sm font-medium text-blue-600 mb-1">
                Click to upload additional images
              </p>
              <p className="text-xs text-blue-500">
                Up to 4 images, PNG, JPG, GIF
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleAdditionalImageUpload}
              className="hidden"
            />
          </label>

          {formData.additionalImages.length > 0 && (
            <div className="mt-3 space-y-2">
              <p className="text-sm font-medium text-slate-700">
                Additional Images ({formData.additionalImages.length}/4)
              </p>
              <div className="space-y-2">
                {formData.additionalImages.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-blue-50 border border-blue-200 rounded"
                  >
                    <span className="text-sm text-blue-700 truncate">
                      {file.name}
                    </span>
                    <button
                      onClick={() => removeAdditionalImage(index)}
                      className="p-1 rounded-full hover:bg-red-100 hover:text-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductImagesSection