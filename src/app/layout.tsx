import "./globals.css";

export const metadata = {
  title: "GPT-3",
  description: "Let's Build Something amazing with GPT-3 OpenAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
