export type UserLoginProps = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export type UserProps = {
  id: number;
  name?: string | null;
  email?: string | null;
};

export type UserRegisterProps = {
  name: string;
  email: string;
  password: string;
};
