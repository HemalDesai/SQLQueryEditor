// Define your array

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
    age: (32 - i) % 80,
    address: `London, Park Lane no. ${i}`,
  });
}

// Export the array
export { UserDataColumns, userData }; // for default export
// or
// for named export
