const exteriors = {
  "Factory New": {
    short: "FN",
    range: "",
  },
  "Minimal Wear": {
    short: "MW",
    range: "",
  },
  "Field-Tested": {
    short: "FT",
    range: "",
  },
  "Well-Worn": {
    short: "WW",
    range: "",
  },
  "Battle-Scarred": {
    short: "BS",
    range: "",
  },
};

export function removeExterior(text) {
  let title = text;
  const list = Object.keys(exteriors);

  list.forEach((item) => {
    if (text.includes(item)) {
      title = title.replace(` (${item})`, "");
    }
  });
  return title;
}
