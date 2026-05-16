const ADMIN_TOKEN_KEY = "pizzaria_madezzo_admin_token";
const ADMIN_USER_KEY = "pizzaria_madezzo_admin_user";

export function getStoredAdminToken(): string | null {
  return localStorage.getItem(ADMIN_TOKEN_KEY);
}

export function setStoredAdminToken(token: string): void {
  localStorage.setItem(ADMIN_TOKEN_KEY, token);
}

export function clearStoredAdminToken(): void {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
}

export function getStoredAdminUser<T = unknown>(): T | null {
  const raw = localStorage.getItem(ADMIN_USER_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    localStorage.removeItem(ADMIN_USER_KEY);
    return null;
  }
}

export function setStoredAdminUser(admin: unknown): void {
  localStorage.setItem(ADMIN_USER_KEY, JSON.stringify(admin));
}

export function clearStoredAdminUser(): void {
  localStorage.removeItem(ADMIN_USER_KEY);
}

export function clearAdminSession(): void {
  clearStoredAdminToken();
  clearStoredAdminUser();
}