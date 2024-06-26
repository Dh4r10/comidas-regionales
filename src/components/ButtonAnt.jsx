import ThemeContext from '@/contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, ConfigProvider } from 'antd'
import React, { useContext } from 'react'

const ButtonAnt = (props) => {

    const { theme } = useContext(ThemeContext)

    const { tittle, disabled, danger, htmlType, type, onClick, icon } = props

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button:
                        theme === "dark"
                            ? {
                                colorPrimary: "#099f1b",
                                primaryShadow: "none",
                                colorPrimaryHover: "#0BB21F",
                                colorPrimaryActive: "#0BB21F",
                                colorBgContainerDisabled: "#565656",
                                borderColorDisabled: "#3C3C3C"
                            }
                            : {
                                colorPrimary: "#009444",
                                primaryShadow: "none",
                                colorPrimaryHover: "#00BA57",
                                colorPrimaryActive: "#00BA57",
                            },
                }
            }}>
            {icon === undefined ? (
                <Button onClick={onClick} className="h-9 rounded-none border-[1px]" type={type} htmlType={htmlType} danger={danger} disabled={disabled}>{tittle}</Button>
            ) : (
                <Button icon={<FontAwesomeIcon icon={icon} />} onClick={onClick} className="h-9 rounded-none border-[1px]" type={type} htmlType={htmlType} disabled={disabled}>{tittle}</Button>
            )}
        </ConfigProvider>
    )
}

export default ButtonAnt