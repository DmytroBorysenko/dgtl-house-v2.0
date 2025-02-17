import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import {SelectLang} from '@/app/components/select-lang/select-lang';
import {ELanguages} from '@/app/entities/enums/languages.enum';

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const locale = (await getLocale()) as ELanguages;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SelectLang selected={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
