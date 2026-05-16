import type { OrderStatus, PaymentStatus } from "../types/api";

export const ORDER_STATUS_OPTIONS: OrderStatus[] = [
  "RECEIVED",
  "CONFIRMED",
  "PREPARING",
  "READY",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
  "CANCELED",
];

export const PAYMENT_STATUS_OPTIONS: PaymentStatus[] = [
  "PENDING",
  "PAID",
  "FAILED",
  "CANCELED",
];