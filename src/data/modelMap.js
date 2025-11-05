const BASE = import.meta.env.BASE_URL || '/';
const path = (rel) => `${BASE}${rel.replace(/^\/+/, '')}`; 

export const modelMap = {
  Goku:        path('models/goku.glb'),
  Vegeta:      path('models/vegeta.glb'),
  Piccolo:     path('models/piccolo.glb'),
  Bulma:       path('models/bulma.glb'),
  Freezer:     path('models/freezer.glb'),
  Ginyu:       path('models/ginyu.glb'),
  Celula:      path('models/cell.glb'),
  Gohan:       path('models/gohan.glb'),
  Krillin:     path('models/krillin.glb'),
  Yamcha:      path('models/yamcha.glb'),
  ChiChi:      path('models/chi_chi.glb'),
  Trunks:      path('models/trunks.glb'),
  MasterRoshi: path('models/master.glb'),
  Bardock:     path('models/bardock.glb'),
  Android17:   path('models/android_17.glb'),
  Android16:   path('models/android16.glb'),
  Android13:   path('models/android_13.glb'),
  Android14:   path('models/android_14.glb'),
  Android15:   path('models/android_15.glb'),
  Babidi:      path('models/babidi.glb'),
  MajinBuu:    path('models/majin_buu.glb'),
  Bills:       path('models/bills.glb'),
  Whis:        path('models/whis.glb'),
  Zeno:       path('models/zeno.glb'),
  Android18:   path('models/android18.glb'),
  Gogeta:      path('models/gogeta.glb'),
  Vegetto:     path('models/vegetto.glb'),
  Broly:      path('models/broly.glb'),
};

export function normalize(str) {
  return str?.toLowerCase()
    .replace(/\s|_|-/g, "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function resolveModelFor(name) {
  const normalizedName = normalize(name);
  const key = Object.keys(modelMap).find(k => normalizedName.includes(normalize(k)));
  return key ? modelMap[key] : null;
}

export const hasModel = (name) => !!resolveModelFor(name);
