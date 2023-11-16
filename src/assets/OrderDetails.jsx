// Define your array for order details

const OrderDetailsColumns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      width: 180,
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      width: 200,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: 120,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 120,
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      width: 200,
    }
  ];
  
  const orderDetails = [];
  for (let i = 0; i < 1000; i++) {
      orderDetails.push({
      key: i,
      orderId: `OD-${1000 + i}`,
      productName: `Product ${i}`,
      quantity: Math.floor(Math.random() * 10) + 1, // Random quantity between 1 and 10
      price: (Math.random() * 100).toFixed(2), // Random price between $0.00 and $100.00
      customerName: `Customer ${i}`
    });
  }
  
  export { OrderDetailsColumns, orderDetails };
  