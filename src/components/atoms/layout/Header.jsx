import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/users">USER</StyledLink>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  background-color: #11999e;
  text-align: center;
  color: #fff;
  padding: 8px 0px;
`;

const StyledLink = styled(Link)`
  margin: 0 8px;
`;
