import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Header Only */}
      <Header />

      {/* Empty placeholder for now */}
      <main className="flex-1 flex items-center justify-center">
        {/* You can add your hero/sections here later */}
      </main>
    </div>
  );
}
