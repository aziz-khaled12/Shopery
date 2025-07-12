import React, { useState } from "react";
import { Modal } from "../ui";
import { Upload, X } from "lucide-react";
import { uploadBlogImages } from "../../api/seller/blogs";

const ImageUploadModal = ({ isOpen, onClose, onUpload }) => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const clearState = () => {
    setFiles([]);
    setPreviews([]);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    processFiles(selectedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const processFiles = (fileList) => {
    const validFiles = fileList.filter((file) =>
      file.type.startsWith("image/")
    );

    if (validFiles.length === 0) return;

    setFiles((prev) => [...prev, ...validFiles]);

    // Create previews
    const newPreviews = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newFiles = [...files];
    const newPreviews = [...previews];

    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newPreviews[index].preview);

    newFiles.splice(index, 1);
    newPreviews.splice(index, 1);

    setFiles(newFiles);
    setPreviews(newPreviews);
  };

  const handleUpload = async () => {
    setIsUploading(true);
    const images = await uploadBlogImages(files);
    setIsUploading(false);
    onUpload(images);
    clearState();
    onClose();
  };

  // Clean up object URLs when component unmounts
  React.useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.preview));
    };
  }, [previews]);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <section className="flex flex-col gap-6 w-full max-w-2xl">
        <h1 className="text-2xl font-semibold">Upload Images</h1>

        {/* Drag and Drop Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging ? "border-primary bg-primary/10" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <Upload className="h-10 w-10 text-gray-400" />
            <p className="text-gray-500">
              {isDragging
                ? "Drop images here"
                : "Drag & drop images here, or click to browse"}
            </p>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="px-4 py-2 bg-primary text-white rounded-md cursor-pointer hover:bg-primary/90 transition-colors"
            >
              Browse Files
            </label>
          </div>
        </div>

        {/* Preview Section */}
        {previews.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-medium mb-3">
              Selected Images ({previews.length})
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {previews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview.preview}
                    alt={`Preview ${index}`}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={files.length === 0 || isUploading}
            className={`px-4 py-2 rounded-md transition-colors ${
              files.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default ImageUploadModal;
