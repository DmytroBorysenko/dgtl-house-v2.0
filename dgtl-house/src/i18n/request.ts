import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
import {ECookiesProps} from '@/app/entities/enums/cookies-props.enum';
import {ELanguages} from '@/app/entities/enums/languages.enum';

export default getRequestConfig(async () => {
  const cookiesInstance = await cookies();
  const locale = cookiesInstance.get(ECookiesProps.Languages)?.value || ELanguages.EN;

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
