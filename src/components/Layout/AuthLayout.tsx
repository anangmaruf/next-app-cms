export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen w-full md:px-16 flex flex-1 items-center justify-center">{children}</div>;
}
