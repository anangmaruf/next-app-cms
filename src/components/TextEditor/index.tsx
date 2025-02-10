"use client";

import { FC, useEffect, useRef } from "react";
import Quill from "quill";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
}
const TextEditor: FC<QuillEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (Quill && editorRef.current && !quillInstanceRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["link", "image", "video", "formula"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ align: [] }],

            ["clean"], // remove formatting button
          ],
        },
      });

      quill.on("text-change", () => {
        const content = quill.root.innerHTML;
        onChange(content);
      });

      quillInstanceRef.current = quill;
    }
  }, [onChange]);

  useEffect(() => {
    if (quillInstanceRef.current && value !== quillInstanceRef.current.root.innerHTML) {
      quillInstanceRef.current.root.innerHTML = value;
    }
  }, [value]);

  return <div ref={editorRef} className="w-full !h-[400px]"></div>;
};

export default dynamic(() => Promise.resolve(TextEditor), { ssr: false });
