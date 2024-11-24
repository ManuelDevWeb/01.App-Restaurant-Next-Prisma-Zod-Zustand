import OrderSidebar from "../components/order/OrderSidebar";
import OrderSummary from "../components/order/OrderSummary";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="md:flex gap-2">
        <OrderSidebar />
       
        <main className="flex-1 md:h-screen md:overflow-y-scroll p-5 border bg-gray-100">
            {children}
        </main>

        <OrderSummary />
      </div>
    </>
  );
}
