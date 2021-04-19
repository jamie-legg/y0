import { getYapiURL } from "./yapi";

export function getYapiMedia(media) {
  const imageUrl = media?.url?.startsWith("/")
    ? getYapiURL(media?.url)
    : media?.url;
  return imageUrl;
}