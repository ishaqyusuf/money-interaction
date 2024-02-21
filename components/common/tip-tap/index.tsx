"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Mention from "@tiptap/extension-mention";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Document from "@tiptap/extension-document";
import suggestion from "./suggestion";
import "./style.scss";
interface Props {
  mentions?: any;
  value?;
  onChange?;
  readOnly?: boolean;
}
const Tiptap = ({ mentions, value, onChange, readOnly }: Props) => {
  const editor = useEditor({
    onUpdate(props) {
      let text = props.editor.getHTML();
      // console.log(text);
      onChange && onChange(text);
    },
    editable: !readOnly,
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      mentions &&
        Mention.configure({
          HTMLAttributes: {
            class: "mention",
          },
          suggestion: suggestion(mentions),
        }),
      // CharacterCount.configure({
      //   limit,
      // }),
    ],
    content: value,
  });

  return (
    <EditorContent
      onChange={(e) => {
        // e.target.
      }}
      className="m-1"
      editor={editor}
    />
  );
};

export default Tiptap;
