import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import Loader from '../components/Loader';
import Repo from '../components/Repo';
import type { RepoProps } from '../types/repo';

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadrepos = async function (username: string) {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      orderedRepos = orderedRepos.slice(0, 5);

      setRepos(orderedRepos);
    };

    if (username) {
      loadrepos(username);
    }
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <div className="mx-auto flex max-w-[500px] flex-col">
      <BackBtn />
      <h2 className="mb-8 text-center text-xl font-bold">
        Explore os repositórios do usuário: <u>{username}</u>
      </h2>
      {repos && repos.length === 0 && <p className="text-center">Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div className="bg-azul-200 flex flex-wrap items-center gap-5 rounded-2xl p-8">
          {repos.map((repo: RepoProps) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
