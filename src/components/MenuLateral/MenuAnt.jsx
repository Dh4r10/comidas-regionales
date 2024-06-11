import React, { useState } from "react";

import { getLevelKeys } from "./MenuLateralFunctions";
import { ITEMS } from "./MenuLateralConstans";

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { salonPaths } from "@/utils/routes/SalonRoutes";
import { comprasPaths } from "@/utils/routes/ComprasRoutes";

const levelKeys = getLevelKeys(ITEMS);

const MenuAnt = (props) => {
  const { collapsed, theme } = props;
  const navigate = useNavigate();

  const [stateOpenKeys, setStateOpenKeys] = useState(
    localStorage.getItem("stateOpenKeys")
      ? [localStorage.getItem("stateOpenKeys")]
      : ["2", "23"]
  );
  // const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const [selectedKeys, setSelectedKeys] = useState(
    localStorage.getItem("selectedKeys")
      ? [localStorage.getItem("selectedKeys")]
      : ["51"]
  );

  const onSelect = ({ key }) => {
    setSelectedKeys([key]);
    localStorage.setItem("selectedKeys", [key]);

    if (key === "51") {
      navigate(salonPaths[0].path);
    }
    if (key === "52") {
      navigate(salonPaths[1].path);
    }
    if (key === "31") {
      navigate(comprasPaths[0].path);
    }
    if (key === "32") {
      navigate(comprasPaths[1].path);
    }
    if (key === "33") {
      navigate(comprasPaths[4].path);
    }
    if (key === "34") {
      navigate(comprasPaths[5].path);
    }
    if (key === "35") {
      navigate(comprasPaths[6].path);
    }
    if (key === "36") {
      navigate(comprasPaths[7].path);
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

      const newOpenKeys = openKeys
        // remove repeat key
        .filter((_, index) => index !== repeatIndex)
        // remove current level all child
        .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]);
      setStateOpenKeys(newOpenKeys);
      localStorage.setItem("stateOpenKeys", newOpenKeys);
    } else {
      // close
      setStateOpenKeys(openKeys);
      localStorage.setItem("stateOpenKeys", openKeys);
    }
  };

  return (
    <Menu
      className={`menu-lateral__component-ant ${theme}`}
      mode="inline"
      defaultSelectedKeys={["231"]}
      openKeys={stateOpenKeys}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
      onOpenChange={onOpenChange}
      inlineCollapsed={collapsed}
      items={ITEMS}
      theme={theme === "dark" ? "dark" : "light"}
    />
  );
};

export default MenuAnt;
