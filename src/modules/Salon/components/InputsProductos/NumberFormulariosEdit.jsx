import { ConfigProvider, InputNumber, Space } from "antd";
import React, { useState } from "react";

const NumberFormulariosEdit = (props) => {
    const { name, placeholder, disabled, onChange, defaultValue } = props;

    const [defaults, setDefaults] = useState(defaultValue)
    // const [values, setValues] = useState(defaultValue)

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
                className="w-full"
            >
                <Space.Compact size="large" className="w-full" direction="vertical">
                    <InputNumber
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        disabled={disabled}
                        defaultValue={defaults}
                        // value={values}
                        onChange={onChange}
                    />
                </Space.Compact>
            </Space>
        </ConfigProvider>
    );
};

export default NumberFormulariosEdit;
