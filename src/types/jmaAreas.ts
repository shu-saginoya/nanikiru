export type Area = {
  name: string
  enName: string
  kana?: string
  officeName?: string
  parent?: string
  children?: string[]
}
export type Areas = {
  centers: Area[]
  offices: Area[]
  class10s: Area[]
  class15s: Area[]
  class20s: Area[]
}
