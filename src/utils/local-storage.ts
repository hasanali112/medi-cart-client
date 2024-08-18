export const setTokenToLocalStore = (key: string, accessToken: string) => {
  if (typeof window === "undefined" || !key) {
    return "";
  }

  localStorage.setItem(key, accessToken);
};

export const getAccessTokenFromLocalStorage = (key: string) => {
  if (typeof window === "undefined" || !key) {
    return null; // Returning null is more conventional when accessing localStorage
  }

  return localStorage.getItem(key);
};

export const removeTokenFromLocalStorage = (key: string) => {
  if (typeof window === "undefined" || !key) {
    return "";
  }

  localStorage.removeItem(key);
};
