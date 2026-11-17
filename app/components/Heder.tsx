import React from "react";
import Link from "next/link";
const Heder = () => {
  return (
    <header className="md:flex items-center justify-between bg-white px-6 py-4 shadow-xl">
      <h1 className="font-bold text-2xl pl-2">LifeNect</h1>
      <nav aria-label="メインナビゲーション" className="flex">
        <Link
          href="/"
          className="font-medium text-blue-600 hover:text-blue-800 pr-2 block text-left"
        >
          Top
        </Link>
        <Link
          href="/feature"
          className="font-medium text-blue-600 hover:text-blue-800 pr-2"
        >
          feature
        </Link>
        <Link
          href="/technology"
          className="font-medium text-blue-600 hover:text-blue-800 pr-2"
        >
          Tech
        </Link>
      </nav>
    </header>
  );
};

export default Heder;
