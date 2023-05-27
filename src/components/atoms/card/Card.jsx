// USERカードの枠を作成
import styled from "styled-components";

export const BaseCard = (props) => {
  const { children } = props;
  return <StyledDiv>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 2px 2px;
  border-radius: 8px;
  padding: 8px;
  margin: 8px 8px;
`;
