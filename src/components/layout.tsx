import Head from "next/head";
import Link from "next/link";
import type { PropsWithChildren } from "react";

const Header = () => {
  return (
    <header className="container flex items-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        <Link href="/" className="text-[hsl(280,100%,70%)]">
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
      <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4">
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
