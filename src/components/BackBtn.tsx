import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="text-azul-50 bg-azul-200 absolute top-4 left-4 flex items-center gap-1 rounded px-4 py-2 opacity-90 transition-opacity hover:opacity-100"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack className="text-xl" />
        Voltar
      </button>
    </>
  );
};

export default BackBtn;
