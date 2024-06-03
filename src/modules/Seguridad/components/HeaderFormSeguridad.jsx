import React from 'react';

const HeaderFormSeguridad = (props) => {
  const { titulo, children } = props;

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-16 w-auto"
        src="/img/logo_text.png"
        alt="Walter Logo"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
        {titulo}
      </h2>
      <div className="text-justify">{children}</div>
    </div>
  );
};

export default HeaderFormSeguridad;
