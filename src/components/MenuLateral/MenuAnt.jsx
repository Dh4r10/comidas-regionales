import React, { useState } from "react";

import { getLevelKeys } from "./MenuLateralFunctions";
import { ITEMS } from "./MenuLateralConstans";

import { ConfigProvider, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { salonPaths } from "@/utils/routes/SalonRoutes";

const levelKeys = getLevelKeys(ITEMS);

const MenuAnt = (props) => {
  const { collapsed } = props;
  const navigate = useNavigate();

  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onSelect = ({ key }) => {
    setSelectedKeys([key]);

    if (key === "51") {
      navigate(salonPaths[0].path);
    }
    if (key === "52") {
      navigate(salonPaths[1].path);
    }
  };

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBorderRadius: "none",
          },
        },
      }}
    >
      <Menu
        className="menu-lateral__component-ant"
        mode="inline"
        defaultSelectedKeys={["231"]}
        openKeys={stateOpenKeys}
        selectedKeys={selectedKeys}
        onSelect={onSelect}
        onOpenChange={onOpenChange}
        inlineCollapsed={collapsed}
        items={ITEMS}
      />
    </ConfigProvider>
  );
};

export default MenuAnt;
