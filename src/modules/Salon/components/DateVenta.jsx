import React, { useState, useRef, useEffect } from "react";
import { ConfigProvider, DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const currentDate = dayjs();

const DateVenta = (props) => {
    const { field, fieldState, name, placeholder, disabled, defaultDate } = props;

    const [value, setValue] = useState(null);

    useEffect(() => {
        setValue(defaultDate);
    }, [defaultDate]);

    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: "none",
                    // colorText: "#004F82",
                    // colorTextPlaceholder: "#959596",
                },
                components: {
                    DatePicker: {
                        colorBorder: "none",
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
                <Space.Compact
                    size="middle"
                    className="w-full gap-1"
                    direction="vertical"
                >
                    <DatePicker
                        {...field}
                        suffixIcon={
                            <FontAwesomeIcon icon={faCalendar} />
                        }
                        format="YYYY-MM-DD"
                        placeholder={placeholder}
                        name={name}
                        id={name}
                        defaultValue={""}
                        value={field.value && dayjs(field.value)}
                        onChange={(date, dateStr) => {
                            setValue(dateStr);
                            field.onChange(dateStr);
                        }}
                        disabled={disabled}
                        maxDate={currentDate}
                    />
                </Space.Compact>
            </Space>
        </ConfigProvider>
    );
};
export default DateVenta;
