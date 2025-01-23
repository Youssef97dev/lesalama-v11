import "./globals.css";

export const metadata = {
  title: "Le Salama Marrakech",
  description: "Moroccan soul food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
