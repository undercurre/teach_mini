import { View, ScrollView, Button } from "@tarojs/components";
import "./index.scss";
import { useEffect, useState } from "react";
import Package from "../../components/Package";

export default function Custom() {
  const [isbought, setIsBought] = useState(false);

  const [books, setBooks] = useState<
    { id: number; title: string; image: string }[]
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
  }, []);

  return (
    <View style="width: 100%; height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">
      <ScrollView style="height: 90vh" scrollY scrollWithAnimation>
        <Package books={books}></Package>
      </ScrollView>
      {!isbought ? <Button className="pay-button">全部支付</Button> : <></>}
    </View>
  );
}
