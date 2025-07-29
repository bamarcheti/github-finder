import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName);
    }
  };

  return (
    <div className="bg-azul-200 mb-6 flex flex-col items-center justify-center gap-4 rounded-2xl p-8">
      <h2 className="text-[1.5rem] font-bold">Busque por um usuário:</h2>
      <p className="text-azul-50 text-center">Conheça seus melhores repositórios</p>
      <div className="flex gap-2">
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite o nome do usuário"
          className="text-azul-200 rounded bg-white p-2 focus:outline-none"
        />
        <button
          onClick={() => loadUser(userName)}
          className="bg-azul-300 cursor-pointer rounded p-2 hover:opacity-90"
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
