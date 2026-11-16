import "./globals.css";

export const metadata = {
  title: "Catálogo Rick and Morty",
  description: "Atividade DW3 - consumo de API com React e Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}