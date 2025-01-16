import Navbar from "./Navbar";

export function Layout({ children }) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <Navbar/>
        {/* <Navbar /> */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    );
  }