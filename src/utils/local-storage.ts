export const setTokenToLocalStore = (key: string, accessToken: string) => {
  if (!key && typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, accessToken);
};

export const getAccessTokenFromLocalStorage = (key: string) => {
  if (!key && typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(key);
};

export const removeTokenFromLocalStorage = (key: string) => {
  if (!key && typeof window === "undefined") {
    return "";
  }

  return localStorage.removeItem(key);
};
