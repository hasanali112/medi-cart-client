import { authKey } from "@/constant/storageKey";
import { decodeAccessToken } from "@/jwt/auth.decode";
import {
  getAccessTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  setTokenToLocalStore,
} from "@/utils/local-storage";

export const getAccessToken = ({ accessToken }: { accessToken: string }) => {
  return setTokenToLocalStore(authKey, accessToken);
};

export const getTokenFormLocalStorage = () => {
  const getToken = getAccessTokenFromLocalStorage(authKey);
  if (getToken) {
    const decodeUserInfo: any = decodeAccessToken(getToken);
    return {
      ...decodeUserInfo,
      role: decodeUserInfo?.role.toLowerCase(),
    };
  }
};

export const removItemFromLocalStorage = () => {
  const removeToken = removeTokenFromLocalStorage(authKey);
  return removeToken;
};
