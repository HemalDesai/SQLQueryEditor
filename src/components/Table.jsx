import { Table } from "antd";

const DataTable = ({ data }) => {
  const result = data;
  return (
    <Table
      bordered
      columns={result[0]}
      dataSource={result[1]}
      defaultCurrent={1}
      total={1000}
      scroll={{
        y: 240,
      }}
    />
  );
};

export default DataTable;
