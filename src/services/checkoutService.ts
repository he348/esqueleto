import { api } from "./api";
import type { PaymentMethod, OrderStatus, PaymentStatus } from "../types/api";
import { clearStoredCartCode } from "../utils/cartStorage";
import { setLastOrder } from "../utils/orderStorage";

export interface CheckoutPayload {
  cartCode: string;
  customer: {
    name: string;
    phone: string;
    email?: string | null;
  };
  address: {
    street: string;
    number: string;
    complement?: string | null;
    neighborhood: string;
    city: string;
    state?: string | null;
    zipCode?: string | null;
    reference?: string | null;
    latitude?: number | string | null;
    longitude?: number | string | null;
  };
  payment: {
    method: PaymentMethod;
  };
  notes?: string | null;
}

export interface CheckoutOrder {
  id: string;
  code: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  subtotal: string;
  deliveryFee: string;
  total: string;
  createdAt: string;
}

export interface CheckoutResponse {
  message: string;
  order: CheckoutOrder;
}

export async function checkout(
  payload: CheckoutPayload
): Promise<CheckoutResponse> {
  const response = await api.post<CheckoutResponse>("/checkout", payload);

  setLastOrder(response.order);
  clearStoredCartCode();

  return response;
}