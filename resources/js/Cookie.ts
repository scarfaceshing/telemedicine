import Cookies from 'js-cookie'

export const storeToken = (token: string) => {
 return Cookies.set('token', token, { expires: 1, path: '/' })
}

export const getToken = (): string | undefined => {
 const token = Cookies.get('token')
 return token;
}

export const removeToken = () => {
 Cookies.remove('token')
}
