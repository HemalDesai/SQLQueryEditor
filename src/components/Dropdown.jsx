import { Select } from "antd";
const SQLDropdown = ({ setQuery }) => {
  const handleChange = (e) => {
    console.log(e);
    setQuery(e);
  };
  return (
    <Select
      showSearch
      style={{
        width: 200,
      }}
      onChange={handleChange}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={[
        {
          value: `SELECT * FROM userDetails;`,
          label: "Query for users",
        },
        {
          value: `SELECT * FROM productDetails;`,
          label: "Query for products",
        },
        {
          value: `SELECT * FROM paymentsDetails;`,
          label: "Query for payments",
        },
        {
          value: `SELECT * FROM orderDetails;`,
          label: "Query for orders",
        },
        {
          value: `SELECT * FROM offersDetails;`,
          label: "Query for offers",
        },
        {
          value: `SELECT categoryId, name, description
          FROM Categories;`,
          label: "Query for categories",
        },
      ]}
    />
  );
};
export default SQLDropdown;
