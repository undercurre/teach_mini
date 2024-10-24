import { View, Text } from "@tarojs/components";
import "./index.scss";
import { useEffect, useState } from "react";
import Package from "../../components/Package";

export default function Custom() {
  const [isbought, setIsBought] = useState(true);

  const [books, setBooks] = useState<{ title: string; image: string }[]>([]);

  function fetchBookData() {
    const booksRes = [
      {
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
        title: "马克思主义",
        image:
          "https://img1.baidu.com/it/u=97245084,555945856&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=310",
      },
      {
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
    <View style="width: 100%; height: 100%;">
      {isbought ? <Package books={books}></Package> : <></>}
    </View>
  );
}
