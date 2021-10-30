const isProd = process.env.NODE_ENV === 'production'

// 拼接publicPath
export function getPublicPath(path) {
  return isProd ? `${import.meta.env.VITE_PUBLIC_PATH}${path}` : path
}

// 拼接cdnPath
export function getCDNPath(path) {
  return isProd ? `${import.meta.env.VITE_APP_CDN}${path}` : path
}
