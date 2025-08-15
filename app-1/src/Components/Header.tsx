type HeaderProps = Readonly<{
  title: string;
}>

function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-4 px-6 border-b border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-sm text-gray-600">Welcome back 👋</div>
    </header>
  );
}

export default Header;