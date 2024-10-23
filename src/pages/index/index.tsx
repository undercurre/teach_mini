import { View, Image, Text } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import { useState } from "react";
import "./index.scss";

const Index = () => {
  const [state, setState] = useState({
    current: 0,
    subCurrent: 0,
  });
  function handleClick(value) {
    setState((preState) => {
      return {
        ...preState,
        current: value,
      };
    });
  }

  function handleSubClick(value) {
    setState((preState) => {
      return {
        ...preState,
        subCurrent: value,
      };
    });
  }

  const tabList = [
    {
      title: "小学",
      sub: [
        {
          title: "一年级",
          list: [1, 2, 3],
        },
        {
          title: "二年级",
          list: [1, 2, 3],
        },
        {
          title: "二年级",
          list: [1, 2, 3],
        },
      ],
    },
    {
      title: "初中",
      sub: [
        { title: "次1", list: [1, 2, 3, 4] },
        {
          title: "次2",
          list: [1, 2, 3, 4, 5],
        },
        {
          title: "次3",
          list: [1, 2, 3, 4, 5, 6],
        },
      ],
    },
    {
      title: "高中",
      sub: [
        {
          title: "次1",
          list: [1, 2, 3, 4, 5],
        },
        {
          title: "次2",
          list: [1, 2, 3, 4, 5],
        },
        {
          title: "次3",
          list: [1, 2, 3, 4, 5, 6],
        },
      ],
    },
  ];

  return (
    <AtTabs
      current={state.current}
      tabList={tabList}
      onClick={handleClick.bind(this)}
    >
      {tabList.map((tab, index) => (
        <AtTabsPane key={index} current={state.current} index={index}>
          <AtTabs
            current={state.subCurrent}
            tabList={tabList[index].sub}
            onClick={handleSubClick}
          >
            {tabList[index].sub.map((subItem, subIndex) => (
              <AtTabsPane
                key={subIndex}
                current={state.subCurrent}
                index={subIndex}
              >
                <View style="display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr;">
                  {subItem.list.map((item) => (
                    <View style="border: 1px solid #000;">
                      <Image
                        style="width: 100px;height: 200px;background: #fff;"
                        src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
                      />
                      <Text>{item}</Text>
                    </View>
                  ))}
                </View>
              </AtTabsPane>
            ))}
          </AtTabs>
        </AtTabsPane>
      ))}
    </AtTabs>
  );
};

export default Index;
