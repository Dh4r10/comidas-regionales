import React, { useContext } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Space, ConfigProvider } from 'antd';
import ThemeContext from '@/contexts/ThemeContext';

import './Filtros.scss'

const InputFiltros = (props) => {

  let { theme } = useContext(ThemeContext)

  const { setFilteringSearch, filteringSearch } = props;

  const handleChange = (e) => {
    setFilteringSearch(e.target.value);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 'none',
        },
        components: {
          Input: {
            colorBorder: theme === "dark" ? "#2E2E2E" : "#E1E1E1",
            colorTextPlaceholder: theme === "dark" ? "#414141" : "#E3E3E3",
          }
        }
      }}
    >
      <Space direction="vertical" size="middle">
        <Space.Compact size="large" className={`input-filtros${theme === "dark" ? "-dark" : ""} w-full min-w-28`}>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Buscar"
            value={filteringSearch}
            onChange={handleChange}
          />
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};
export default InputFiltros;
