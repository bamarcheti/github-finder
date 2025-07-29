import type { RepoProps } from '../types/repo';

import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';

const Repo = ({ name, language, html_url, forks_count, stargazers_count }: RepoProps) => {
  return (
    <div className="bg-azul-300 border-azul-50 flex flex-1/2 flex-col items-start gap-4 rounded-xl border-2 border-solid p-8">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="flex items-center gap-1 text-center">
        <BsCodeSlash className="text-sm" /> {language}
      </p>
      <div className="flex gap-4">
        <div className="border-azul-50 flex items-center justify-center gap-3 rounded border border-solid pr-3">
          <AiOutlineStar className="bg-teal rounded-xs px-1.5 py-1 text-[2rem]" />
          <span>{stargazers_count}</span>
        </div>
        <div className="border-azul-50 flex items-center justify-center gap-3 rounded border border-solid pr-3">
          <AiOutlineFork className="bg-teal rounded-xs px-1.5 py-1 text-[2rem]" />
          <span>{forks_count}</span>
        </div>
      </div>
      <a
        href={html_url}
        target="_blank"
        className="bg-azul-200 flex items-center gap-2 rounded-sm px-6 py-2 text-white hover:opacity-80"
      >
        <span>Ver código</span>
        <RiGitRepositoryLine className="text-sm" />
      </a>
    </div>
  );
};

export default Repo;
