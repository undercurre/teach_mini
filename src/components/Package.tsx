import ClassItem from "../pages/index/components/ClassItem";
import { View } from "@tarojs/components";

interface Book {
  title: string;
  image: string;
}

interface BookListProps {
  books: Book[];
}

const Package = ({ books }: BookListProps) => {
  return (
    <View style="width: 100%; height: 100%; display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr 1fr;">
      {books.map((item) => (
        <ClassItem image={item.image} name={item.title}></ClassItem>
      ))}
    </View>
  );
};

export default Package;
