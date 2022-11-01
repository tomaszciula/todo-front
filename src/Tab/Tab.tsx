import React, { FC, SyntheticEvent } from "react";
import { IState } from "../data";
import { TabWrapper } from "./Tab.styled";

interface IText {
  text: string;
  color: string;
  id: string;
  activeTab: string;
  setActiveTab: Function;
}

const Tab: FC<IText> = ({ text, color, id, activeTab, setActiveTab }) => {
  const handleTabClick = (e: SyntheticEvent) => {
    setActiveTab(e.currentTarget.id);
  };

  return (
    <TabWrapper id={id} color={color} onClick={handleTabClick}>
      {text}
    </TabWrapper>
  );
};

export default Tab;
