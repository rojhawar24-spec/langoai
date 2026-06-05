export interface UserData {
  id: string;
  email: string;
  username: string;
  hashedPassword: string;
  currentLanguage: string | null;
  totalXP: number;
  level: number;
  streak: number;
  lastActivityDate: string | null;
  theme: "light" | "dark";
  interfaceLanguage: string;
  premium: boolean;
  createdAt: string;
}

const USERS_KEY = "langlearn_users";
const CURRENT_USER_KEY = "langlearn_current_user";
const REMEMBER_ME_KEY = "langlearn_remember_me";

export function getUsers(): Record<string, UserData> {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveUsers(users: Record<string, UserData>): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function findUserByEmail(email: string): UserData | undefined {
  const users = getUsers();
  return Object.values(users).find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
}

export function findUserByUsername(username: string): UserData | undefined {
  const users = getUsers();
  return Object.values(users).find(
    (u) => u.username.toLowerCase() === username.toLowerCase()
  );
}

export function findUserByEmailOrUsername(
  identifier: string
): UserData | undefined {
  const lower = identifier.toLowerCase();
  const users = getUsers();
  return Object.values(users).find(
    (u) =>
      u.email.toLowerCase() === lower || u.username.toLowerCase() === lower
  );
}

export function createUser(data: Omit<UserData, "id" | "createdAt">): UserData {
  const users = getUsers();
  const id = crypto.randomUUID();
  const newUser: UserData = {
    ...data,
    id,
    createdAt: new Date().toISOString(),
  };
  users[id] = newUser;
  saveUsers(users);
  return newUser;
}

export function updateUser(id: string, updates: Partial<UserData>): void {
  const users = getUsers();
  if (users[id]) {
    users[id] = { ...users[id], ...updates };
    saveUsers(users);
    // If updating the current user, refresh the session
    const current = getCurrentUser();
    if (current && current.id === id) {
      setCurrentUser(users[id]);
    }
  }
}

export function setCurrentUser(user: UserData | null): void {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

export function getCurrentUser(): UserData | null {
  const raw = localStorage.getItem(CURRENT_USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setRememberMe(value: boolean): void {
  localStorage.setItem(REMEMBER_ME_KEY, JSON.stringify(value));
}

export function getRememberMe(): boolean {
  const raw = localStorage.getItem(REMEMBER_ME_KEY);
  if (!raw) return false;
  try {
    return JSON.parse(raw);
  } catch {
    return false;
  }
}

export function deleteUser(id: string): void {
  const users = getUsers();
  delete users[id];
  saveUsers(users);
}

export function logout(): void {
  if (!getRememberMe()) {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
  localStorage.removeItem(CURRENT_USER_KEY);
}

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

function authHeaders(): HeadersInit {
  const token = localStorage.getItem("langlearn_token");
  return token ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } : { "Content-Type": "application/json" };
}

export async function apiRegister(data: {
  email: string;
  username: string;
  password: string;
  currentLanguage?: string | null;
  theme?: string;
  interfaceLanguage?: string;
}): Promise<UserData> {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "register_failed");
  localStorage.setItem("langlearn_token", json.token);
  return json.user;
}

export async function apiLogin(identifier: string, password: string): Promise<UserData> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "invalid_credentials");
  localStorage.setItem("langlearn_token", json.token);
  return json.user;
}

export async function apiLogout(): Promise<void> {
  const token = localStorage.getItem("langlearn_token");
  if (token) {
    await fetch(`${API_BASE}/auth/logout`, { method: "POST", headers: authHeaders() }).catch(() => {});
  }
  localStorage.removeItem("langlearn_token");
}

export async function apiGetMe(): Promise<UserData | null> {
  const token = localStorage.getItem("langlearn_token");
  if (!token) return null;
  try {
    const res = await fetch(`${API_BASE}/auth/me`, { headers: authHeaders() });
    if (!res.ok) { localStorage.removeItem("langlearn_token"); return null; }
    const json = await res.json();
    return json.user;
  } catch {
    return null;
  }
}

export async function apiUpdateUser(updates: Partial<UserData>): Promise<UserData> {
  const res = await fetch(`${API_BASE}/auth/user`, {
    method: "PATCH",
    headers: authHeaders(),
    body: JSON.stringify(updates),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "update_failed");
  return json.user;
}
