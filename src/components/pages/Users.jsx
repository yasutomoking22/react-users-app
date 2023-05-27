import { HeaderOnly } from "../templates/HeaderOnly";
// import { PrimaryButton } from "../atoms/button/PrimaryButton";
// import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../oraganism/user/UserCard";
import styled from "styled-components";

// const user = {
//   img: "https://source.unsplash.com/NE0XGVKTmcA",
//   name: "テスト１",
//   email: "sample@012.com",
//   tel: "020-0226-2222",
//   company: {
//     name: "comcom"
//   }
// };

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    img: "https://source.unsplash.com/NE0XGVKTmcA",
    name: `テスト${val}`,
    email: "sample@012.com",
    tel: "020-0226-2222",
    company: {
      name: `comcom${val}`
    }
  };
});

export const Users = () => {
  // const { user } = props;
  return (
    <HeaderOnly>
      <StyledDiv>
        <h1>ユーザ一覧</h1>
        {/* <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton> */}
        {/* <br /> */}
        <SearchInput />
      </StyledDiv>
      <StyledArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyledArea>
    </HeaderOnly>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
`;

const StyledArea = styled.div`
  padding-top: 20px;
  width: 100%;
  display: grid;
`;
