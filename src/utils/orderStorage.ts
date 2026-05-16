import type { CheckoutOrder } from "../services/checkoutService";

const LAST_ORDER_KEY = "pizzaria_madezzo_last_order";

export function setLastOrder(order: CheckoutOrder): void {
  localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order));
}

export function getLastOrder(): CheckoutOrder | null {
  const raw = localStorage.getItem(LAST_ORDER_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as CheckoutOrder;
  } catch {
    localStorage.removeItem(LAST_ORDER_KEY);
    return null;
  }
}

export function clearLastOrder(): void {
  localStorage.removeItem(LAST_ORDER_KEY);
}