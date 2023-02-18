import Head from "next/head";
import Link from "next/link";
import type { PropsWithChildren } from "react";

const Header = () => {
  return (
    <header className="container flex items-center">
      <h1 className="sm:text-[5rem]">
        <Link
          href="/"
          className="bg-gradient-to-r from-gold via-orange to-orange bg-clip-text text-transparent shadow"
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
      <div className="min-h-screen p-4">
        <Header />
        <main className="flex flex-col pt-4">
          <div>
            <div>{props.children}</div>
          </div>
        </main>
      </div>
    </>
  );
};
