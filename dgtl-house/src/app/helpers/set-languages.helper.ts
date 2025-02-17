'use server';

import {ELanguages} from '@/app/entities/enums/languages.enum';
import {cookies} from 'next/headers';
import {ECookiesProps} from '@/app/entities/enums/cookies-props.enum';

export default async function setLanguagesValue(lang: ELanguages) {
  const cookiesInstance = await cookies();
  cookiesInstance.set(ECookiesProps.Languages, lang);
}
