import React from 'react';

const BotonSeguridad = (props) => {
  const { title } = props;

  return (
    <div>
      <button
        type="submit"
        className="flex w-full justify-center bg-[#009444] px-3 h-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#68C052] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {title}
      </button>
    </div>
  );
};

export default BotonSeguridad;
