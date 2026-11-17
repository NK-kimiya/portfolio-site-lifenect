import Heder from "./components/Heder";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className="min-h-screen">
      <Heder />
      <div className="p-3">
        <p>＞Top</p>
      </div>
      <div id="main-visual" className="w-5/6 mx-auto">
        <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:flex-1">
            <h2 className="text-2xl font-bold text-center text-4xl">
              あなたの経験が、誰かの安心につながる。
            </h2>
            <p className="mt-4 text-gray-600">
              障がいや病気のある方が、孤独や孤立を感じたときに、安心して人とつながれる場所をつくりたいという思いから開発したサービスです。
              参加者同士で交流しながらコミュニティ独自のAIチャットを構築し、必要な情報を得ることが難しい方にとって、日々の不安や悩みを軽減する一助となることを目指しています。
            </p>
            <button className="text-center bg-[#6a5acd]  text-white py-3 px-18 rounded-4xl">
              <Link href="/feature" className="font-medium text-center pr-2">
                　 デモを見る
              </Link>
            </button>
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
      <main>
        <h2 className="text-center text-3xl font-bold pb-6">
          LifeNectでできること
        </h2>
        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="bg-gray-100 p-10 mx-1">
            <h3 className="text-xl p-3">アカウントを作成</h3>
            <p className="p-3">メールでの申請により登録</p>
          </div>

          <div className="bg-gray-100 p-8 mx-1">
            <h3 className="text-xl p-3">コミュニケーション</h3>
            <p className="p-3">
              ポストやコメントでコミュニケーションをとれます。
            </p>
          </div>

          <div className="bg-gray-100 p-10 mx-1">
            <h3 className="text-xl p-3">コミュニティAI</h3>
            <p className="p-3">
              ポストの内容でコミュニティのAIチャットが構築されていきます。
            </p>
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold p-6">
          AIモードでできること
        </h2>
        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="bg-gray-100 p-10 mx-1">
            <h3 className="text-xl p-3">AIに質問</h3>
            <p className="p-3">知りたいことをチャット形式で検索</p>
          </div>

          <div className="bg-gray-100 p-8 mx-1">
            <h3 className="text-xl p-3">ポストのAI検索</h3>
            <p className="p-3">
              ポストやコメントでコミュニケーションをとれます。
            </p>
          </div>

          <div className="bg-gray-100 p-10 mx-1">
            <h3 className="text-xl p-3">コミュニティAI</h3>
            <p className="p-3">
              ポストの内容でコミュニティのAIチャットが構築されていきます。
            </p>
          </div>
        </div>

        <h2 className="w-5/6 mx-auto text-3xl font-bold p-6">
          こんな方におすすめ
        </h2>
        <ul className="w-5/6 mx-auto">
          <li className="p-1">
            <span className="bg-gray-100 p-1">✓</span>
            <span className="p-1">
              同じような経験を持つ人の話や情報を知りたい方
            </span>
          </li>
          <li className="p-1">
            <span className="bg-gray-100 p-1">✓</span>
            <span className="p-1">自分の経験を誰かのために活かしたい方</span>
          </li>
          <li className="p-1">
            <span className="bg-gray-100 p-1">✓</span>
            <span className="p-1">共通の悩みや関心を持つ人と交流したい方</span>
          </li>
          <li className="p-1">
            <span className="bg-gray-100 p-1">✓</span>

            <span className="p-1">
              AIとの会話を通じて、気軽に情報を探したい方
            </span>
          </li>
        </ul>

        <div className="w-5/6 mx-auto text-center py-3 bg-blue-50 mt-5">
          <p className="text-xl">今すぐ、コミュニティに参加しよう。</p>
          <button className="bg-black text-white text-center py-3 px-20 rounded-4xl">
            <a href="https://lifenectreact.onrender.com/ block">はじめる</a>
          </button>
          <small className="block py-3">
            ※本サービスは現在、ポートフォリオ作品として公開しています。
            無料のホスティングプランを利用しているため、起動や応答に時間がかかる場合があります。あらかじめご了承ください。
          </small>
        </div>
      </main>
    </div>
  );
};

export default Page;
