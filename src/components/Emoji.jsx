/* eslint-disable react/prop-types */
import React from "react";
import twemoji from "twemoji";

export default function Emoji({ text, className = "" }) {
  const html = twemoji.parse(`<span>${text}</span>`, {
    folder: "svg",
    ext: ".svg",
  });
  return (
    <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
