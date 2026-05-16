export type PaymentMethod = "PIX" | "CASH" | "CARD_ON_DELIVERY" | "ONLINE_CARD";

export type PaymentStatus = "PENDING" | "PAID" | "FAILED" | "CANCELED";

export type OrderStatus =
  | "RECEIVED"
  | "CONFIRMED"
  | "PREPARING"
  | "READY"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "CANCELED";

export type ProductType = "DRINK" | "SIDE" | "DESSERT";

export type PizzaPortion = "WHOLE" | "HALF";