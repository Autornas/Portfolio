// Use plain anchors for SSR-safe navigation in the app shell

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-black/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Portfolio
        </a>
        <nav className="flex items-center gap-4">
          <a href="/" className="text-sm text-gray-700 dark:text-gray-300 hover:underline">
            Home
          </a>
          <a href="/aboutme" className="text-sm text-gray-700 dark:text-gray-300 hover:underline">
            About Me
          </a>
          <a href="/projects" className="text-sm text-gray-700 dark:text-gray-300 hover:underline">
            Projects
          </a>
          <a href="/contact" className="text-sm text-gray-700 dark:text-gray-300 hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
