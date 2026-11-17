"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ZoomableImageProps = {
  src: string;
  mobileSrc?: string;
  alt: string;
};

export default function ZoomableImage({
  src,
  mobileSrc,
  alt,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [version, setVersion] = useState<"pc" | "mobile">("pc");
  const dialogRef = useRef<HTMLDialogElement>(null);

  const selectedSrc = version === "mobile" && mobileSrc ? mobileSrc : src;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    else if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={`${alt}を拡大表示`}
        onClick={() => setIsOpen(true)}
        className="mx-auto block w-4/5 cursor-zoom-in"
      >
        <div
          className={`relative w-full ${
            version === "mobile" ? "aspect-[9/16]" : "aspect-[5/3]"
          }`}
        >
          <Image
            src={selectedSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 80vw, 40vw"
            className={`rounded-xl ${
              version === "mobile" ? "object-contain" : "object-cover"
            }`}
          />
        </div>
      </button>

      {mobileSrc && (
        <div
          role="group"
          aria-label="画像の表示切り替え"
          className="mx-auto mb-2 flex w-4/5 gap-2"
        >
          <button
            type="button"
            aria-pressed={version === "pc"}
            onClick={() => setVersion("pc")}
            className={`rounded px-3 py-1 ${
              version === "pc"
                ? "bg-[#6a5acd] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            PC版
          </button>
          <button
            type="button"
            aria-pressed={version === "mobile"}
            onClick={() => setVersion("mobile")}
            className={`rounded px-3 py-1 ${
              version === "mobile"
                ? "bg-[#6a5acd] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            スマホ版
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-label={`${alt}の拡大表示`}
        className="fixed m-auto max-h-[90vh] max-w-[90vw] border-0 bg-transparent p-0 [&::backdrop]:bg-black/80"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}
      >
        <div className="relative h-[85vh] w-[90vw]">
          <Image
            src={selectedSrc}
            alt={alt}
            fill
            sizes="90vw"
            className="object-contain"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 rounded bg-white px-3 py-2 text-gray-900"
          >
            閉じる
          </button>
        </div>
      </dialog>
    </>
  );
}
