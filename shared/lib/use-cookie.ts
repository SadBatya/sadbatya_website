"use client";

import { useState } from "react";

function readCookie(key: string) {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${key}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function useCookie(key: string, initialValue?: string) {
  const [value, setValue] = useState(() => readCookie(key) ?? initialValue);

  const setCookie = (next: string, days = 365) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${key}=${encodeURIComponent(next)}; expires=${expires}; path=/`;
    setValue(next);
  };

  const removeCookie = () => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    setValue(undefined);
  };

  return { value, setCookie, removeCookie };
}
