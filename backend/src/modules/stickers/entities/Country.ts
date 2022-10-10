class Country {
  id: number;

  country_code: string;

  country_name: string;

  created_at: string;

  updated_at: string;

  index: number;

  stickers_start: number;

  stickers_end: number;

  flag: string;

  constructor({
    id,
    country_code,
    country_name,
    created_at,
    flag,
    index,
    stickers_end,
    stickers_start,
    updated_at,
  }: Country) {
    this.id = id;
    this.country_code = country_code;
    this.country_name = country_name;
    this.index = index;
    this.stickers_start = stickers_start;
    this.stickers_end = stickers_end;
    this.flag = flag;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export { Country };
