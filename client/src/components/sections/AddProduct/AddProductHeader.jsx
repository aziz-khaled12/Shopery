import { Eye, Save, Package, Plus } from "lucide-react";
import { IconButton } from "../../ui";

const AddProductHeader = ({
  previewMode,
  setPreviewMode,
  handleSave,
  handlePublish,
}) => {
  return (
    <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8 border-b border-gray-200 py-4 px-6">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-medium text-slate-900">
            {previewMode ? "Preview Product" : "Add New Product"}
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-end">
        <IconButton
          onClick={() => setPreviewMode(!previewMode)}
          icon={<Eye />}
          start
          size="small"
        >
          {previewMode ? "Edit" : "Preview"}
        </IconButton>
        <IconButton onClick={handleSave} icon={<Save />} size="small" start>
          Save Draft
        </IconButton>
        <IconButton onClick={handlePublish} icon={<Plus />} size="small" start>
          Publish
        </IconButton>
      </div>
    </header>
  );
};

export default AddProductHeader;
