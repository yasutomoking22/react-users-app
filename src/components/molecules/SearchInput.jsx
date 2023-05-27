// 「検索テキストボックス」と「検索ボタン」のセット
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { BaseInput } from "../atoms/input/BaseInput";

export const SearchInput = () => {
  return (
    <>
      <BaseInput placeholder="検索条件入力"></BaseInput>
      <PrimaryButton>検索</PrimaryButton>
    </>
  );
};
