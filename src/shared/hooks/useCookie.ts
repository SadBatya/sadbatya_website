import { useState, useEffect } from "react";

export const useCookies = (key: string, initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const nameEQ = encodeURIComponent(key) + "=";
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameEQ) === 0) {
          setValue(decodeURIComponent(cookie.substring(nameEQ.length)));
          break;
        }
      }
    }
    setIsLoaded(true);
  }, [key]);

  const setCookie = (newValue: string, days = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
      newValue
    )}; expires=${expires.toUTCString()}; path=/`;
    setValue(newValue);
  };

  const removeCookie = () => {
    document.cookie = `${encodeURIComponent(
      key
    )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    setValue(initialValue);
  };

  return {
    value,
    setCookie,
    removeCookie,
    isLoaded,
  };
};
