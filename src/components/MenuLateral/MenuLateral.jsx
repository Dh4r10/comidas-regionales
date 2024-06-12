import React, { useContext, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Switch } from "antd";

import MenuAnt from "./MenuAnt";
import BreadcrumbCN from "./BreadCrumb";
import { totalRoutes } from "@/utils/routes/TotalRoutes";

import "./MenuLateral.scss";
import ThemeContext from "@/contexts/ThemeContext";

var bodyId = document.getElementById("bodyMode");

const MenuLateral = (props) => {
  const { children } = props;

  let { theme, setTheme } = useContext(ThemeContext);

  const [collapsed, setCollapsed] = useState(false);

  bodyId.className = theme;

  const changeTheme = (value) => {
    localStorage.setItem("theme", value ? "dark" : "light");
    setTheme(localStorage.getItem("theme"));
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="menu-lateral h-full overflow-auto">
      <div className="grid grid-rows-[auto,1fr,auto] w-full bg-white dark:border-[#242424] dark:bg-[#1C1C1C]">
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
                  }
                  : {
                    colorPrimary: "#009444",
                    primaryShadow: "none",
                    colorPrimaryHover: "#1AA02A",
                    colorPrimaryActive: "#1AA02A",
                  },
              Menu:
                theme === "dark"
                  ? {
                    itemBorderRadius: "none",
                    darkItemSelectedBg: "#1C1C1C",
                    darkSubMenuItemBg: "#252525",
                    darkItemBg: "#1C1C1C",
                    darkPopupBg: "#1C1C1C",
                  }
                  : {
                    itemBorderRadius: "none",
                    itemSelectedBg: "#CBFFE1",
                    itemSelectedColor: "#009444",
                  },
              Switch: {
                colorPrimary: "#099F1B",
                colorPrimaryHover: "#0CBC22",
              },
            },
          }}
        >
          <div className="menu-lateral__boton dark:border-[#242424] border-b-[1px] border-r-[1px]">
            <Button
              type="primary"
              onClick={toggleCollapsed}
              className={`rounded-none w-20 h-14 border-b-0 border-t-0 ${collapsed && "border-r-0"
                }`}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <div className="menu-lateral__boton-image w-full flex justify-center items-center bg-none dark:bg-[#1C1C1C] border-[#242424] ">
              <img
                className="w-16"
                src="/img/logo_menu_lateral.png"
                alt="Walter logo pequeño"
              />
            </div>
          </div>
          <MenuAnt collapsed={collapsed} theme={theme} />
          <div className="flex justify-end p-2">
            <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Light"
              unCheckedChildren="Dark"
            />
          </div>
        </ConfigProvider>
      </div>
      <div className="menu-lateral__content gap-1 overflow-y-auto px-4">
        <div className="flex items-center py-1">
          <BreadcrumbCN rutas={totalRoutes} />
        </div>
        {children}
      </div>
    </div>
  );
};
export default MenuLateral;
