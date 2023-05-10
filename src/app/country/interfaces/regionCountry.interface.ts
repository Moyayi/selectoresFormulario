export interface InterfaceCountry {
  name: Name;
  cca3: string;
  borders : string[]
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: NativeName };
}

export interface SmallCountry{
  name : string;
  cca3 : string;
  borders? : string[]
}

export interface NativeName {
  official: string;
  common:   string;
}
