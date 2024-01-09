import React, { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";

interface HeadingWithLinkProps {
  id: string;
  children: React.ReactNode;
}

export default function HeadingWithLink({
  id,
  children,
}: HeadingWithLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <h1
      id={id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "inline-block",
        scrollMarginTop: "80px",
      }}
    >
      {hovered && (
        <a
          href={`#${id}`}
          style={{
            textDecoration: "none",
            position: "absolute",
            left: 0,
            transform: "translateX(-100%)",
          }}
        >
          <LinkIcon />
        </a>
      )}
      {children}
    </h1>
  );
}
