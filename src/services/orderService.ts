import { api } from "./api";
import type {
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
  PizzaPortion,
  ProductType,
} from "../types/api";

export interface PublicOrder {
  id: string;
  code: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  customer: {
    name: string;
    phone: string;
    email?: string | null;
  };
  address: {
    street: string;
    number: string;
    complement: string | null;
    neighborhood: string;
    city: string;
    state: string | null;
    zipCode: string | null;
    reference: string | null;
    latitude: string | null;
    longitude: string | null;
  } | null;
  pizzas: Array<{
    id: string;
    sizeName: string;
    sizeSliceCount: number;
    crustName: string | null;
    quantity: number;
    unitPrice: string;
    lineTotal: string;
    notes: string | null;
    flavors: Array<{
      flavorName: string;
      portion: PizzaPortion;
    }>;
  }>;
  productItems: Array<{
    id: string;
    productName: string;
    productType: ProductType;
    quantity: number;
    unitPrice: string;
    lineTotal: string;
    notes: string | null;
  }>;
  subtotal: string;
  deliveryFee: string;
  total: string;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export function getOrderByCode(orderCode: string): Promise<PublicOrder> {
  return api.get<PublicOrder>(`/orders/${encodeURIComponent(orderCode)}`);
}