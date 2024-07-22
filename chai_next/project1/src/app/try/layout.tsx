export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h1>Trial Layout Up</h1>
        {children}
        <h1>Trial Layout Down</h1>
    </div>
  );
}
