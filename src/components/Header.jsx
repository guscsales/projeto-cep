import { RiSearchEyeLine } from 'react-icons/ri';

export default function Header() {
  return (
    <header className="mt-5">
      <div className="flex gap-1 items-center select-none">
        <RiSearchEyeLine className="text-3xl text-gray-50" />
        <h1 className="font-bold text-2xl text-gray-50">Busca CEP</h1>
      </div>
    </header>
  );
}
