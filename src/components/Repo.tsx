import type { RepoProps } from '../types/repo';

import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { RiGitRepositoryLine } from 'react-icons/ri';

const Repo = ({
  name,
  topics,
  language,
  html_url,
  homepage,
  forks_count,
  stargazers_count
}: RepoProps) => {
  const buttonStyle =
    'bg-azul-200 flex flex-row-reverse items-center justify-center gap-2 rounded-sm min-[375px]:px-6 min-[375px]:py-2 py-3 text-sm text-white hover:opacity-80 min-[375px]:flex-row min-[375px]:text-[16px]';

  return (
    <div className="bg-azul-300 border-azul-50 flex flex-1/2 flex-col items-start gap-4 rounded-xl border-2 border-solid p-8">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="flex items-center gap-1 text-center">
        <BsCodeSlash className="text-sm" />
        {language?.length
          ? language
          : topics?.length
            ? topics.map((topic, index) => topic + (index < topics.length - 1 ? ', ' : '')).join('')
            : 'Não há linguagem definida'}
      </p>

      <div className="flex w-full flex-col gap-4 min-[375px]:w-auto min-[375px]:flex-row">
        <div className="border-azul-50 flex w-full items-center justify-between rounded border border-solid pr-9 max-[375px]:h-10 max-[375px]:text-xl min-[375px]:justify-center min-[375px]:gap-3 min-[375px]:pr-3">
          <AiOutlineStar className="bg-teal rounded-xs px-1.5 py-1 text-[2rem] max-[375px]:h-10 max-[375px]:w-9" />
          <span>{stargazers_count}</span>
        </div>
        <div className="border-azul-50 flex w-full items-center justify-between rounded border border-solid pr-9 max-[375px]:h-10 max-[375px]:text-xl min-[375px]:justify-center min-[375px]:gap-3 min-[375px]:pr-3">
          <AiOutlineFork className="bg-teal rounded-xs px-1.5 py-1 text-[2rem] max-[375px]:h-10 max-[375px]:w-9" />
          <span>{forks_count}</span>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 min-[475px]:flex-row">
        <a
          href={html_url}
          target="_blank"
          className={`${buttonStyle} ${homepage ? 'w-full min-[375px]:w-fit min-[475px]:w-full' : 'w-full min-[375px]:w-fit'}`}
        >
          <span>Ver código</span>
          <RiGitRepositoryLine className="text-lg min-[375px]:text-sm" />
        </a>
        {homepage && (
          <a
            href={html_url}
            target="_blank"
            className={`${buttonStyle} w-full min-[375px]:w-fit min-[375px]:px-9 min-[475px]:w-full`}
          >
            <span>Ver site</span>
            <FiExternalLink className="text-lg min-[375px]:text-sm" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Repo;
