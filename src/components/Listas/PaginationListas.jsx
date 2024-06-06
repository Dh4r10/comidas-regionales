import React, { useState } from 'react';
import { ConfigProvider, Pagination } from 'antd';
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
      components: {
        Pagination: {
          borderRadius: "none",
        }
      }
    }}>
      <Pagination
        total={totalItems}
        pageSizeOptions={pageSizeOptions}
        itemRender={itemRender}
        showLessItems={true}
        responsive={false}
        className="p-1"
        onChange={handleChangePage}
      />
    </ConfigProvider>
  );
};
export default Paginationlistas;
