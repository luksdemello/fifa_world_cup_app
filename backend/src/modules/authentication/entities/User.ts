class User {
  id: number;

  name: string;

  email: string;

  password: string;

  token: string;

  total_album: number;

  total_stickers: number;

  total_duplicates: number;

  total_complete: number;

  total_complete_percent: number;

  created_at: string;

  updated_at: string;

  constructor({
    id,
    name,
    email,
    password,
    total_album,
    token,
    total_stickers,
    total_complete,
    total_complete_percent,
    total_duplicates,
    created_at,
    updated_at,
  }: User) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.token = token;
    this.password = password;
    this.total_album = total_album;
    this.total_stickers = total_stickers;
    this.total_duplicates = total_duplicates;
    this.total_complete = total_complete;
    this.total_complete_percent = total_complete_percent;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export { User };
