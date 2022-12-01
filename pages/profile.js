import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const profile = () => {
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
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로우 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default profile;
