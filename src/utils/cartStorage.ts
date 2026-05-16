const CART_CODE_KEY = "pizzaria_madezzo_cart_code";

export function getStoredCartCode(): string | null {
  return localStorage.getItem(CART_CODE_KEY);
}

export function setStoredCartCode(cartCode: string): void {
  localStorage.setItem(CART_CODE_KEY, cartCode);
}

export function clearStoredCartCode(): void {
  localStorage.removeItem(CART_CODE_KEY);
}