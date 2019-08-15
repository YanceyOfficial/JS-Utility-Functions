import { reg } from "./constant";

/**
 *  @param {Object} param
 *  @description To get the type of param.
 * */
export const getType = param =>
  Object.prototype.toString
    .call(param)
    .slice(8, -1)
    .toLowerCase();

/**
 *  @param {String} jsonDate
 *  @description Convert JSONDate to common.
 * */
export const formatJSONDate = jsonDate =>
  new Date(+new Date(new Date(jsonDate).toJSON()) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "");

/**
 *  @param {Array} arr
 *  @description Remove deduplicate elements at an array.
 * */
export const deduplicateArray = arr => [...new Set(arr)];

/**
 *  @param {Array} arr
 *  @param {String} keyName
 *  @description Remove deduplicate elements by key at an object-array.
 * */
export const deduplicateObjectArray = (arr, keyName) => {
  const hash = {};
  return arr.reduce((item, next) => {
    hash[next[keyName]]
      ? null
      : (hash[next[keyName]] = true && item.push(next));
    return item;
  }, []);
};

/**
 *  @param {Array} arr
 *  @description Shuffle an array.
 * */
export const shuffle = function(arr) {
  let i = arr.length,
    j;
  while (i) {
    j = Math.floor(Math.random() * i--);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/**
 *  @param {String} str
 *  @param {String} currencies
 *  @description Make amount to thousands.
 * */
export const toThousands = (str, currencies = "$") => {
  return currencies + str.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
};

/**
 *  @param {Number} num
 *  @param {String} currencies
 *  @description The other method to make amount to thousands.
 * */
export const simpleToThousands = (num, currencies = "$") => {
  return currencies + num.toLocaleString("en-US");
};

/**
 *  @param {String} str
 *  @description Capitalize the first letter of each word.
 * */
export const capitalized = str => {
  return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
};

/**
 *  @param {Number} min
 *  @param {Number} max
 *  @description  The maximum is exclusive and the minimum is inclusive.
 * */
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 *  @param {Number} min
 *  @param {Number} max
 *  @description Both of The maximum and minimum are inclusive.
 * */
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 *  @param {Array} arr
 *  @description Deep flatten an array.
 * */
export const deepFlatten = arr => {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val),
    []
  );
};

/**
 *  @description Detect whether the browser supports webp.
 * */
export const checkWebp = () => {
  return (
    document
      .createElement("canvas")
      .toDataURL("image/webp")
      .indexOf("data:image/webp") === 0
  );
};

/**
 *  @param {String} filename
 *  @get file extension name
 * */
export const getFileExtension = filename =>
  filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);

/**
 *  @param {String} ip
 *  @description check ip
 * */
export const isValidIP = ip => {
  return reg.ip.test(ip);
};

/**
 *  @param {String} key
 *  @description Sort an Object-Array By key
 * */
export const sortBy = key => (a, b) =>
  a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;

/**
 *  @param {String} cookies
 *  @description Cookies string to object
 * */
export const formatCookie = cookies => {
  const o = {};
  cookies
    .split(";")
    .forEach(value => (o[value.split("=")[0]] = value.split("=")[1]));
  return o;
};

/**
 *  @param {Number} dalay
 *  @description Delay Function
 * */
export const sleep = (delay = 1000) =>
  new Promise(resolve => setTimeout(() => resolve(), delay));

/**
 *  @description Get a hex color
 * */
export const randomColor = () =>
  "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);

/**
 *  @param {Number} length
 *  @description Generate a random series at most 10 length
 * */
export const randomSeries = length =>
  Math.random()
    .toString(36)
    .slice(2, 2 + length);
