import { View, Text, Image, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

export default function Detail() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const [book, setBook] = useState<{
    id: number;
    name: string;
    price: number;
  } | null>(null);

  useEffect(() => {
    // 获取路由传递的参数
    const routerParams = Taro.getCurrentInstance().router?.params;

    // 模拟商品详情数据（通常可以通过 API 获取）
    const productData: {
      [key: string]: {
        id: number;
        name: string;
        price: number;
      };
    } = {
      "1": {
        id: 1,
        name: "Product 1",
        price: 100,
      },
      "2": {
        id: 2,
        name: "Product 2",
        price: 200,
      },
      "3": {
        id: 3,
        name: "Product 3",
        price: 300,
      },
    };

    // 根据传递的 ID 获取对应的商品详情
    if (routerParams && productData[routerParams["id"] as string]) {
      setBook(productData[routerParams["id"] as string]);
    }
  }, []);

  if (!book) {
    return <View>加载中...</View>; // 处理数据未加载的状态
  }

  return (
    <View className="container">
      <View className="info">
        <Image
          className="img"
          src="https://img2.baidu.com/it/u=2518428873,2029361067&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
        ></Image>
        <Text className="name">教材名称：{book.name}</Text>
        <Text className="price">价格：{book.price}</Text>
      </View>
      <Button className="pay-button">支付</Button>
    </View>
  );
}
