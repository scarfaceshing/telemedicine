import Cookies from 'js-cookie'

export const storeToken = async (token: string) => {
 const access_token = await token;
 return Cookies.set('token', access_token, { expires: 1, path: '/' })
}

export const getToken = (): string | undefined => {
 const token = Cookies.get('token')
 return token;
}

export const removeToken = ():void => {
 Cookies.remove('token')
}
