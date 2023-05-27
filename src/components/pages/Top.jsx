// import { HeaderOnly } from "../templates/HeaderOnly";
import styled from "styled-components";
import { HeaderOnly } from "../templates/HeaderOnly";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const onClickAdmin = () => alert("管理者");
  const onClickGeneral = () => alert("一般");
  return (
    <HeaderOnly>
      <StyledDiv>
        <h1>トップページ</h1>
        <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
      </StyledDiv>
    </HeaderOnly>
  );
};

const StyledDiv = styled.div`
  text-align: center;
`;
