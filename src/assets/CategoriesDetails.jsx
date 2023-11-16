// Define your array for category details

const CategoryDetailsColumns = [
    {
      title: "Category ID",
      dataIndex: "categoryId",
      width: 180,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 200,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 300,
    }
  ];
  
  const categoryDetails = [];
  for (let i = 0; i < 100; i++) { // Assuming a smaller number of categories than products or orders
      categoryDetails.push({
      key: i,
      categoryId: `CAT-${i}`,
      name: `Category ${i}`,
      description: `Description for Category ${i}`
    });
  }

  export { CategoryDetailsColumns, categoryDetails };
  