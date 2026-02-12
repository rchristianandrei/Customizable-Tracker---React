export function Navbar() {
  return (
    <section className="w-50 border-r border-foreground py-2">
      <nav className="text-center">
        <ul className="flex flex-col gap-2 *:cursor-pointer">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="#">Submit Tracker</a>
          </li>
          <li>
            <a href="/manage-tracker">Manage Tracker</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
