import { View, Image, Text } from "@tarojs/components";

type Props = {
  name: string;
};

const ClassItem = (props: Props) => {
  return (
    <>
      <View style="border: 1px solid #000;">
        <Image
          style="width: 100px;height: 200px;background: #fff;"
          src="https://i.pinimg.com/474x/a4/96/00/a496008c58815f0e1677ba24013f19bb.jpg"
        />
        <Text>{props.name}</Text>
      </View>
    </>
  );
};

export default ClassItem;
