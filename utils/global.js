import { useDefaultStore } from "~/stores/default";
import queryString from "query-string";

export function getCookie(name) {
  let cookie = document.cookie.split(";").find((c) => c.startsWith(name));
  if (cookie) {
    return cookie.substring(name.length + 1);
  }
  return null;
}

export function csrf() {
  return query("/csrf-cookie", {}, "/sanctum");
}

export function query(url, options = {}, prefix = "/api/v1") {
  useDefaultStore().loading.push(true);
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
  };
  let csrf = getCookie("XSRF-TOKEN");
  if (csrf) {
    headers["X-XSRF-TOKEN"] = decodeURIComponent(csrf);
  }
  const qs = queryString.stringify(options);
  console.log("qs", qs);
  return new Promise((res, rej) => {
    fetch(process.env.HOST_ENDPOINT + prefix + url + `?${qs}`, {
      ...{
        mode: "cors",
        credentials: "include",
        headers,
      },
    })
      .then(async (response) => {
        if (response.status === 204) {
          response.ok ? res(await response) : rej(await response);
        } else {
          response.ok ? res(await response.json()) : rej(await response);
        }
      })
      .catch((err) => {
        console.error("Error", err);
      })
      .finally(() => {
        useDefaultStore().loading.pop();
      });
  });
}

/**
 * Проверка это скин по кс или нет
 * @param item
 * @returns {boolean}
 */
export function isCS2(item) {
  return item && item.appid === useDefaultStore().types.appid.CS2;
}

/**
 * Проверка, входит ли элемент в viewport
 * @param el
 * @returns {boolean}
 */
export function elementInViewport(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
}
