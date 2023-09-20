export type Area = {
  area: {
    name: string
    code: string
  }
  weatherCodes?: string[]
  weathers?: string[]
  winds?: string[]
  waves?: string[]
  pops?: string[]
  temps?: string[]
}

export type TimeSeries = {
  timeDefines: string[]
  areas: Area[]
}

export type Forecast = {
  publishingOffice: string
  reportDatetime: string
  timeSeries: TimeSeries[]
}
