// src/test/setup.ts
// Zorgt dat elke test met een schone localStorage begint, zodat tests
// elkaar niet kunnen beïnvloeden (bv. streak-datums die blijven hangen).
import { afterEach } from "vitest";

afterEach(() => {
  localStorage.clear();
});
