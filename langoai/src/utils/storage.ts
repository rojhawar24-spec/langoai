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

// ─── API-style wrappers (localStorage-based, no real server) ───

export async function apiRegister(data: {
  email: string;
  username: string;
  password: string;
  currentLanguage: string | null;
  theme: "light" | "dark";
  interfaceLanguage: string;
}): Promise<UserData> {
  if (findUserByEmail(data.email)) throw new Error("email_taken");
  if (findUserByUsername(data.username)) throw new Error("username_taken");

  const { hashPassword } = await import("@/utils/auth");
  const hashed = await hashPassword(data.password);

  const user = createUser({
    email: data.email,
    username: data.username,
    hashedPassword: hashed,
    currentLanguage: data.currentLanguage,
    totalXP: 0,
    level: 1,
    streak: 0,
    lastActivityDate: null,
    theme: data.theme,
    interfaceLanguage: data.interfaceLanguage,
    premium: false,
  });

  setCurrentUser(user);
  setRememberMe(true);
  return user;
}

export async function apiLogin(identifier: string, password: string): Promise<UserData> {
  const user = findUserByEmailOrUsername(identifier);
  if (!user) throw new Error("invalid_credentials");

  const { verifyPassword } = await import("@/utils/auth");
  const ok = await verifyPassword(password, user.hashedPassword);
  if (!ok) throw new Error("invalid_credentials");

  setCurrentUser(user);
  setRememberMe(true);
  return user;
}

export async function apiGetMe(): Promise<UserData | null> {
  return getCurrentUser();
}

export async function apiLogout(): Promise<void> {
  logout();
}

export async function apiUpdateUser(updates: Partial<UserData>): Promise<UserData> {
  const current = getCurrentUser();
  if (!current) throw new Error("not_authenticated");
  updateUser(current.id, updates);
  const updated = { ...current, ...updates };
  setCurrentUser(updated);
  return updated;
}
