import { useDefaultStore } from "~/stores/default";
import queryString from "query-string";
import { useGlobalStore } from "~/stores/global";
import { shallowRef } from "vue";
import AuthModal from "~/components/modals/components/AuthModal.vue";
import Cookies from "js-cookie";

export function csrf() {
  return fetch(process.env.HOST_ENDPOINT + "/sanctum/csrf-cookie", {
    credentials: "include",
  });
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
  let csrf = Cookies.get("XSRF-TOKEN");
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
 * Конвертация цен в нужную валюту из другой
 * по умолчанию евро
 * @param price
 * @param toCurrCode - код валюты, в которую конвертируем
 * @param fromCurrCode - код валюты, из которой конвертируем
 * @returns {*}
 */
export function convertPrice(price, toCurrCode = "eur", fromCurrCode = "rub") {
  const currencies = useGlobalStore().currencies || [];
  let toCurrency = currencies[0];
  let fromCurrency = currencies[0];
  let rate = 1;
  let convertedPrice = parseFloat(price) || 0;
  if (price && currencies && currencies.length) {
    toCurrency = currencies.find((item) => item.code === toCurrCode);
    fromCurrency = currencies.find((item) => item.code === fromCurrCode);
    if (fromCurrCode === "rub") {
      rate = toCurrency.rate;
    } else {
      rate = 1 / fromCurrency.rate;
    }
    if (toCurrency) {
      convertedPrice = parseFloat(price) / rate;
    }
  }
  return parseFloat(convertedPrice.toFixed(2));
}

/**
 * Цена с наценкой
 * @param price - цена в евро
 * @returns {*}
 */
export function marginPrice(price) {
  const company = useGlobalStore().company || {};
  let result = parseFloat(price);
  if (company.margin_percent) {
    result = result + (result * parseFloat(company.margin_percent)) / 100;
  }
  if (company.margin_amount) {
    result += parseFloat(company.margin_amount);
  }
  return parseFloat(result.toFixed(2));
}

/**
 * Цена без накидки
 * @param price - цена в евро
 * @returns {*}
 */
export function unmarginPrice(price) {
  const company = useGlobalStore().company || {};
  let result = parseFloat(price);
  if (company.margin_amount) {
    result -= parseFloat(company.margin_amount);
  }
  if (company.margin_percent) {
    result = (result * 100) / (parseFloat(company.margin_percent) + 100);
  }
  return parseFloat(result.toFixed(2));
}

/**
 * Переключение возможности сколла страницы
 * @param hide - true - убрать сколл, false - вернуть
 */
export function hideBodyScroll(hide) {
  if (hide) {
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

export function parseError(errors, form) {
  if (errors) {
    Object.keys(errors).forEach((key) => {
      if (form[key] && errors[key]) {
        form[key].errors = errors[key];
      }
    });
  }
}

/**
 * Очищение ошибок формы
 * @param form
 */
export function resetErrors(form) {
  Object.keys(form).forEach((key) => {
    form[key].errors = [];
  });
}

/**
 * Очищение значений формы
 * @param form
 * @param defaultKey
 */
export function resetForm(form, defaultKey = "default") {
  Object.keys(form).forEach((key) => {
    form[key].value = form[defaultKey];
  });
}

/**
 * Скролл к определенному элементу
 * @param el - нод элемент
 * @param behavior
 */
export function scrollTo(el, behavior) {
  let headerHeight = 100;
  let offset = window.pageYOffset + el.getBoundingClientRect().top - headerHeight;
  window.scrollTo({ top: offset || 0, behavior: behavior || "smooth" });
}
