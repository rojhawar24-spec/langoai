/**
 * Simple password hashing using SHA-256 for demo purposes.
 * In production, use bcrypt or argon2 on the server.
 */
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "langlearn_salt_value");
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function verifyPassword(
  password: string,
  hashed: string
): Promise<boolean> {
  const hash = await hashPassword(password);
  return hash === hashed;
}
