import { Upload, Plus, X } from "lucide-react";

const ProductImagesSection = ({
  formData,
  handlePreviewImageUpload,
  handleAdditionalImageUpload,
  removeAdditionalImage,
  removePreviewImage,
}) => {
  return (
    <section className="bg-white">
      <div className="mb-6">
        <h2 className="text-xl font-medium">Product Images</h2>
        <p className="text-slate-500">Upload preview and additional images</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Preview Image
          </label>
          <label className="block cursor-pointer">
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                formData.previewImage
                  ? "border-gray-300 bg-gray-100 cursor-not-allowed opacity-60"
                  : "border-slate-300 bg-slate-50/50 hover:bg-slate-100/50"
              }`}
            >
              <Upload className="mx-auto h-10 w-10 text-slate-400 mb-3" />
              <p className="text-sm font-medium text-slate-600 mb-1">
                Click to upload preview image
              </p>
              <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePreviewImageUpload}
              className="hidden"
              disabled={!!formData.previewImage}
            />
          </label>
          {formData.previewImage?.previewUrl && (
            <div className="relative mt-4 rounded-lg overflow-hidden border">
              <img
                src={formData.previewImage.previewUrl}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={removePreviewImage}
                className="absolute top-2 right-2 bg-white text-red-600 rounded-full p-1 shadow hover:bg-red-100 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Additional Images
          </label>
          <label className="block cursor-pointer">
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                formData.images.length >= 4
                  ? "border-gray-300 bg-gray-100 cursor-not-allowed opacity-60"
                  : "border-blue-300 bg-blue-50/50 hover:bg-blue-100/50"
              }`}
            >
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
              disabled={formData.images.length >= 4}
            />
          </label>

          {formData.images.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium text-slate-700 mb-2">
                Additional Images ({formData.images.length}/4)
              </p>
              <div className="grid grid-cols-2 gap-3">
                {formData.images.map((file, index) => (
                  <div
                    key={index}
                    className="relative group rounded-lg overflow-hidden border border-blue-200"
                  >
                    <img
                      src={file.previewUrl}
                      alt={`Image ${index + 1}`}
                      className="w-full h-40 object-cover"
                    />
                    <button
                      onClick={() => removeAdditionalImage(index)}
                      className="absolute top-1 right-1 bg-white text-red-600 rounded-full p-1 shadow hover:bg-red-100 transition"
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

export default ProductImagesSection;
