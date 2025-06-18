import { useEffect, useState } from "react";
import "@mdxeditor/editor/style.css";
import MDEditor, { commands, getExtraCommands } from "@uiw/react-md-editor";
import ImagesFlex from "./markdown/ImagesFlex";
import useImageUploadModalStore from "./store/imageUploadModalStore";
import useImageUploadStore from "./store/imageUploadStore";
import ImageUploadModal from "./components/modals/ImageUploadModal";

const Test = () => {
  const [value, setValue] = useState("**Hello**");
  const { isOpen, handleOpen, handleClose } = useImageUploadModalStore();
  const { images, setImages, clearImages } = useImageUploadStore();

  useEffect(() => {
    console.log(isOpen);
    // When modal closes and we have images, insert them into markdown
    if (images.length > 0) {
      insertImagesMarkdown();
      clearImages();
    }
  }, [images]);

  const insertImagesMarkdown = () => {
    if (images.length === 0) return;

    const urls = images.map((img) => img).join("|");
    const markdown =
      images.length > 1 ? `![pair](${urls})` : `![image](${urls})`;

    setValue((prev) => `${prev}\n${markdown}\n`);
  };

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
    console.log("Uploaded files:", files);
    // Assuming files are already processed and have URLs
    setImages(files);
  };


  console.log(getExtraCommands())

  return (
    <>
      <div
        className="w-full px-page flex flex-col gap-4"
        data-color-mode="light"
      >
        <MDEditor
          preview="edit"
          value={value}
          onChange={setValue}
          previewOptions={{
            components: {
              img: ImagesFlex,
            },
          }}
          commands={defaultCommands}
        />
        <MDEditor.Markdown source={value} className="p-4" />
      </div>
      <ImageUploadModal
        isOpen={isOpen}
        onClose={handleClose}
        onUpload={handleImageUpload}
      />
    </>
  );
};

export default Test;
