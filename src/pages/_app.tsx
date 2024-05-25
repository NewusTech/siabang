import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>
          Sistem Informasi Administrasi dan Pembangunan - Kabupaten Pesisir
          Barat
        </title>
        <meta
          name="description"
          content="Sistem Informasi Administrasi dan Pembangunan - Kabupaten Pesisir
          Barat"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
