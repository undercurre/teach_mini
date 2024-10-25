import Taro from "@tarojs/taro";
import {
  View,
  Text,
  Button,
  Image,
  Input,
  ScrollView,
} from "@tarojs/components";
import { useEffect, useState } from "react";
import "./index.scss";
import { getUserInfo, WechatUserInfo } from "../../apis/user";
import { localStg } from "../../service/storage/local";
import Package from "../../components/Package";

const Personal = () => {
  const [userInfo, setUserInfo] = useState<WechatUserInfo>({
    id: "",
    openid: "",
    unionid: "",
    nickname: "",
    avatar_url:
      "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
    user: {
      id: "",
      username: "微信用户",
      email: "",
      phone: "",
      created_at: "",
      updated_at: "",
    },
  });

  async function fetchUserInfo() {
    const profile = await getUserInfo();
    setUserInfo(profile);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleLogout = async () => {
    await localStg.clear();
    Taro.reLaunch({ url: "/pages/login/index" });
  };

  function onChooseAvatar(e) {
    const { avatarUrl } = e.detail;
    setUserInfo((preState) => {
      return {
        ...preState,
        avatar_url: avatarUrl,
      };
    });
  }

  function onNickNameReview(e) {
    const { value } = e.detail;
    setUserInfo((preState) => {
      return {
        ...preState,
        user: {
          ...preState.user,
          username: value,
        },
      };
    });
  }

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
    <View className="personal-container">
      <View className="user-info">
        <Button
          className="avatar_wrap"
          open-type="chooseAvatar"
          onChooseAvatar={onChooseAvatar}
        >
          <Image className="avatar" src={userInfo.avatar_url}></Image>
        </Button>
        <Input
          type="nickname"
          className="username"
          value={userInfo.user.username}
          placeholder="请输入昵称"
          onInput={onNickNameReview}
        />
      </View>
      <Text style="margin: 10px; align-self: flex-start">已购资源：</Text>
      <ScrollView style="height: 55vh" scrollY scrollWithAnimation>
        <Package books={books}></Package>
      </ScrollView>
      <Button className="btn logout-btn" onClick={handleLogout}>
        退出登录
      </Button>
    </View>
  );
};

export default Personal;
