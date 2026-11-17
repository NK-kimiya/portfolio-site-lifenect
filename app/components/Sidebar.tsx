"use client";

import { useState } from "react";

export type PageKey =
  | "accountAuth"
  | "post"
  | "mypage"
  | "ai"
  | "accountManage";

export type SidebarProps = {
  activePage: PageKey;
  onSelect: (page: PageKey) => void;
};

const items: { key: PageKey; label: string }[] = [
  { key: "accountAuth", label: "アカウント認証" },
  { key: "post", label: "ポスト機能" },
  { key: "mypage", label: "マイページ機能" },
  { key: "ai", label: "AIモード機能" },
  { key: "accountManage", label: "管理者機能" },
];

export default function Sidebar({ activePage, onSelect }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`${isOpen ? "hidden" : "block"} flex items-center gap-2 rounded p-2  hover:bg-gray-200 md:hidden text-black`}
        aria-controls="main-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        <span>{isOpen ? "閉じる" : "メニュー"}</span>
      </button>

      <aside
        className={`${isOpen ? "block" : "hidden"} md:block w-full shrink-0 p-4 md:w-64 md:p-6 bg-[#6a5acd]`}
      >
        <button
          type="button"
          className={`${isOpen ? "block" : "hidden"} flex items-center gap-2 rounded p-2  hover:bg-gray-200 md:hidden text-black text-white`}
          aria-controls="main-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
          <span>{isOpen ? "閉じる" : "メニュー"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="メインナビゲーション"
          className={`${isOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="mt-4 space-y-4 md:mt-0">
            {items.map((item) => (
              <li key={item.key}>
                <button
                  type="button"
                  aria-current={activePage === item.key ? "page" : undefined}
                  onClick={() => {
                    onSelect(item.key);
                    setIsOpen(false);
                  }}
                  className="text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
