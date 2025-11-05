export const modelMap = {
  Goku: "/models/goku.glb",
  Vegeta: "/models/vegeta.glb",
  Piccolo: "/models/piccolo.glb",
  Bulma: "/models/bulma.glb",
  Freezer: "/models/freezer.glb",
  Ginyu: "/models/ginyu.glb",
  Celula: "/models/cell.glb",
  Gohan: "/models/gohan.glb",
  Krillin: "/models/krillin.glb",
  Yamcha: "/models/yamcha.glb",
  ChiChi: "/models/chi_chi.glb",
  Trunks: "/models/trunks.glb",
  MasterRoshi: "/models/master.glb",
  Bardock: "/models/bardock.glb",
  Android17: "/models/android_17.glb",
  Android16: "/models/android16.glb",
  Android13: "/models/android_13.glb",
  Android14: "/models/android_14.glb",
  Android15: "/models/android_15.glb",
  Babidi: "/models/babidi.glb",
  MajinBuu: "/models/majin_buu.glb",
  Bills: "/models/bills.glb",
  Whis: "/models/whis.glb",
  Zeno: "/models/zeno.glb",
  Android18: "/models/android18.glb",
  Gogeta: "/models/gogeta.glb",
  Vegetto: "/models/vegetto.glb",
  Broly: "/models/broly.glb",

};

export function normalize(str) {
  return str
    ?.toLowerCase()
    .replace(/\s|_|-/g, "") 
    .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
}

export function resolveModelFor(name) {
  const normalizedName = normalize(name);
  const key = Object.keys(modelMap).find(k => normalizedName.includes(normalize(k)));
  return key ? modelMap[key] : null;
}

export function hasModel(name) {
  return !!resolveModelFor(name);
}

