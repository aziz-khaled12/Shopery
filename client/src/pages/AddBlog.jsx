import React, { useState } from "react";
import { categories, tags } from "../consts/BlogsConsts";
import { uploadBlogPreviewImage } from "../api/blogs";
import {
  Button,
  ChipSelect,
  Divider,
  IconButton,
  Input,
  Select,
} from "../components/ui";
import { Eye, Upload, Save, Plus } from "lucide-react";
import MarkdownEditor from "../markdown/MarkdownEditor";
import MarkdownPreview from "../markdown/MarkdownPreview";

const AddBlog = () => {
  const [previewMode, setPreviewMode] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "**Hello**", // Initialize with markdown content
    category: "",
    tags: [],
    previewImage: null,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.title || !formData.category || !formData.content) {
      console.log("Missing required fields");
      return false;
    }
    return true;
  };

  const handleSave = () => validateForm() && console.log("Saved:", formData);
  const handlePublish = () => validateForm() && console.log("Published:", formData);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const previewImage = await uploadBlogPreviewImage(file);
    handleInputChange("previewImage", previewImage);
  };

  return (
    <div className="min-h-screen px-6 sm:px-page">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {previewMode ? "Preview Post" : "Create New Post"}
            </h1>
            <p className="text-slate-500">
              {previewMode
                ? "Review your content before publishing"
                : "Share your knowledge with the world"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-end">
          <IconButton
            onClick={() => setPreviewMode(!previewMode)}
            icon={<Eye />}
            start
          >
            {previewMode ? "Edit" : "Preview"}
          </IconButton>
          <IconButton
            onClick={handleSave}
            icon={<Save />}
            start
          >
            Save Draft
          </IconButton>
          <IconButton
            onClick={handlePublish}
            icon={<Plus />}
            start
          >
            Publish
          </IconButton>
        </div>
      </header>

      {!previewMode ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <main className="lg:col-span-2 space-y-6">
            <section className="bg-white rounded-xl shadow-sm p-6 h-full">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-800">
                  Content
                </h2>
                <p className="text-slate-500">
                  Craft your engaging blog post
                </p>
              </div>

              <div className="space-y-6 h-full">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Title
                  </label>
                  <Input
                    placeholder="Enter your blog title..."
                    value={formData.title}
                    onChange={(e) =>
                      handleInputChange("title", e.target.value)
                    }
                    className="text-lg font-medium"
                  />
                </div>

                <Divider />

                <div className="h-full">
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Content
                  </label>
                  <MarkdownEditor
                    initialValue={formData.content}
                    onChange={(content) => handleInputChange("content", content)}
                  />
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            <section className="bg-white rounded-xl shadow-sm p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-800">
                  Settings
                </h2>
                <p className="text-slate-500">Configure your post details</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Category
                  </label>
                  <Select
                    options={categories}
                    value={formData.category}
                    selectOption={(value) => handleInputChange("category", value)}
                    placeholder="Select category"
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

            <section className="bg-white rounded-xl shadow-sm p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-800">
                  Featured Image
                </h2>
                <p className="text-slate-500">
                  Add a visually compelling image
                </p>
              </div>

              <label className="block cursor-pointer">
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center transition-colors hover:border-blue-300 hover:bg-blue-50/50">
                  <Upload className="mx-auto h-10 w-10 text-slate-400 mb-3" />
                  <p className="text-sm font-medium text-slate-600 mb-1">
                    Upload an image
                  </p>
                  <p className="text-xs text-slate-500">
                    PNG, JPG up to 10MB
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
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
            </section>
          </aside>
        </div>
      ) : (
        /* Preview Mode */
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {formData.previewImage ? (
            <img
              src={formData.previewImage}
              alt="Preview"
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
              <div className="text-white text-center">
                <Upload className="mx-auto h-10 w-10 mb-2 opacity-80" />
                <p className="font-medium">Featured Image</p>
              </div>
            </div>
          )}

          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.category && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {formData.category}
                </span>
              )}
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {formData.title || "Your Blog Title Here"}
            </h1>

            <div className="flex items-center gap-3 text-slate-500 text-sm mb-6">
              <span>By Author Name</span>
              <span>•</span>
              <span>{new Date().toLocaleDateString()}</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <Divider />

            <div className="prose max-w-none mt-6">
              <MarkdownPreview value={formData.content} />
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default AddBlog;