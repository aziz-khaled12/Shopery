import { Eye, Save, Package } from "lucide-react";
import { IconButton } from "../../ui";

const AddProductHeader = ({
  previewMode,
  setPreviewMode,
  handleSave,
  handlePublish,
}) => {
  return (
    <header className="flex flex-col md:flex-row justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {previewMode ? "Preview Product" : "Add New Product"}
          </h1>
          <p className="text-slate-500">
            {previewMode
              ? "Review your product before publishing"
              : "Create and manage your product listing"}
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
        <IconButton onClick={handleSave} icon={<Save />} start>
          Save Draft
        </IconButton>
        <IconButton
          onClick={handlePublish}
          icon={<Package />}
          start
          variant="primary"
        >
          Publish Product
        </IconButton>
      </div>
    </header>
  );
};

export default AddProductHeader;
