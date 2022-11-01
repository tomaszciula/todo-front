import React, { FC, SyntheticEvent, useState } from "react";
import Header from "../Header/Header";
import TabGroup from "../TabGroup/TabGroup";
import TodoView from "../TodoView/TodoView";
import { MainViewWrapper } from "./MainView.styled";

const MainView: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("must");

  return (
    <MainViewWrapper>
      <Header />
      <TabGroup activeTab={activeTab} setActiveTab={setActiveTab} />
      <TodoView activeTab={activeTab} setActiveTab={setActiveTab}/>
    </MainViewWrapper>
  );
};

export default MainView;
