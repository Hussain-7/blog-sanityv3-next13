"use client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./RichTextComponents";
type Props = {
  body: Block[];
};
const PortableTextCustom = ({ body }: Props) => {
  return <PortableText value={body} components={RichTextComponents} />;
};

export default PortableTextCustom;
