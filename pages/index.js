import { useState } from "react";

const products = [
  { id: 1, name: "經典蒙奇奇", price: 680 },
  { id: 2, name: "情侶蒙奇奇", price: 1280 }
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart([...cart, { ...p, quantity: 1 }]);
  };

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ cart })
    });
    const data = await res.json();
    window.location = data.url;
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🐒 蒙奇奇專賣店</h1>

      {products.map(p => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>NT$ {p.price}</p>
          <button onClick={() => addToCart(p)}>加入購物車</button>
        </div>
      ))}

      <hr />
      <button onClick={checkout}>前往付款</button>
    </div>
  );
}
