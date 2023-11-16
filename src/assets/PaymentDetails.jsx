// Define your array for payment details

const PaymentDetailsColumns = [
  {
    title: "Payment ID",
    dataIndex: "paymentId",
    width: 180,
  },
  {
    title: "Order ID",
    dataIndex: "orderId",
    width: 180,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: 120,
  },
  {
    title: "Date",
    dataIndex: "date",
    width: 150,
  },
  {
    title: "Payment Method",
    dataIndex: "paymentMethod",
    width: 200,
  },
];

const paymentDetails = [];
for (let i = 0; i < 1000; i++) {
  paymentDetails.push({
    key: i,
    paymentId: `PAY-${1000 + i}`,
    orderId: `OD-${1000 + i}`, // Assuming each payment is linked to an order
    amount: (Math.random() * 500).toFixed(2), // Random amount between $0.00 and $500.00
    date: `2023-${Math.floor(Math.random() * 12) + 1}-${
      Math.floor(Math.random() * 28) + 1
    }`, // Random date in 2023
    paymentMethod: `Method ${i % 5}`, // Assuming 5 different payment methods
  });
}

export { PaymentDetailsColumns, paymentDetails };
