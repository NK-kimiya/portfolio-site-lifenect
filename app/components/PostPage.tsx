import React from "react";
import Image from "next/image";
import Sidebar, { type SidebarProps } from "./Sidebar";
import StepList from "./StepCard";
import Heder from "./Heder";

const applicationSteps = [
  {
    id: "show",
    stepTitle: "STEP1:一覧表示",
    description:
      "ログイン後のサービスのトップ画面で、すべてのユーザーが投稿したポストが見れます。タグやキーワードで絞り込みもできます。",
    imageSrc: "/feature01/login-complete.png",
    mobileImageSrc: "/feature02/mobile/list-show.png",
    imageAlt: "アカウント申請フォームの入力画面",
  },
  {
    id: "detail",
    stepTitle: "STEP2:詳細表示",
    description:
      "気になったポストをクリックすると、詳細ページに遷移します。詳細ページではポストにコメントをしたり、お気に入り登録ができます。",
    imageSrc: "/feature02/post-detail.png",
    mobileImageSrc: "/feature02/mobile/detail.png",
    imageAlt: "詳細表示",
  },
];

const repost = [
  {
    id: "repost",
    stepTitle: "STEP1:コメントの投稿",
    description:
      "詳細ページで、ポストに対してコメントを返信できます。また、コメントに返信することもできます。コメントもベクトルDBに保存されRAGを利用したAIモードで活用されます。",
    imageSrc: "/feature02/repost.png",
    mobileImageSrc: "/feature02/mobile/comment.png",
    imageAlt: "コメントの送信",
  },
];

const post = [
  {
    id: "post",
    stepTitle: "STEP1:投稿",
    description:
      "タイトルと、文章、画像ファイル(任意)、カテゴリーを選択して投稿できます。投稿の内容をベクトルDBに保存され、RAGを利用したAIモードで活用されます。",
    imageSrc: "/feature02/post-create.png",
    mobileImageSrc: "/feature02/mobile/create.png",
    imageAlt: "サインアップ",
  },
];
const PostPage = ({ activePage, onSelect }: SidebarProps) => {
  return (
    <div className="min-h-screen">
      <Heder />
      <div className="p-3">
        <p>Home ＞ 機能　＞　ポスト機能</p>
      </div>

      <div className="md:flex min-h-[calc(100vh-65px)]">
        <Sidebar activePage={activePage} onSelect={onSelect} />

        <main className="min-w-0 md:flex-1 p-8">
          <div id="main-visual">
            <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">
              <div className="w-full md:flex-1">
                <h2 className="text-2xl font-bold text-center text-4xl">
                  Post・RePost機能
                </h2>
                <p className="mt-4 text-gray-600">
                  ユーザー同士で、Post・RePostをし合える機能です。ユーザーの投稿やコメントがAIの回答に使用されます。
                </p>
              </div>
              <Image
                src="/feature02.png"
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
                <h4 className="text-[#6a5acd] font-bold text-lg">Postの閲覧</h4>
                <p>すべてのユーザーが投稿したポストを閲覧できます。</p>
              </div>
              <div className="rounded-lg shadow-md p-6">
                <h4 className="text-[#6a5acd] font-bold text-lg">RePost</h4>
                <p>
                  気になったポストに返信ができます。ポストの返信に返信をすることもできます。
                  返信のコメントはベクトルDBに保存され、RAGを利用したAIモードで活用されます。
                </p>
              </div>
              <div className="rounded-lg shadow-md p-6">
                <h4 className="text-[#6a5acd] font-bold text-lg">投稿</h4>
                <p>
                  ポストを投稿することができます。投稿したポストはベクトルDBに保存され、RAGを利用したAIモードで活用されます。
                </p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h3 className="text-2xl">
              <span className="text-[#6a5acd] font-extrabold p-2">ー</span>
              操作手順
            </h3>
            <StepList title="Post閲覧機能" steps={applicationSteps} />
            <StepList title="Repost機能" steps={repost} />
            <StepList title="投稿機能" steps={post} />
          </div>
          <p className="mt-4 text-gray-600">ここにページの内容を配置します。</p>
        </main>
      </div>
    </div>
  );
};

export default PostPage;
