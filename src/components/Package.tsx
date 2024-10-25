import Taro from "@tarojs/taro";
import ClassItem from "../pages/index/components/ClassItem";
import { View } from "@tarojs/components";

interface Book {
  id: number;
  title: string;
  image: string;
}

interface BookListProps {
  books: Book[];
}

const Package = ({ books }: BookListProps) => {
  function handleClick(id: number) {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`, // 使用商品 ID 传递参数
    });
  }

  return (
    <View style="width: 100%; height: 100%; display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr;">
      {books.map((item) => (
        <ClassItem
          id={item.id}
          image={item.image}
          name={item.title}
          onClick={handleClick}
        ></ClassItem>
      ))}
    </View>
  );
};

export default Package;
