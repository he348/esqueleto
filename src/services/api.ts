const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

interface ApiRequestOptions {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: unknown;
  token?: string | null;
  headers?: Record<string, string>;
}

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

async function apiRequest<T>(
  path: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const headers: Record<string, string> = {
    Accept: "application/json",
    ...options.headers,
  };

  const hasBody = options.body !== undefined;

  if (hasBody) {
    headers["Content-Type"] = "application/json";
  }

  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    method: options.method || "GET",
    headers,
    body: hasBody ? JSON.stringify(options.body) : undefined,
  });

  const contentType = response.headers.get("content-type");
  const isJson = contentType?.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const message =
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof data.error === "string"
        ? data.error
        : "Erro ao comunicar com o servidor";

    throw new ApiError(message, response.status, data);
  }

  return data as T;
}

export const api = {
  get<T>(path: string, token?: string | null) {
    return apiRequest<T>(path, {
      method: "GET",
      token,
    });
  },

  post<T>(path: string, body?: unknown, token?: string | null) {
    return apiRequest<T>(path, {
      method: "POST",
      body,
      token,
    });
  },

  patch<T>(path: string, body?: unknown, token?: string | null) {
    return apiRequest<T>(path, {
      method: "PATCH",
      body,
      token,
    });
  },

  put<T>(path: string, body?: unknown, token?: string | null) {
    return apiRequest<T>(path, {
      method: "PUT",
      body,
      token,
    });
  },

  remove<T>(path: string, token?: string | null) {
    return apiRequest<T>(path, {
      method: "DELETE",
      token,
    });
  },
};