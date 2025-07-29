import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import type { UserProps } from '../types/user';

const User = ({ login, avatar_url, followers, following, location }: UserProps) => {
  return (
    <div className="bg-azul-200 flex flex-col items-center justify-center gap-5 rounded-2xl p-8">
      <img
        src={avatar_url}
        alt={login}
        className="border-purple h-[140px] w-[140px] rounded-[50%] border-4"
      />
      <h2 className="text-2xl font-bold">{login}</h2>
      <p className="flex items-center gap-2">
        <MdLocationPin className="text-teal text-2xl" />
        <span className="text-azul-50 font-bold">{location}</span>
      </p>
      <div className="flex">
        <div className="border-azul-50 flex flex-col gap-1 border-r px-4">
          <p className="text-center">Seguidores:</p>
          <p className="bg-teal rounded px-2 py-1 text-center">{followers}</p>
        </div>
        <div className="flex flex-col gap-1 px-4">
          <p className="text-center">Seguindo:</p>
          <p className="bg-teal rounded px-2 py-1 text-center">{following}</p>
        </div>
      </div>
      <Link
        className="bg-purple rounded-md p-4 text-center opacity-80 transition-opacity duration-300 hover:opacity-100"
        to={`/repos/${login}`}
      >
        Ver melhores projetos
      </Link>
    </div>
  );
};

export default User;
