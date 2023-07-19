import hyRequest from '.'

export function fetchUserInfo() {
  return hyRequest.get({
    url: '/user/info'
  })
}

export function fetchUserRegister(
  username: string,
  password: string,
  nickname: string
) {
  return hyRequest.post({
    url: '/user/register',
    data: {
      username,
      password,
      nickname
    }
  })
}

export function fetchUserLogin(username: string, password: string) {
  return hyRequest.post({
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}
