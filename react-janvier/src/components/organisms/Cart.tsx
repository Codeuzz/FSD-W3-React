import { useCartStore } from "@store/cartStore";

export const Cart = () => {
  const { removeItem, items, totalPrice, emptyCart, addItem } = useCartStore();

  const fakeItems = [
    {
      id: 1,
      name: "choux fleur",
      price: 2,
    },
    {
      id: 2,
      name: "haricot",
      price: 4,
    },
    {
      id: 3,
      name: "patate",
      price: 6,
    },
  ];

  return (
    <>
      <div>
        <h1>Total : {totalPrice}€</h1>
        {items &&
          items.map((item) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col">
                <h4>{item.name}</h4>
                <p>{item.price}€</p>
              </div>
              <button
                className="border-2 border-red-500 p-1 rounded-2xl"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        <button
          onClick={emptyCart}
          className="hover:cursor-pointer hover:bg-red-200 border-2 border-red-500 p-1 rounded-2xl text-red-600"
        >
          Empty Cart
        </button>
      </div>
      <div>
        <h2>Vegetables</h2>
        <div>
          {fakeItems.map((fakeItem) => (
            <div key={fakeItem.id}>
              <div>
                <h4>{fakeItem.name}</h4>
                <p>{fakeItem.price}€</p>
              </div>
              <button onClick={() => addItem(fakeItem)}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
