import { api, ApiError } from "./api";
import {
  clearStoredCartCode,
  getStoredCartCode,
  setStoredCartCode,
} from "../utils/cartStorage";

export interface CreateCartResponse {
  message: string;
  cartCode: string;
  status: "OPEN" | "CHECKED_OUT" | "ABANDONED";
}

export interface CartPizza {
  id: string;
  quantity: number;
  unitPrice: string;
  lineTotal: string;
  notes: string | null;
  size: {
    id: string;
    name: string;
    sliceCount: number;
  };
  crustOption: {
    id: string;
    name: string;
  } | null;
  flavors: Array<{
    id: string;
    name: string;
    portion: "WHOLE" | "HALF";
  }>;
}

export interface CartProductItem {
  id: string;
  quantity: number;
  unitPrice: string;
  lineTotal: string;
  notes: string | null;
  product: {
    id: string;
    name: string;
    type: "DRINK" | "SIDE" | "DESSERT";
  };
}

export interface CartResponse {
  cartCode: string;
  status: "OPEN" | "CHECKED_OUT" | "ABANDONED";
  pizzas: CartPizza[];
  products: CartProductItem[];
  summary: {
    subtotal: string;
    total: string;
  };
}

export interface AddPizzaPayload {
  sizeId: string;
  crustOptionId?: string | null;
  quantity: number;
  notes?: string | null;
  flavorIds: string[];
}

export interface AddPizzaResponse {
  message: string;
  cart: CartResponse;
}

export interface AddProductPayload {
  productId: string;
  quantity: number;
  notes?: string | null;
}

export interface AddProductResponse {
  message: string;
  cart: CartResponse;
}

export interface CartMutationResponse {
  message: string;
  cart: CartResponse;
}

export async function createCart(): Promise<CreateCartResponse> {
  const response = await api.post<CreateCartResponse>("/cart");
  setStoredCartCode(response.cartCode);
  return response;
}

export async function getCart(cartCode: string): Promise<CartResponse> {
  return api.get<CartResponse>(`/cart/${cartCode}`);
}

export async function getOrCreateCartCode(): Promise<string> {
  const storedCartCode = getStoredCartCode();

  if (!storedCartCode) {
    const createdCart = await createCart();
    return createdCart.cartCode;
  }

  try {
    await getCart(storedCartCode);
    return storedCartCode;
  } catch (error) {
    if (error instanceof ApiError && [404, 409].includes(error.status)) {
      clearStoredCartCode();
      const createdCart = await createCart();
      return createdCart.cartCode;
    }

    throw error;
  }
}

export async function getCurrentCart(): Promise<CartResponse | null> {
  const storedCartCode = getStoredCartCode();

  if (!storedCartCode) {
    return null;
  }

  try {
    return await getCart(storedCartCode);
  } catch (error) {
    if (error instanceof ApiError && [404, 409].includes(error.status)) {
      clearStoredCartCode();
      return null;
    }

    throw error;
  }
}

export async function addPizzaToCart(
  payload: AddPizzaPayload
): Promise<AddPizzaResponse> {
  const cartCode = await getOrCreateCartCode();

  return api.post<AddPizzaResponse>(`/cart/${cartCode}/pizzas`, payload);
}

export async function addProductToCart(
  payload: AddProductPayload
): Promise<AddProductResponse> {
  const cartCode = await getOrCreateCartCode();

  return api.post<AddProductResponse>(`/cart/${cartCode}/products`, payload);
}

export async function updateProductQuantity(
  itemId: string,
  quantity: number
): Promise<CartMutationResponse> {
  const cartCode = await getOrCreateCartCode();

  return api.patch<CartMutationResponse>(`/cart/${cartCode}/products/${itemId}`, {
    quantity,
  });
}

export async function removeProductFromCart(
  itemId: string
): Promise<CartMutationResponse> {
  const cartCode = await getOrCreateCartCode();

  return api.remove<CartMutationResponse>(`/cart/${cartCode}/products/${itemId}`);
}

export async function removePizzaFromCart(
  pizzaId: string
): Promise<CartMutationResponse> {
  const cartCode = await getOrCreateCartCode();

  return api.remove<CartMutationResponse>(`/cart/${cartCode}/pizzas/${pizzaId}`);
}