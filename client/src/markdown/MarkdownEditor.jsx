import { useEffect, useState } from "react";
import "@mdxeditor/editor/style.css";
import MDEditor, { commands } from "@uiw/react-md-editor";
import useImageUploadModalStore from "../store/imageUploadModalStore";
import useImageUploadStore from "../store/imageUploadStore";
import ImageUploadModal from "../components/modals/ImageUploadModal";

const MarkdownEditor = ({ initialValue = "**Hello**", onChange }) => {
  const [value, setValue] = useState(initialValue);
  const { isOpen, handleOpen, handleClose } = useImageUploadModalStore();
  const { images, setImages, clearImages } = useImageUploadStore();

  const handleValueChange = (newValue) => {
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const insertImagesMarkdown = () => {
    if (images.length === 0) return;

    const urls = images.map((img) => img).join("|");
    const markdown =
      images.length > 1 ? `![pair](${urls})` : `![image](${urls})`;

    const newValue = `${value}\n${markdown}\n`;
    handleValueChange(newValue);
    clearImages();
  };

  // Modify the image command to use our modal
  const defaultCommands = [...commands.getCommands()];
  const imageCommandIndex = defaultCommands.findIndex(
    (command) => command.name === "image"
  );
  defaultCommands[imageCommandIndex] = {
    ...defaultCommands[imageCommandIndex],
    execute: () => {
      handleOpen();
    },
  };

  const handleImageUpload = (files) => {
    setImages(files);
    handleClose();
  };

  useEffect(() => {
    console.log(images)
    if (images.length > 0) {
      insertImagesMarkdown();
      clearImages();
    }
  }, [images]);

  return (
    <>
      <div className="w-full h-full" data-color-mode="light">
        <MDEditor
          value={value}
          onChange={handleValueChange}
          preview="edit" // Force edit mode only
          hideToolbar={false}
          commands={defaultCommands}
        />
      </div>
      <ImageUploadModal
        isOpen={isOpen}
        onClose={handleClose}
        onUpload={handleImageUpload}
      />
    </>
  );
};

export default MarkdownEditor;