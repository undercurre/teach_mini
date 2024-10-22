import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import { useState } from "react";
import "./index.scss";

const Index = () => {
  const [state, setState] = useState({
    current: 0,
  });
  function handleClick(value) {
    setState((preState) => {
      return {
        ...preState,
        current: value,
      };
    });
  }

  const tabList = [
    { title: "标签页1" },
    { title: "标签页2" },
    { title: "标签页3" },
  ];
  return (
    <AtTabs
      current={state.current}
      tabList={tabList}
      onClick={handleClick.bind(this)}
    >
      <AtTabsPane current={state.current} index={0}>
        <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
          标签页一的内容
        </View>
      </AtTabsPane>
      <AtTabsPane current={state.current} index={1}>
        <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
          标签页二的内容
        </View>
      </AtTabsPane>
      <AtTabsPane current={state.current} index={2}>
        <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
          标签页三的内容
        </View>
      </AtTabsPane>
    </AtTabs>
  );
};

export default Index;
