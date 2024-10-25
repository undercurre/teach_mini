import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import { useEffect, useState } from "react";
import "./index.scss";
import { CataItem, getCataLog } from "../../apis/resource";
import Package from "../../components/Package";

const Index = () => {
  const [state, setState] = useState({
    current: 0,
    subCurrent: 0,
    thirdCurrent: 0,
  });

  const [tabList, setTabList] = useState<
    Array<{
      title: string;
      code: string;
      list: Array<CataItem & { title: string }>;
    }>
  >([]);

  async function fetchTabData() {
    const allRes = await getCataLog();
    const keys = Object.keys(allRes.allList);
    const tabs = keys.map((stage) => {
      let name = "小学";
      switch (stage) {
        case "2000002":
          name = "高中";
          break;
        case "2000001":
          name = "初中";
          break;
        case "2000000":
          name = "小学";
          break;
        default:
          break;
      }
      return {
        title: name,
        code: stage,
        list: allRes.allList[stage].map((grade) => {
          return {
            ...grade,
            title: grade.name,
            list: grade.list.map((subject) => {
              return {
                ...subject,
                title: subject.name,
              };
            }),
          };
        }),
      };
    });
    console.log(tabs);
    setTabList(() => {
      return [...tabs];
    });
  }

  useEffect(() => {
    fetchTabData();
  }, []);

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

  function handleThirdClick(value) {
    setState((preState) => {
      return {
        ...preState,
        thirdCurrent: value,
      };
    });
  }

  const [books, setBooks] = useState<
    Array<{ id: number; title: string; image: string }>
  >([]);

  function fetchBookData() {
    const booksRes = [
      {
        id: 1,
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        id: 2,
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        id: 3,
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        id: 4,
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        id: 5,
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        id: 6,
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        id: 7,
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        id: 8,
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
    ];
    setBooks(() => {
      return [...booksRes];
    });
  }

  useEffect(() => {
    fetchBookData();
  }, [state.thirdCurrent]);

  return (
    <AtTabs
      current={state.current}
      tabList={tabList}
      onClick={handleClick.bind(this)}
    >
      {tabList.map((tab, index) => (
        <AtTabsPane key={index} current={state.current} index={index}>
          <AtTabs
            scroll={tabList[index].list.length > 5}
            current={state.subCurrent}
            tabList={tabList[index].list}
            onClick={handleSubClick}
          >
            {tabList[index].list.map((subItem, subIndex) => (
              <AtTabsPane
                key={subIndex}
                current={state.subCurrent}
                index={subIndex}
              >
                <View style="margin-top: 10px;">
                  <AtTabs
                    scroll={tabList[index].list.length > 5}
                    tabDirection="vertical"
                    height="85vh"
                    current={state.thirdCurrent}
                    tabList={tabList[index].list[subIndex].list}
                    onClick={handleThirdClick}
                  >
                    {tabList[index].list[subIndex].list.map(
                      (third, thirdIndex) => (
                        <AtTabsPane
                          tabDirection="vertical"
                          key={thirdIndex}
                          current={state.thirdCurrent}
                          index={thirdIndex}
                        >
                          <Package books={books}></Package>
                        </AtTabsPane>
                      )
                    )}
                  </AtTabs>
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
