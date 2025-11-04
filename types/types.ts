export interface FormData {
  email: string;
  password: string;
}

export interface UserType {
  id: string;
  username: string;
  email: string;
  created_at: string;
}

export interface ChampionsResponse {
  type: string;
  format: string;
  version: string;
  data: Record<string, Champion>;
}

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  version: string;
  partype: string;
  info: Info;
  image: ImageInfo;
  tags: string[];
  stats: Stats;
}

export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface ImageInfo {
  full: string; // "Aatrox.png"
  sprite: string; // "champion0.png"
  group: string; // "champion"
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Stats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedoffset: number;
  attackspeedperlevel: number;
}
