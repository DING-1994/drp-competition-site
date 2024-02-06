import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import { Typography } from "@mui/material";

interface HeadingWithLinkProps {
  id: string;
  children: React.ReactNode;
}

export default function HeadingWithLink({
  id,
  children,
}: HeadingWithLinkProps) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    navigate(`#${id}`);
  };

  return (
    <Typography
      variant="h5"
      id={id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        paddingTop: "1.5rem",
        paddingBottom: "0.5rem",
        fontWeight: "bold",
        position: "relative",
        display: "inline-block",
        scrollMarginTop: "calc(5vh + 2em)",
      }}
    >
      {hovered && (
        <a
          href={`#${id}`}
          onClick={handleClick}
          style={{
            textDecoration: "none",
            position: "absolute",
            left: 0,
            transform: "translateX(-100%)",
          }}
        >
          <LinkIcon fontSize="small" />
        </a>
      )}
      {children}
    </Typography>
  );
}
