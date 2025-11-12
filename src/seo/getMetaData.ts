import { SEO_CONFIG, RouteMeta } from "./routeMeta";

export function getMeta(pathname: string): RouteMeta | null {
  const meta = SEO_CONFIG.find((m) => m.path === pathname);
  return meta ?? null;
}
