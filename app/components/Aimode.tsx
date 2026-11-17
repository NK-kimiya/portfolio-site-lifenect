import React from "react";
import StepList from "./StepCard";
import Image from "next/image";
import Sidebar, { type SidebarProps } from "./Sidebar";
import Heder from "./Heder";
const ai = [
  {
    id: "chat",
    stepTitle: "STEP1:AIに質問",
    description: "AIに質問したい内容を入力します。",
    imageSrc: "/feature04/question.png",
    mobileImageSrc: "/feature04/mobile/question.png",
    imageAlt: "チャット",
  },
  {
    id: "response",
    stepTitle: "STEP2:回答をレスポンス",
    description:
      "AIがすべてのユーザーのポストとコメントをもとに、返答します。参考にしたポストとコメントも表示します。",
    imageSrc: "/feature04/ai-response.png",
    mobileImageSrc: "/feature04/mobile/ai-response.png",
    imageAlt: "レスポンス",
  },
  {
    id: "redirect",
    stepTitle: "STEP3:ポストを確認",
    description:
      "AI参考にしたポストとコメントを詳細表示で確認できます。コメントの場合は、そのコメントを含むポストを表示できます。",
    imageSrc: "/feature04/reference-detail.png",
    mobileImageSrc: "/feature02/mobile/detail.png",
    imageAlt: "レスポンス",
  },
];

const risk = [
  {
    id: "risk",
    stepTitle: "リスクのある質問",
    description:
      "リスクのある質問の場合、AIに回答させずに、行政の相談窓口を提示します。",
    imageSrc: "/feature04/sucide-lisk-response.png",
    mobileImageSrc: "/feature04/mobile/sucide-lisk.png",
    imageAlt: "リスクのある質問",
  },
];

const Aimode = ({ activePage, onSelect }: SidebarProps) => {
  return (
    <div className="min-h-screen">
      <Heder />
      <div className="p-3">
        <p>Home ＞ 機能　＞　AIモード機能</p>
      </div>

      <div className="md:flex min-h-[calc(100vh-65px)]">
        <Sidebar activePage={activePage} onSelect={onSelect} />

        <main className="min-w-0 md:flex-1 p-8">
          <div id="main-visual">
            <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">
              <div className="w-full md:flex-1">
                <h2 className="text-2xl font-bold text-center text-4xl">
                  AIモード機能
                </h2>
                <p className="mt-4 text-gray-600">
                  ユーザーが投稿したポストやコメントをもとにAIが質問に解答してくれます。回答に使用したポストやコメントも表示します。
                </p>
              </div>
              <Image
                src="/feature04.png"
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
                  AIモード機能
                </h4>
                <p>
                  AIに質問をするとすべてのユーザーの投稿やコメントの情報をもとに回答します。
                  回答に使用した投稿やコメントも表示します。
                </p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h3 className="text-2xl">
              <span className="text-[#6a5acd] font-extrabold p-2">ー</span>
              操作手順
            </h3>
            <StepList title="AI対話・推薦" steps={ai} />
            <StepList title="リスクのある質問への対応" steps={risk} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Aimode;
