import Image from "next/image";
import Sidebar, { type SidebarProps } from "./Sidebar";
import StepList from "./StepCard";
import Heder from "./Heder";

const applicationSteps = [
  {
    id: "input",
    stepTitle: "STEP1:フォームの入力",
    description:
      "フォームにニックネームとメールアドレス、疾病などの情報を入力してコードをメール送信します。",
    imageSrc: "/feature01/input.png",
    mobileImageSrc: "/feature01/mobile/input.png",
    imageAlt: "アカウント申請フォームの入力画面",
  },
  {
    id: "mail-code",
    stepTitle: "STEP2:コードの確認",
    description: "メールに送信されたコードを確認します。",
    imageSrc: "/feature01/mail-code.png",
    imageAlt: "申請コードの確認",
  },
  {
    id: "veryfy-code",
    stepTitle: "STEP3:コードの入力",
    description: "メールで確認したコードを入力します。",
    imageSrc: "/feature01/veryfy-code.png",
    mobileImageSrc: "/feature01/mobile/veryfy-code.png",
    imageAlt: "申請コードの入力",
  },
  {
    id: "complete",
    stepTitle: "STEP4:申請の完了",
    description:
      "コードの入力が正しければ、申請が完了です。管理者が承認するのを待ちます。",
    imageSrc: "/feature01/complete.png",
    mobileImageSrc: "/feature01/mobile/complete.png",
    imageAlt: "申請の完了",
  },
  {
    id: "application-complete",
    stepTitle: "STEP5:申請の承認",
    description:
      "管理者により申請が承認されるとメールが届きます。申請が却下された場合もメールが届きます。",
    imageSrc: "/feature01/application-complete.png",
    imageAlt: "申請の完了",
  },
];

const approve = [
  {
    id: "approve",
    stepTitle: "STEP1:申請の確認",
    description:
      "管理者ページでは、アカウントの申請状況を確認でき承認と却下を選択できます。選択の結果はユーザーへメールで知らされます。",
    imageSrc: "/feature01/approve.png",
    mobileImageSrc: "/feature01/mobile/approve.png",
    imageAlt: "申請状況の確認",
  },
];

const login = [
  {
    id: "signup",
    stepTitle: "STEP1:アカウントの作成",
    description:
      "申請で使用したメールアドレスにより、アカウントを作成できます。また、申請したメールアドレスと同じGoogleアカウントでもログインができます。",
    imageSrc: "/feature01/sign-up.png",
    mobileImageSrc: "/feature01/mobile/sign-up.png",
    imageAlt: "サインアップ",
  },
  {
    id: "login",
    stepTitle: "STEP2:ログイン",
    description:
      "作成したアカウントのメールアドレスとパスワードでログインができます。また、申請に利用したメールアドレスのGoogleアカウントでもログインができます。",
    imageSrc: "/feature01/login.png",
    mobileImageSrc: "/feature01/mobile/login.png",
    imageAlt: "ログイン",
  },
  {
    id: "login-complete",
    stepTitle: "STEP3:ログイン完了",
    description: "ログイン完了後、サービスのトップ画面へ遷移します。",
    imageSrc: "/feature01/login-complete.png",
    mobileImageSrc: "/feature01/mobile/login-complete.png",
    imageAlt: "ログイン完了",
  },
];

export default function AccountAuthPage({
  activePage,
  onSelect,
}: SidebarProps) {
  return (
    <div className="min-h-screen">
      <Heder />
      <div className="p-3">
        <p>Home ＞ 機能　＞　アカウント認証機能</p>
      </div>

      <div className="md:flex min-h-[calc(100vh-65px)]">
        <Sidebar activePage={activePage} onSelect={onSelect} />

        <main className="min-w-0 md:flex-1 p-8">
          <div id="main-visual">
            <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">
              <div className="w-full md:flex-1">
                <h2 className="text-2xl font-bold text-center text-4xl">
                  アカウント認証機能
                </h2>
                <p className="mt-4 text-gray-600">
                  アカウント申請、申請の可否、サインインなど、サービス利用ができるユーザーを管理者が管理する機能です。
                </p>
              </div>
              <Image
                src="/feature-main01.png"
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
                  アカウント申請
                </h4>
                <p>
                  ニックネームとメールアドレス、疾病などを入力すると、メールにコードが送信され、正しいコードを入力すると申請が完了します。
                </p>
              </div>
              <div className="rounded-lg shadow-md p-6">
                <h4 className="text-[#6a5acd] font-bold text-lg">申請の可否</h4>
                <p>
                  管理者ページで、アカウントの申請状況を確認でき、管理者が許可または、拒否することができ、結果はそのユーザーにメールで送信されます。
                </p>
              </div>
              <div className="rounded-lg shadow-md p-6">
                <h4 className="text-[#6a5acd] font-bold text-lg">
                  サインイン・サインアップ
                </h4>
                <p>
                  申請で使用したメールアドレスを使用し、アカウントを作成し、ログインができます。
                  Googleアカウントでもログインが可能です。
                </p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h3 className="text-2xl">
              <span className="text-[#6a5acd] font-extrabold p-2">ー</span>
              操作手順
            </h3>
            <StepList title="アカウント申請" steps={applicationSteps} />
            <StepList title="申請の可否" steps={approve} />
            <StepList title="サインイン・サインアップ" steps={login} />
          </div>
        </main>
      </div>
    </div>
  );
}
