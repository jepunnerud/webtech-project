export interface TeamStats {
  club: string
  appearances: number
  goals: number
}

export interface Player {
  id: number
  name: string
  nation: string
  born: string
  position: string
  image_url: string
  short_easy_description: string
  short_medium_description: string
  short_advanced_description: string
  extended_easy_description: string
  extended_medium_description: string
  extended_advanced_description: string
  teams: TeamStats[]
  long_description_qr?: string
  long_description_wiki?: string
  debut_date: string
}
