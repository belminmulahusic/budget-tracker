'use client';

export default function layout() {
  return (
    <div className="flex min-h-screen bg-[#f5f7fa] text-gray-800 font-sans">
      <aside className="w-64 bg-white shadow-xl p-6 rounded-tr-3xl rounded-br-3xl hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-lg hover:text-blue-600 transition">Home</a>
          <a href="#" className="block text-lg hover:text-blue-600 transition">Profile</a>
          <a href="#" className="block text-lg hover:text-blue-600 transition">Expenses</a>
          <a href="#" className="block text-lg hover:text-blue-600 transition">Groups</a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold">Welcome back 👋</h1>
          <p className="text-gray-500">User XY</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total expenses</h3>
            <p>You have no expenses</p>
          </div>
        </section>
      </main>
    </div>
  );
}
