export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      {children}
    </div>
  );
}
