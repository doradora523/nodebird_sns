import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

import NicknameEditForm from "../components/NinknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "수경" },
    { nickname: "라떼" },
    { nickname: "모찌" },
  ];
  const followingList = [
    { nickname: "수경" },
    { nickname: "라떼" },
    { nickname: "모찌" },
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
