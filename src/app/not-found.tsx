import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <h1 className="mx-auto text-[30vmin] font-black text-slate-200">404</h1>
      <p className="mx-auto text-3xl font-medium text-slate-200">
        Whoops, we couldn&apos;d that page.
      </p>
      <Link
        href="/"
        className="border-3 mt-8 rounded border-slate-900 bg-slate-50 px-8 py-4 text-2xl font-medium text-slate-900"
      >
        Head Home
      </Link>
    </div>
  );
}
