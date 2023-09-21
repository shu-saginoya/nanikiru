export type Regional = string | undefined
export type RegionalList = [string, string, string] | undefined
export type Level = 1 | 2 | 3

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
