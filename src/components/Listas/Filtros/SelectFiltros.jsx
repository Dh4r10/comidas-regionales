import React, { useContext } from 'react';
import { ConfigProvider, Select, Space } from 'antd';

import './Filtros.scss'
import ThemeContext from '@/contexts/ThemeContext';

const SelectPrueba = (props) => {

    let { theme } = useContext(ThemeContext)

    const { handleChange, columnFilterValue, title, options } = props;

    return (
        <ConfigProvider theme={{
            token: {
                borderRadius: "none",
                colorText: theme === "dark" && "#B0B0B0"
            },
            components: {
                Select: {
                    selectorBg: theme === "dark" && "#1c1c1c",
                    colorBgElevated: theme === "dark" ? "#252525" : "white",
                    optionSelectedBg: theme === "dark" ? "#363434" : "rgb(217, 247, 217)",
                    controlItemBgHover: theme === "dark" ? "#2E2E2E" : "#ECECEC",
                }
            }
        }}>
            <Space direction="vertical" size="middle">
                <Space.Compact size="large" direction='vertical' className={`select-filtros${theme === "dark" ? "-dark" : ""} w-full gap-1 min-w-28`}>
                    <p className='text-sm pl-1'>{title}</p>
                    <Select
                        className='w-full'
                        defaultValue=''
                        onChange={handleChange}
                        value={
                            columnFilterValue === undefined ? "TODOS" : columnFilterValue
                        }
                        options={options}
                    />
                </Space.Compact>
            </Space>
        </ConfigProvider>
    )
}

export default SelectPrueba