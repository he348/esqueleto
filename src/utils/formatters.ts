import type { OrderStatus, PaymentMethod, PaymentStatus } from "../types/api";

export function formatMoney(value: string | number | null | undefined): string {
  const numberValue = Number(value || 0);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numberValue);
}

export function formatDateTime(value: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

export function getOrderStatusLabel(status: OrderStatus): string {
  const labels: Record<OrderStatus, string> = {
    RECEIVED: "Recebido",
    CONFIRMED: "Confirmado",
    PREPARING: "Em preparo",
    READY: "Pronto",
    OUT_FOR_DELIVERY: "Saiu para entrega",
    DELIVERED: "Entregue",
    CANCELED: "Cancelado",
  };

  return labels[status];
}

export function getPaymentStatusLabel(status: PaymentStatus): string {
  const labels: Record<PaymentStatus, string> = {
    PENDING: "Pendente",
    PAID: "Pago",
    FAILED: "Falhou",
    CANCELED: "Cancelado",
  };

  return labels[status];
}

export function getPaymentMethodLabel(method: PaymentMethod): string {
  const labels: Record<PaymentMethod, string> = {
    PIX: "Pix",
    CASH: "Dinheiro",
    CARD_ON_DELIVERY: "Cartão na entrega",
    ONLINE_CARD: "Cartão online",
  };

  return labels[method];
}