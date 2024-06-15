import ThemeContext from '@/contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, ConfigProvider, Space } from 'antd'
import React, { useContext } from 'react'

const ButtonAdd = (props) => {

    const { theme } = useContext(ThemeContext)

    const { disabled, htmlType, type, onClick, icon } = props

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
            <Button onClick={onClick} className="rounded-none w-full border-[1px]" type={type} htmlType={htmlType} disabled={disabled} icon={<FontAwesomeIcon icon={icon} />}>
                Añadir
            </Button>
        </ConfigProvider>
    )
}

export default ButtonAdd