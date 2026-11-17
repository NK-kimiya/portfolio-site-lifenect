import React from "react";
import StepList from "./StepCard";
import Image from "next/image";
import Sidebar, { type SidebarProps } from "./Sidebar";
import Heder from "./Heder";

const AccountManage = ({ activePage, onSelect }: SidebarProps) => {
  const approve = [
    {
      id: "approve",
      stepTitle: "管理画面で承認/拒否",
      description:
        "管理画面にログインすると、管理画面でアカウント作成の申請待ちユーザーが表示されます。管理者は承認と拒否を選択でき、ユーザーに結果をメールで送信します。",
      imageSrc: "/feature01/approve.png",
      mobileImageSrc: "/feature01/mobile/approve.png",
      imageAlt: "アカウントの申請管理",
    },
  ];

  const manageUser = [
    {
      id: "userList",
      stepTitle: "STEP1：ユーザーの確認",
      description:
        "管理画面にログインすると、管理画面でユーザーを一覧で確認でき、対象のユーザーを選択します。また、ポストのタグも新しく管理者が作成できます。",
      imageSrc: "/feature05/user-list.png",
      mobileImageSrc: "/feature05/mobile/user-list.png",
      imageAlt: "ユーザー一覧",
    },
    {
      id: "ManageUser",
      stepTitle: "STEP2：ユーザーの確認",
      description:
        "管理者のみアクセス可能な対象のユーザーの詳細ページで、ユーザーを凍結できます。凍結されたユーザーはログインができなくなり、ログイン中に凍結された場合は、APIへのアクセスがエラーになります。凍結した場合は、そのユーザーにメールで知らせます。凍結の解除時もメールを送信します。",
      imageSrc: "/feature05/user-stop.png",
      mobileImageSrc: "/feature05/mobile/user-stop.png",
      imageAlt: "ユーザーの管理",
    },
  ];

  const managePost = [
    {
      id: "PostList",
      stepTitle: "STEP1:ポストの確認",
      description:
        "管理画面にログインすると、管理画面ですべてのユーザーのポストを一覧で確認でき、対象のポストを選択します。",
      imageSrc: "/feature05/post-list.png",
      mobileImageSrc: "/feature05/mobile/post-list.png",
      imageAlt: "ポスト一覧",
    },
    {
      id: "ManagePost",
      stepTitle: "STEP2：ポストの管理",
      description:
        "管理者のみアクセス可能な対象のポストの詳細ページで、ポストを非表示にできます。非表示にされたポストやコメントは、ベクトルDBからデータが削除され、AIの回答で利用できなくなります。再び表示に戻すと再度ベクトルDBに保存され、AIでの回答に利用されます。",
      imageSrc: "/feature05/post-hidden.png",
      mobileImageSrc: "/feature05/mobile/post-hidden.png",
      imageAlt: "ポストの管理",
    },
    {
      id: "PostHidden",
      stepTitle: "STEP3：ポストの非表示",
      description:
        "管理者により非表示にされたポストやコメントは、閲覧が不可になります。コメントのみ非表示の場合は、ポストの閲覧は可能です。",
      imageSrc: "/feature05/post-delete.png",
      mobileImageSrc: "/feature05/mobile/post-delete.png",
      imageAlt: "ポストの非表示",
    },
  ];
  return (
    <div className="min-h-screen">
      <Heder />
      <div className="p-3">
        <p>Home ＞ 機能　＞　管理機能</p>
      </div>

      <div className="md:flex min-h-[calc(100vh-65px)]">
        <Sidebar activePage={activePage} onSelect={onSelect} />

        <main className="min-w-0 md:flex-1 p-8">
          <div id="main-visual">
            <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">
              <div className="w-full md:flex-1">
                <h2 className="text-2xl font-bold text-center text-4xl">
                  管理者機能
                </h2>
                <p className="mt-4 text-gray-600">
                  ユーザーのアカウント作成の申請の管理・ユーザーアカウントの凍結・投稿とコメントの非表示といった操作を管理者のみが実行できる機能です。
                </p>
              </div>
              <Image
                src="/feature05.png"
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
                  ユーザーのアカウント作成の申請の管理
                </h4>
                <p>
                  ユーザーが行ったアカウント作成の申請に対して、承認と拒否を選択できます。結果はユーザーにメールにて送信されます。
                </p>
              </div>

              <div className="rounded-lg shadow-md p-6">
                <h4 className="text-[#6a5acd] font-bold text-lg">
                  ユーザーのアカウントの凍結
                </h4>
                <p>
                  ユーザーのアカウントを凍結することができます。凍結したアカウントは凍結解除することもできます。
                  凍結と解除をしたたびにメールでユーザーに知らせます。
                </p>
              </div>

              <div className="rounded-lg shadow-md p-6">
                <h4 className="text-[#6a5acd] font-bold text-lg">
                  ポスト・コメントの非表示
                </h4>
                <p>ユーザーのポストとコメントを表示と非表示に制御できます。</p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h3 className="text-2xl">
              <span className="text-[#6a5acd] font-extrabold p-2">ー</span>
              操作手順
            </h3>
            <StepList title="アカウントの申請管理" steps={approve} />
            <StepList title="ユーザーの凍結" steps={manageUser} />
            <StepList title="ポストの非表示/表示" steps={managePost} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccountManage;
