'use client';

import { usePasswordStore } from '@/entities';
import { Button, Checkbox, Input } from '@/shared';
import React from 'react';
import styles from '../styles.module.scss';

export function PasswordGeneratorForm() {
  const { passwords, passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSpecialSymbols, setPasswordLength, setIncludeUpperCase, setIncludeLowerCase, setIncludeNumbers, setIncludeSpecialSymbols, setPassword, setPasswords } = usePasswordStore((state) => state);

  const disabled = (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialSymbols) || !passwordLength || passwords.length === 6 ? true : false;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharacters = 'abcdefghikjlmnopqrstuvwxyz';
    const numbersCharacters = '0123456789';
    const specialSymbolsCharacters = '%*)?@#$~';

    let validCharacters = '';

    if (includeUpperCase) {
      validCharacters += upperCaseCharacters;
    }

    if (includeLowerCase) {
      validCharacters += lowerCaseCharacters;
    }

    if (includeNumbers) {
      validCharacters += numbersCharacters;
    }

    if (includeSpecialSymbols) {
      validCharacters += specialSymbolsCharacters;
    }

    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[randomIndex];
    }

    setPassword(generatedPassword);

    if (passwords.length < 6) {
      setPasswords(generatedPassword);
    }
  };

  return (
    <form className={styles.passwordGeneratorForm} onSubmit={handleSubmit}>
      <Input label="Длина пароля:" labelSize={15} placeholder="Введите длину пароля" type="number" value={passwordLength} onChange={(e) => setPasswordLength(Number(e.target.value))} />
      <ul className={styles.passwordGeneratorFormCheckboxes}>
        <li>
          <Checkbox label="Использовать прописные буквы" checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} />
        </li>
        <li>
          <Checkbox label="Использовать строчные буквы" checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} />
        </li>
        <li>
          <Checkbox label="Использовать цифры" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
        </li>
        <li>
          <Checkbox label="Использовать символы: %, *, ), ?, @, #, $, ~" checked={includeSpecialSymbols} onChange={(e) => setIncludeSpecialSymbols(e.target.checked)} />
        </li>
        <li>
          <Checkbox label="Избегать повторения символов (не работает тк не успел)" />
        </li>
      </ul>
      <Button disabled={disabled}>Сгенерировать пароль</Button>
    </form>
  );
}
