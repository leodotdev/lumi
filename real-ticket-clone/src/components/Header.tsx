import Link from "next/link";
import SimpleButton from "./SimpleButton";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        RealTicket
      </Link>

      <nav className="hidden md:flex space-x-8">
        <Link
          href="#organizers"
          className="hover:text-blue-500 transition-colors"
        >
          Organizers
        </Link>
        <Link href="#fans" className="hover:text-blue-500 transition-colors">
          Fans
        </Link>
        <Link
          href="#technology"
          className="hover:text-blue-500 transition-colors"
        >
          Technology
        </Link>
      </nav>

      <SimpleButton className="rounded-full px-6">Request demo</SimpleButton>
    </header>
  );
}
