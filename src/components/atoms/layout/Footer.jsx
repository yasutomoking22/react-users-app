import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <StyledFooter>&copy; 2023 test inc</StyledFooter>
    </>
  );
};

const StyledFooter = styled.footer`
  background-color: #11999e;
  text-align: center;
  color: #fff;
  padding: 8px 0px;
  position: fixed; /* 画面下に固定 */
  bottom: 0; /* 画面下に固定 */
  width: 100%;
`;
