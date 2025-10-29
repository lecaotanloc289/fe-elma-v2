import { JwtPayload } from '@/interfaces';

export function decodeJwt<T = JwtPayload>(token?: string): T | null {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    const payload = JSON.parse(
      atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'))
    );
    return payload as T;
  } catch {
    return null;
  }
}

export function isExpired(token?: string, skewSeconds = 30): boolean {
  const payload = decodeJwt<JwtPayload>(token);
  if (!payload?.exp) return true;
  const now = Math.floor(Date.now() / 1000);
  return payload.exp - skewSeconds <= now;
}

export function willExpireIn(token?: string, thresholdSec = 60): boolean {
  const payload = decodeJwt<JwtPayload>(token);
  if (!payload?.exp) return true;
  const now = Math.floor(Date.now() / 1000);
  return payload.exp - now <= thresholdSec;
}
