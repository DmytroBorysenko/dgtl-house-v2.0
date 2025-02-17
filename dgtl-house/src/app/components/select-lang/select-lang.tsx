'use client';

import {useState} from 'react';
import setLanguagesValue from '@/app/helpers/set-languages.helper';
import {ELanguages} from '@/app/entities/enums/languages.enum';
import Image from 'next/image';
import usaFlag from '@/app/assets/img/lang-flag/usa-flag.svg';
import uaFlag from '@/app/assets/img/lang-flag/ua-flag.svg';
import './select-lang.css';
interface Option {
  value: ELanguages;
  label: string;
  image: {src: string};
}

export const SelectLang: React.FC<{selected: ELanguages}> = ({selected}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const options: Option[] = [
    {value: ELanguages.EN, label: 'EN', image: usaFlag},
    {value: ELanguages.UK, label: 'UK', image: uaFlag},
  ];

  return (
    <div className="dropdown">
      <div className={`dropdown-btn ${isActive ? '' : 'collapsed'}`} onClick={() => setIsActive(!isActive)}>
        <Image
          className="flag"
          src={options.find((x) => x.value === selected)?.image.src || ''}
          alt="flag"
          width={20}
          height={15}
        />
        <span>{options.find((x) => x.value === selected)?.label}</span>
      </div>
      {isActive && (
        <div className={`dropdown-content ${isActive ? '' : 'slide-out-down'}`}>
          {options
            .filter((x) => x.value !== selected)
            .map((option, key) => (
              <div
                key={key}
                onClick={() => {
                  setLanguagesValue(option.value);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                <Image className="flag" src={option.image.src} alt={option.value} width={20} height={15} />
                {option.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
