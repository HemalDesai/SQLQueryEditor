// Define your array for product details

const ProductDetailsColumns = [
    {
      title: "Product ID",
      dataIndex: "productId",
      width: 180,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 200,
    },
    {
      title: "Category",
      dataIndex: "category",
      width: 150,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 120,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      width: 120,
    }
  ];
  
  const productDetails = [];
  for (let i = 0; i < 1000; i++) {
      productDetails.push({
      key: i,
      productId: `P-${1000 + i}`,
      name: `Product ${i}`,
      category: `Category ${i % 10}`, // Assuming 10 different categories
      price: (Math.random() * 100).toFixed(2), // Random price between $0.00 and $100.00
      stock: Math.floor(Math.random() * 500) // Random stock quantity up to 500
    });
  }
  
  export { ProductDetailsColumns, productDetails };
  