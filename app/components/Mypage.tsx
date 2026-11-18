import React from "react";
import Image from "next/image";
import StepList from "./StepCard";
import Sidebar, { type SidebarProps } from "./Sidebar";
import Heder from "./Heder";

const Mypage = ({ activePage, onSelect }: SidebarProps) => {
  const profile = [
    {
      id: "profile",
      stepTitle: "STEP1:プロフィールの確認・編集",
      description:
        "マイページで、アカウントのプロフィールの確認と編集ができます。",
      imageSrc: "/feature03/myprofile.png",
      mobileImageSrc: "/feature03/mobile/myprofile.png",
      imageAlt: "プロフィール機能",
    },
  ];

  const favorite = [
    {
      id: "favorite",
      stepTitle: "お気に入りポストの確認",
      description: "お気に入りしたポストを確認できます。",
      imageSrc: "/feature03/myfavorite.png",
      mobileImageSrc: "/feature03/mobile/myfavorite.png",
      imageAlt: "プロフィール機能",
    },
  ];

  const deleteAccount = [
    {
      id: "delete",
      stepTitle: "削除機能",
      description:
        "キーを入力し、アカウントを削除できます。投稿したポストやコメントも削除され、ベクトルDBに保存されたデータも削除されます。",
      imageSrc: "/feature03/mydelete.png",
      mobileImageSrc: "/feature03/mobile/delete.png",
      imageAlt: "削除",
    },
  ];

  return (
    <div className="min-h-screen">
      <Heder />
      <div className="p-3">
        <p>Home ＞ 機能　＞　マイページ機能</p>
      </div>

      <div className="md:flex min-h-[calc(100vh-65px)]">
        <Sidebar activePage={activePage} onSelect={onSelect} />

        <main className="min-w-0 md:flex-1 p-8">
          <div id="main-visual">
            <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">
              <div className="w-full md:flex-1">
                <h2 className="text-2xl font-bold text-center text-4xl">
                  マイページ機能
                </h2>
                <p className="mt-4 text-gray-600">
                  プロフィールの管理・お気に入りのポストの確認・アカウントの削除ができる機能です。
                </p>
              </div>
              <Image
                src="/feature03.png"
                alt="メインビジュアル"
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl object-cover md:w-1/2"
              />
            </section>
          </div>

          <div>
            <h3 className="text-2xl">
              <span className="text-[#6a5acd] font-extrabold p-2">ー</span>
              主な機能
            </h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="rounded-lg shadow-md p-6">
                <h4 className="text-[#6a5acd] font-bold text-lg">
                  プロフィールの確認・編集
                </h4>
                <p>ユーザーのプロフィールの確認と編集ができます。</p>
              </div>
              <div className="rounded-lg shadow-md p-6">
                <h4 className="text-[#6a5acd] font-bold text-lg">
                  お気に入り機能
                </h4>
                <p>お気に入りに追加したポストが確認できます。</p>
              </div>
              <div className="rounded-lg shadow-md p-6">
                <h4 className="text-[#6a5acd] font-bold text-lg">削除</h4>
                <p>
                  アカウントを削除できます。ユーザーが投稿したポストやコメントのデータやベクトルDBに保持されたすべてのデータも削除されます。
                </p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h3 className="text-2xl">
              <span className="text-[#6a5acd] font-extrabold p-2">ー</span>
              操作手順
            </h3>
            <StepList title="プロフィール機能" steps={profile} />
            <StepList title="お気に入り機能" steps={favorite} />
            <StepList title="お気に入り機能" steps={deleteAccount} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Mypage;
