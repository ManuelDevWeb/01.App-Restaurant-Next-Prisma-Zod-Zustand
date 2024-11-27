// Params tiene mucha información, como el path, el query, etc.
const OrderPage = ({ params }: { params: { category: string } }) => {
  console.log(params);
  return <div>OrderPage</div>;
};

export default OrderPage;
