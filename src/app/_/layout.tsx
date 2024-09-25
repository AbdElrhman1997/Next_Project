import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
}: // params: { locale },
{
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  // const messages = await getMessages();

  return (
    <html>
      <body>
        {/* <NextIntlClientProvider messages={messages}> */}
        <Header />
        {children}
        <Footer />
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
// lang={locale}
