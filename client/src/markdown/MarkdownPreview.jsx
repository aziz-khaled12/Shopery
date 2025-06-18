import "@mdxeditor/editor/style.css";
import MDEditor from "@uiw/react-md-editor";
import ImagesFlex from "./ImagesFlex";

const MarkdownPreview = ({ value }) => {
  return (
    <div className="w-full" data-color-mode="light">
      <MDEditor.Markdown 
        source={value} 
        className="p-4"
        components={{
          img: ImagesFlex,
        }}
      />
    </div>
  );
};

export default MarkdownPreview;