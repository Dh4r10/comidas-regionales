import { ConfigProvider, Input, Space } from "antd";
import React from "react";

const InputFormularios = (props) => {
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
        direction="vertical"
        size="middle"
        className={`w-full ${!fieldState.error
          ? ""
          : "ring-1 ring-red-500 focus:ring-red-500"
          }`}
      >
        <Space.Compact size="large" className="w-full" direction="vertical">
          {
            value == undefined ? (
              <Input
                {...field}
                id={name}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
              />
            ) : (
              <Input
                {...field}
                id={name}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
              />
            )
          }
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};

export default InputFormularios;
