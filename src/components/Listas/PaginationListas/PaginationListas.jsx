import React, { useContext, useState } from 'react';
import { ConfigProvider, Pagination } from 'antd';

import './PaginationListas.scss'
import ThemeContext from '@/contexts/ThemeContext';

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
const Paginationlistas = (props) => {

  let { theme } = useContext(ThemeContext)

  const { table, totalItems, pageSizeOptions } = props;

  const handleChangePage = (page, pageSize) => {
    const newPage = page ? Number(page) - 1 : 0;

    table.setPageIndex(newPage);
    table.setPageSize(Number(pageSize));
    console.log(pageSize);
    console.log(page);
  };

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
          controlItemBgHover: theme === "dark" ? "#2E2E2E" : "#ECECEC"
        }
      }
    }}>
      <Pagination
        total={totalItems}
        pageSizeOptions={pageSizeOptions}
        itemRender={itemRender}
        showLessItems={true}
        responsive={false}
        className={`${theme === "dark" ? "ant-pagination-dark" : ""} p-1`}
        onChange={handleChangePage}
      />
    </ConfigProvider>
  );
};
export default Paginationlistas;
