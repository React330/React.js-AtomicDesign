import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `なめこ${val}`,
    image:
      "https://media.istockphoto.com/photos/miso-soup-with-nameko-mushrooms-picture-id1320227593?b=1&k=20&m=1320227593&s=170667a&w=0&h=-oFRwT1z7c-gKETA0r4Qihis32sktxBJDhTwhrFc4IM=",
    email: "12345exsample@",
    phone: "090-0077-8899",
    company: {
      name: "テスト株式会社"
    },
    website: "https://goggle.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px. 1fr));
  grid-gap: 20px;
`;
