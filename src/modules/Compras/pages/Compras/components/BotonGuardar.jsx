import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BotonGuardar = (props) => {
  const { titulo } = props;
  return (
    <button className="custom-submit w-auto mt-5" type="submit">
      <FontAwesomeIcon icon={faFloppyDisk} />
      &nbsp; {titulo}
    </button>
  );
};

export default BotonGuardar;
