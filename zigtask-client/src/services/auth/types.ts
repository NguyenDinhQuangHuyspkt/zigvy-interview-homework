export type TRequestLogin = {
  email: string;
  password: string;
};

export type TResponseLogin = {
  accessToken: string;
  user: {
    id: string;
    gmail: string;
  };
};

export type TRequestRegister = {
  gmail: string;
  password: string;
};

export type TResponseRegister = {};
