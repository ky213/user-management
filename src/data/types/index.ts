export enum IGender {
  MALE = "male",
  FEMALE = "female",
}

export enum ITitle {
  MISTER = "mister",
  MISSIS = "missis",
  MISS = "miss",
}

export interface IDateAge {
  date: string;
  age: number;
}
export interface IID {
  name: string;
  value: string;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export type INationality =
  | "AU"
  | "BR"
  | "CA"
  | "CH"
  | "DE"
  | "DK"
  | "ES"
  | "FI"
  | "FR"
  | "GB"
  | "IE"
  | "IN"
  | "IR"
  | "MX"
  | "NL"
  | "NO"
  | "NZ"
  | "RS"
  | "TR"
  | "UA"
  | "US";

export interface IUser {
  name: {
    title: ITitle;
    first: string;
    last: string;
  };
  gender: IGender;
  email: string;
  dob: IDateAge;
  registerd: IDateAge;
  phone: string;
  cell: string;
  nat: INationality;
}

export interface IInfo {
  seed: string;
  results: number;
  page: number;
  version: number;
}

export type IPagination = Omit<IInfo, "version">;

export interface ILocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}
