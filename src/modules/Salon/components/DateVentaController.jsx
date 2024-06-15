import React from "react";
import { Controller } from "react-hook-form";
import DateVenta from "./DateVenta";

const DateVentaController = (props) => {
    const {
        control,
        name,
        label,
        placeholder,
        children,
        disabled,
        defaultDate,
    } = props;

    return (
        <div>
            <div className="flex items-center justify-between">
                <label
                    htmlFor={name}
                    className="block text-sm font-normal leading-6 text-white"
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
                            <DateVenta
                                field={field}
                                fieldState={fieldState}
                                name={name}
                                placeholder={placeholder}
                                disabled={disabled}
                                defaultDate={defaultDate}
                            />
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

export default DateVentaController;
