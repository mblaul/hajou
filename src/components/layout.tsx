import Head from "next/head";
import Link from "next/link";
import type { PropsWithChildren } from "react";

const Header = () => {
  return (
    <header className="container flex items-center p-4">
      <h1 className="sm:text-[5rem]">
        <Link
          href="/"
          className="box-border bg-gradient-to-r from-gold via-orange to-orange bg-clip-text text-transparent shadow"
        >
          hajou
        </Link>
      </h1>
    </header>
  );
};

export const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>hajou - Habit Journal</title>
        <meta name="description" content="Log your favorite habits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="app-container">
        <Header />
        <main className="flex w-full flex-col pt-4 sm:pt-8">
          <div>{props.children}</div>
        </main>
      </div>
    </>
  );
};
