import { Sidebar } from "@/app/components/dashboard/sidebar";






export default function InLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="w-full mx-auto flex justify-between items-start px-4 py-8 ">
          <Sidebar />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}