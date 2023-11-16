const UserDataColumns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const userData = [];
for (let i = 0; i < 1000; i++) {
  userData.push({
    key: i,
    name: `Edward King ${i}`,
    age: 20 + (i % 60), // This will cycle ages from 20 to 79
    address: `London, Park Lane no. ${i}`,
  });
}

export { UserDataColumns, userData };
