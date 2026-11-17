import React from "react";
import Heder from "../components/Heder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const page = () => {
  return (
    <div>
      <Heder />
      <main>
        <div className="w-5/6 mx-auto">
          <h3 className="text-4xl font-bold">Source Code</h3>
          <p>
            本サービスのソースコードはGitHubで公開しています。フロントエンドとバックエンドそれぞれのリポジトリから、実装内容をご確認いただけます。
          </p>
          <h4 className="text-2xl font-bold">Frontend — Next.js / React</h4>
          <p>
            画面のレイアウトやUIコンポーネント、ユーザー操作に関する処理など、フロントエンドの実装コードを公開しています。
          </p>
          <button className="my-3">
            <a
              href="https://github.com/NK-kimiya/LifeNectReact.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded bg-black py-1 px-40 hover:bg-gray-800 rounded-xl"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-10"
                style={{ color: "#fff" }}
              />
            </a>
          </button>

          <h4 className="text-2xl font-bold">Backend — Django</h4>
          <p>
            Python /
            Djangoを使用したバックエンドのソースコードを公開しています。
            APIの設計・実装、ユーザー認証、データベース操作に加え、RAGを活用したAIチャットや外部サービスとの連携など、サーバーサイドの処理を実装しています。
          </p>
          <button className="my-3">
            <a
              href="https://github.com/NK-kimiya/LifeNectDjango.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded bg-black py-1 px-40 hover:bg-gray-800 rounded-xl"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-10"
                style={{ color: "#fff" }}
              />
            </a>
          </button>
        </div>
        <div className="w-5/6 mx-auto">
          <h3 className="text-4xl font-bold">Language & Frameworks</h3>
          <div className="p-4">
            <h4 className="text-2xl font-bold">HTML / CSS</h4>
            <p>
              Webページの構造やデザインを実装するために使用しました。HTMLでページの構造を定義し、CSSでレイアウトや文字、色などの見た目を調整しました。
            </p>
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold">Tailwind CSS</h4>
            <p>
              ユーティリティファーストのCSSフレームワークです。あらかじめ用意されたクラスを組み合わせることで、レスポンシブデザインやレイアウトの調整を効率的に実装するために使用しました。
            </p>
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold">
              Next.js / React（TypeScript・JavaScript）
            </h4>
            <p>
              フロントエンドの開発に使用したフレームワークとライブラリです。
              コンポーネント単位でUIや機能を分割することで、コードの再利用性や保守性を高めています。また、Reactが提供する標準的なエスケープ処理などを活用し、安全性を意識したフロントエンド開発を行いました。
            </p>
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold">Python / Django</h4>
            <p>
              バックエンドの開発に使用したPython製のWebフレームワークです。
              DjangoのORMを活用してデータベース操作を実装し、SQLインジェクションのリスクを軽減しています。
              また、アクセストークンを利用したAPI認証を実装し、CORS設定ではアクセスを許可するフロントエンドのオリジンを制限しています。
            </p>
          </div>
        </div>

        <div className="w-5/6 mx-auto">
          <h3 className="text-4xl font-bold">External API & DB</h3>
          <div className="p-4">
            <h4 className="text-2xl font-bold">Open AI API</h4>
            <p>
              大規模言語モデル（LLM）をアプリケーションから利用するためのAPIサービスです。
              Pineconeによるベクトル検索と組み合わせたRAG（検索拡張生成）を実装し、コミュニティ内の投稿やコメントから取得した関連情報をGPTモデルに渡すことで、ユーザーの質問に応じた回答を生成しています。
              これにより、コミュニティで共有された経験や知識を、AIチャットを通じて活用できる仕組みを構築しました。
            </p>
            <a
              href="https://openai.com/ja-JP/api/"
              className="w-full text-blue-400 block break-all"
            >
              https://openai.com/ja-JP/api/
            </a>
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold">Supabase</h4>
            <p>
              PostgreSQLを基盤としたリレーショナルデータベースを提供するサービスです。
              Djangoのバックエンドと連携し、ユーザー情報や投稿、コメントなどのデータを管理しています。
              また、認証コードなどの機密性の高い情報は、平文で保存せずにハッシュ化することで、データベースから元の値が直接読み取られないようにしています。
            </p>
            <a
              href="https://supabase.com/"
              className="w-full text-blue-400 block break-all"
            >
              https://supabase.com/
            </a>
          </div>
        </div>
        <div className="w-5/6 mx-auto">
          <h3 className="text-4xl font-bold">External Services</h3>

          <div className="p-4">
            <h4 className="text-2xl font-bold">Google Identity</h4>
            <p className="text-wrap">
              <a
                href="https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid?hl=ja"
                className="w-full text-blue-400 block break-all"
              >
                https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid?hl=ja
              </a>
            </p>

            <p>
              Google CloudでOAuth
              2.0の認証情報を設定し、Googleアカウントを利用したログイン機能を実装しました。
            </p>
            <h5 className="text-lg">@react-oauth/google</h5>
            <a
              href="https://www.npmjs.com/package/@react-oauth/google"
              className="text-blue-400"
            >
              https://www.npmjs.com/package/@react-oauth/google
            </a>
            <p>
              Googleアカウントを利用したログイン機能を実装するためのReact向け認証ライブラリです。Next.jsでGoogleログイン機能を実装する際に使用しました。
            </p>
            <h5>google-auth</h5>
            <a
              href="https://googleapis.dev/python/google-auth/latest/"
              className="text-blue-400"
            >
              https://googleapis.dev/python/google-auth/latest/
            </a>
            <p>
              Googleが提供するPython向け認証ライブラリです。DjangoでGoogleログインの認証処理を実装するために使用しました。
            </p>
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold">Cloudflare R2</h4>
            <a
              href="https://www.cloudflare.com/ja-jp/"
              className="text-blue-400"
            >
              https://www.cloudflare.com/ja-jp/
            </a>
            <p>
              画像ファイルを管理するためのオブジェクトストレージサービスです。
              Djangoで有効期限付きの署名付きURLを生成し、ReactからCloudflare
              R2へ直接画像をアップロードする仕組みを実装しました。
              アップロード後は、ファイルの保存先をDjangoに送信してデータベースに記録することで、バックエンドサーバーを経由せずにファイルを転送できる構成にしています。
            </p>
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold">Pinecone</h4>
            <p>
              <a href="https://www.pinecone.io/" className="text-blue-400">
                https://www.pinecone.io/
              </a>
            </p>
            <p>
              RAGを活用したAIチャットの検索機能に使用したベクトルデータベースサービスです。
              コミュニティ内の投稿やコメントをベクトル化してPineconeに保存し、ユーザーの質問もベクトル化することで、意味的な類似度に基づく検索を実装しました。
              キーワードの完全一致だけに依存せず、質問内容と関連性の高い投稿やコメントを取得し、AIが回答を生成する際の参考情報として活用しています。
            </p>
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold">Resend</h4>
            <p>
              <a href="https://resend.com/" className="text-blue-400">
                https://resend.com/
              </a>
            </p>
            <p>
              ユーザーへの通知メールの送信に使用したメール配信APIサービスです。
              Djangoのバックエンドと連携し、パスワード変更や申請の承認など、アプリケーション内の処理に応じてメールを自動送信する機能を実装しました。
              これにより、ユーザーが重要な操作の結果や申請状況をメールで確認できる仕組みを構築しました。
            </p>
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold">Namecheap</h4>
            <p>
              <a href="https://www.namecheap.com/" className="text-blue-400">
                https://www.namecheap.com/
              </a>
            </p>
            <p>
              独自ドメインの取得とDNS設定に使用したドメイン登録・管理サービスです。
              取得したドメインのDNSレコードを設定し、メール配信サービスのResendと連携しました。
              これにより、アプリケーションから独自ドメインを使用した通知メールを送信できる環境を構築しました。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
