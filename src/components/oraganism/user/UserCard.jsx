import styled from "styled-components";
import { BaseCard } from "../../atoms/card/Card";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <BaseCard>
      <img height={160} weight={160} src={user.img} alt={user.name} />
      <p>{user.name}</p>
      <StyledDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>1234-0123-0911</dd>
      </StyledDl>
    </BaseCard>
  );
};

const StyledDl = styled.dl`
  text-align: center; /* 左寄せ */
  margin-bottom: 0px;
  dt {
    float: left; /* 要素を横並びにする */
  }
  dd {
    padding-left: 22px;
    padding-bottom: 8px;
  }
`;
