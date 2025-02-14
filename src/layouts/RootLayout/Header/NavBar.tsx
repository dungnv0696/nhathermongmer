// Header/NavBar.tsx
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavBar: React.FC = () => {
  const router = useRouter();
  const links = [{ id: 1, name: "About", to: "/about" }];

  return (
    <StyledWrapper>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to} passHref>
              <a className={router.pathname === link.to ? "active" : ""}>
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default NavBar;

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-left: 1rem;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.gray11};
        transition: color 0.2s;
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
        &.active {
          font-weight: bold;
          border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
