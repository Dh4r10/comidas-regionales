import React from "react";
import { Controller } from "react-hook-form";
import InputFormularios from "./InputFormularios";
import SelectFormularios from "./SelectFormularios";
import NumberFormularios from "./NumberFormularios";
import SelectAsync from "./SelectAsync";

const FormProductosController = (props) => {
  const {
    control,
    type,
    name,
    label,
    placeholder,
    children,
    disabled,
    setSelectedValue,
    value
  } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-normal leading-6 text-gray-600"
        >
          {label}
        </label>
        {children}
      </div>
      <div className="mt-1">
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState }) => (
            <div>
              {type === "selectAsync" ? (
                <SelectAsync
                  field={field}
                  fieldState={fieldState}
                  name={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  setSelectedValue={setSelectedValue}
                />
              ) : type === "number" ? (
                <NumberFormularios
                  field={field}
                  fieldState={fieldState}
                  name={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  value={value}
                />
              ) : (
                <InputFormularios
                  field={field}
                  fieldState={fieldState}
                  name={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  value={value}
                />
              )}
              {fieldState.error && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default FormProductosController;
