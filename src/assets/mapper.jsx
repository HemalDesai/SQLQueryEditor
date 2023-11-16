import {
  CategoryDetailsColumns,
  categoryDetails,
} from "./CategoriesDetails.jsx";
import { ProductDetailsColumns, productDetails } from "./ProductDetails.jsx";
import { OrderDetailsColumns, orderDetails } from "./OrderDetails.jsx";
import { OffersDetailsColumns, offersDetails } from "./OfferDetails.jsx";
import { PaymentDetailsColumns, paymentDetails } from "./PaymentDetails.jsx";
import { UserDataColumns, userData } from "./UserDetails.jsx";

const queryCategoriesAndProducts = `
SELECT categoryId, name, description
FROM Categories;
`;

const queryProductsAndOrders = `
SELECT * FROM productDetails;
`;

const queryOrdersAndOffers = `
SELECT * FROM orderDetails;
`;

const queryOffersAndPayments = `
SELECT * FROM offersDetails;
`;

const queryPaymentsAndUserData = `
SELECT * FROM paymentsDetails;
`;

const queryUserDataAndCategories = `
SELECT * FROM userDetails;
`;
function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}

const invertedQueriesMap = {
  [removeSpaces(queryCategoriesAndProducts)]: [
    CategoryDetailsColumns,
    categoryDetails,
  ],
  [removeSpaces(queryProductsAndOrders)]: [
    ProductDetailsColumns,
    productDetails,
  ],
  [removeSpaces(queryOrdersAndOffers)]: [OrderDetailsColumns, orderDetails],
  [removeSpaces(queryOffersAndPayments)]: [OffersDetailsColumns, offersDetails],
  [removeSpaces(queryPaymentsAndUserData)]: [
    PaymentDetailsColumns,
    paymentDetails,
  ],
  [removeSpaces(queryUserDataAndCategories)]: [UserDataColumns, userData],
};

const mapper = ({ query }) => {
  const result = invertedQueriesMap[removeSpaces(query)] || [
    UserDataColumns,
    userData,
  ];
  return result;
};

export default mapper;
