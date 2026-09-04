/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    { pattern: /bg-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)(\/[\d]+)?/ },
    { pattern: /text-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)(\/[\d]+)?/ },
    { pattern: /border-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)(\/[\d]+)?/ },
    { pattern: /from-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /via-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /to-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /dark:bg-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)(\/[\d]+)?/ },
    { pattern: /dark:text-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)(\/[\d]+)?/ },
    { pattern: /dark:border-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)(\/[\d]+)?/ },
    { pattern: /dark:from-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /dark:via-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /dark:to-(indigo|emerald|violet|rose|amber|cyan|purple|pink|teal|orange|slate|blue)-(50|100|200|300|400|500|600|700|800|900)/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
