import { api } from "./api";

export interface PizzaFlavor {
  id: string;
  name: string;
  description: string | null;
  priceModifier: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PizzaSize {
  id: string;
  name: string;
  sliceCount: number;
  maxFlavors: number;
  basePrice: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CrustOption {
  id: string;
  name: string;
  additionalPrice: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: string;
  category: string | null;
  type: "DRINK" | "SIDE" | "DESSERT";
  imageUrl: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MenuResponse {
  pizzaFlavors: PizzaFlavor[];
  pizzaSizes: PizzaSize[];
  crustOptions: CrustOption[];
  products: Product[];
}

export function getMenu(): Promise<MenuResponse> {
  return api.get<MenuResponse>("/menu");
}