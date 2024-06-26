export interface Country {
  country_name: string
  country_code: string
  provinces: Province[]
}

export interface Province {
  province_name: string
  cities: City[]
}

export interface City {
  city_name: string
}
