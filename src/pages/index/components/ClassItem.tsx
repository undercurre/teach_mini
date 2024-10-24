import { View, Image, Text } from "@tarojs/components";

type Props = {
  name: string;
  image: string;
};

const ClassItem = (props: Props) => {
  return (
    <>
      <View style="border: 1px solid #000; display: flex; flex-direction: column; justify-content: center; align-items: center;">
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
