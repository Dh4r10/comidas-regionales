import React from "react";
import { ConfigProvider, Select, Space } from "antd";

const SelectFormularios = (props) => {
  const { field, fieldState, name, placeholder, disabled, options } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: "none",
        },
        components: {
          Select: {
            colorTextQuaternary: "#B9B9B9",
            colorTextPlaceholder: "#B9B9B9",
            colorText: "black",
            colorBgElevated: "white",
            controlItemBgActive: "#CACACA",
            controlItemBgHover: "#EBEBEB",
          },
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
        <Space.Compact size="middle" className="w-full" direction="vertical">
          <Select
            {...field}
            className="w-full"
            placeholder={placeholder}
            id={name}
            options={options}
            disabled={disabled}
          />
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};

export default SelectFormularios;
