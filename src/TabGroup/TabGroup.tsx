import React, { FC } from "react";
import { IState } from "../data";
import Tab from "../Tab/Tab";
import { TabGroupMainWrapper, TabGroupWrapper } from "./TabGroup.styled";

interface ITabGroupState {
  activeTab: string;
  setActiveTab: Function;
}

const TabGroup: FC<ITabGroupState> = (props) => {
  return (
    <TabGroupMainWrapper>
      <TabGroupWrapper>
        <Tab
          id="must"
          text="Must DO"
          color="#882D60"
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
        <Tab
          id="should"
          text="Should DO"
          color="#AA3939"
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
        <Tab
          id="maybe"
          text="If I have time"
          color="#AA6C39"
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
      </TabGroupWrapper>

      <TabGroupWrapper style={{ width: "40%", justifyContent: "space-between" }}>
        <Tab
          id="notes"
          text="Notes"
          color="#7339aa"
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
        <Tab
          text="Add"
          color="#AA3939"
          id={"add"}
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
      </TabGroupWrapper>
    </TabGroupMainWrapper>
  );
};

export default TabGroup;
