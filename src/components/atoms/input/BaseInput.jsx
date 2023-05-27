// 入力テキストボックス
import styled from "styled-components";

export const BaseInput = (porps) => {
  const { placeholder } = porps;
  return (
    <>
      <StyledInput type="text" placeholder={placeholder}></StyledInput>
    </>
  );
};

const StyledInput = styled.input`
  padding: 8px 16px;
  border: solid;
  outline: none;
`;
