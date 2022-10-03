export type Local = {
  email: string;
  token: string;
}

export const setLocalStorage = (name:string, obj:Local) => {
  localStorage.setItem(name, JSON.stringify(obj));
}

const AUTH: string = "@login-token"

export const isAuthenticated = () => !!localStorage.getItem(AUTH)

export const logout = () => localStorage.removeItem(AUTH);

export const getLocalToken = (): Local => {
  const { email, token } = JSON.parse(localStorage.getItem(AUTH) || " ")
  const obj = { email, token}
  return obj;
}


