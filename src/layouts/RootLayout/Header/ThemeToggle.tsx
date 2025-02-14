// Header/ThemeToggle.tsx
import styled from "@emotion/styled";
import React from "react";
import { Emoji } from "src/components/Emoji";
import useScheme from "src/hooks/useScheme";

const ThemeToggle: React.FC = () => {
  const [scheme, setScheme] = useScheme();

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light");
  };

  return (
    <StyledWrapper onClick={handleClick} title="Toggle theme">
      <Emoji>{scheme === "light" ? "☀️" : "🌙"}</Emoji>
    </StyledWrapper>
  );
};

export default ThemeToggle;

const StyledWrapper = styled.div`
  cursor: pointer;
`;
