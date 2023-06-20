import hyRequest from '.'

export function fetchInfoMessage() {
  return hyRequest.get({
    url: `/api/user/info`
  })
}
