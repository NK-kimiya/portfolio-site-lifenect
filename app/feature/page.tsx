"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import type { PageKey, SidebarProps } from "../components/Sidebar";
import AccountAuthPage from "../components/AccountAuthPage";
import AccountManage from "../components/AccountManage";
import Aimode from "../components/Aimode";
import Mypage from "../components/Mypage";
import PostPage from "../components/PostPage";

const pages: Record<PageKey, ComponentType<SidebarProps>> = {
  accountAuth: AccountAuthPage,
  post: PostPage,
  mypage: Mypage,
  ai: Aimode,
  accountManage: AccountManage,
};

export default function Home() {
  const [activePage, setActivePage] = useState<PageKey>("accountManage");
  const ActivePage = pages[activePage];
  return <ActivePage activePage={activePage} onSelect={setActivePage} />;
}
