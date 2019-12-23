export const isDev = () => ['dashboard-dev.wingalpha.com', 'dashboard-local.wingalpha.com:3030'].includes(window.location.host);
export const isProd = () => ['dashboard.wingalpha.com'].includes(window.location.host);

export const ENV = {
  dev: isDev(),
  prod: isProd(),
}
