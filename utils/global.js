import { useDefaultStore } from "~/stores/default";
import queryString from "query-string";
import { useGlobalStore } from "~/stores/global";
import { shallowRef } from "vue";
import AuthModal from "~/components/modals/components/AuthModal.vue";
import pluralize from "pluralize";

export function getCookie(name) {
  let cookie = document.cookie.split(";").find((c) => c.startsWith(name));
  if (cookie) {
    return cookie.substring(name.length + 1);
  }
  return null;
}

export function csrf() {
  return query("/csrf-cookie", {}, {}, "/sanctum");
}

/**
 * Запрос
 * @param url - путь
 * @param params - гет параметры
 * @param options - тело запроса
 * @param prefix - префикс пути
 * @param json - данные в виде json или text
 * @returns {Promise<unknown>}
 */
export function query(url, params = {}, options = {}, prefix = "/api/v1", json = true) {
  useDefaultStore().loading.push(true);
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
  };
  let csrf = getCookie("XSRF-TOKEN");
  if (csrf) {
    headers["X-XSRF-TOKEN"] = decodeURIComponent(csrf);
  }
  let qs = queryString.stringify(params, { arrayFormat: "bracket" });
  if (qs) {
    qs = `?${qs}`;
  }
  return new Promise((res, rej) => {
    fetch(process.env.HOST_ENDPOINT + prefix + url + qs, {
      ...options,
      ...{ mode: "cors", credentials: "include", headers },
    })
      .then(async (response) => {
        // if (response.status === 401) {
        //   showAuthModal();
        // } else
        if (response.status === 204) {
          response.ok ? res(response) : rej(response);
        } else {
          if (json) {
            response.ok ? res(await response.json()) : rej(await response.json());
          } else {
            response.ok ? res(await response.text()) : rej(response);
          }
        }
      })
      .catch((err) => {
        console.error("Request error", err);
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

/**
 * Конвертация цен в нужную валюту
 * по умолчанию евро
 * @param price
 * @param currCode
 * @returns {*}
 */
export function convertPrice(price, currCode = "eur") {
  const currencies = useGlobalStore().currencies || [];
  let currency = currencies[0];
  let convertedPrice = parseFloat(price) || 0;
  if (price && currencies && currencies.length) {
    currency = currencies.find((item) => item.code === currCode);
    if (currency) {
      convertedPrice = parseFloat(price) / currency.rate;
    }
  }
  // return new Intl.NumberFormat("ru-RU", {
  //   maximumFractionDigits: 2,
  // }).format(convertedPrice);
  return parseFloat(convertedPrice.toFixed(2));
}

/**
 * Переключение возможности сколла страницы
 * @param bool - true - убрать сколл, false - вернуть
 */
export function hideBodyScroll(bool) {
  if (bool) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}

export function showAuthModal() {
  useDefaultStore().modals.push({
    component: shallowRef(AuthModal),
  });
}

export function pluralWord(count, word) {
  return pluralize(word, count);
}
