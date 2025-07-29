import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <>
      <FaSpinner className="absolute left-1/2 mt-10 ml-[-25px] animate-spin text-[50px]" />
    </>
  );
};

export default Loader;
