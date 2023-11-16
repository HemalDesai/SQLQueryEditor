import { Table } from "antd";
// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//   },
// ];
// const data = [];
// for (let i = 0; i < 1000; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: (32-i)%80,
//     address: `London, Park Lane no. ${i}`,
//   });
// }


const DataTable = ({data}) => {
  const result = data
  return (
    <Table
    bordered
    columns={result[0]}
    dataSource={result[1]}
    defaultCurrent={1} total={1000}
    scroll={{
      y: 240,
    }}
  />
  )
}

export default DataTable

