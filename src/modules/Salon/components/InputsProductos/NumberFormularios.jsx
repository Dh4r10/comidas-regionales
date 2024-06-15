import { ConfigProvider, InputNumber, Space } from "antd";
import React from "react";

const NumberFormularios = (props) => {
    const { field, fieldState, name, placeholder, disabled, value } = props;

    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: "none",
                },
            }}
        >
            <Space
                direction="vertical" size="middle"
                className={`w-full ${!fieldState.error
                    ? ""
                    : "ring-1 ring-red-500 focus:ring-red-500"
                    }`}
            >
                <Space.Compact size="large" className="w-full" direction="vertical">
                    {value === undefined ? (
                        <InputNumber
                            {...field}
                            id={name}
                            name={name}
                            placeholder={placeholder}
                            disabled={disabled}
                            className="w-full"
                            min={1}
                        />
                    ) : (
                        <InputNumber
                            {...field}
                            id={name}
                            name={name}
                            placeholder={placeholder}
                            disabled={disabled}
                            className="w-full"
                            value={value === NaN ? 0 : value}
                            min={1}
                        />
                    )}
                </Space.Compact>
            </Space>
        </ConfigProvider>
    );
};

export default NumberFormularios;
