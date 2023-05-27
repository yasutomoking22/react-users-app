import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  outline: none;
  border-radius: 9999px;
  /* SAS記法 */
  &:hover {
    cursor: pointer;
    opacity: 0.8; /* 色を薄くする */
  }
`;
