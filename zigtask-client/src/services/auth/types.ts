export type TRequestLogin = {
  email: string;
  password: string;
};

export type TResponseLogin = {
  accessToken: string;
};

export type TRequestRegister = {
  email: string;
  password: string;
};

export type TResponseRegister = {
  accessToken: string;
};
