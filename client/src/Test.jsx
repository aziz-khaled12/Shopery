import { useState } from "react";
import "@mdxeditor/editor/style.css";
import MDEditor from "@uiw/react-md-editor";

const Test = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="font-mono">
        <MDEditor value={value} onChange={setValue} />
        <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
      </div>
    </>
  );
};

export default Test;
