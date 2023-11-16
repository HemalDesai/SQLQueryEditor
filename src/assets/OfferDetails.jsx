// Define your array for offers details

const OffersDetailsColumns = [
  {
    title: "Offer ID",
    dataIndex: "offerId",
    width: 180,
  },
  {
    title: "Description",
    dataIndex: "description",
    width: 300,
  },
  {
    title: "Discount",
    dataIndex: "discount",
    width: 120,
  },
  {
    title: "Valid From",
    dataIndex: "validFrom",
    width: 150,
  },
  {
    title: "Valid To",
    dataIndex: "validTo",
    width: 150,
  },
];

const offersDetails = [];
for (let i = 0; i < 1000; i++) {
  offersDetails.push({
    key: i,
    offerId: `OFF-${1000 + i}`,
    description: `Special offer ${i}`,
    discount: `${Math.floor(Math.random() * 50) + 10}%`, // Random discount between 10% and 50%
    validFrom: `2023-01-01`,
    validTo: `2023-12-31`,
  });
}

export { OffersDetailsColumns, offersDetails };
