import { View, Image, Text } from "@tarojs/components";

type Props = {
  id: number;
  name: string;
  image: string;
  onClick: (id: number) => void;
};

const ClassItem = (props: Props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.id); // 将 productId 传递给父组件
    }
  };

  return (
    <>
      <View
        onClick={handleClick}
        style="width: 100%; height: 100%; border: 1px solid #000; display: flex; flex-direction: column; justify-content: center; align-items: center;"
      >
        <Image
          style="width: 100px;height: 200px;background: #fff;"
          src={props.image}
        />
        <Text>{props.name}</Text>
      </View>
    </>
  );
};

export default ClassItem;
