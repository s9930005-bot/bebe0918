import { useState } from "react";
  return (
    <div style={{ fontFamily: "sans-serif", background: "#fafafa" }}>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg,#ffe4e6,#fff)",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: 36 }}>Monchhichi Store</h1>
        <p style={{ color: "#666" }}>療癒系收藏 · 送禮首選</p>
      </div>

      {/* 商品 */}
      <div style={{ padding: 30 }}>
        <h2>熱門商品</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>

          {products.map(p => (
            <div key={p.id} style={{
              background: "white",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}>
              <img src={p.img} style={{ width: "100%", borderRadius: 12 }} />
              <h3>{p.name}</h3>
              <p style={{ color: "#888" }}>NT$ {p.price}</p>

              <button
                onClick={() => addToCart(p)}
                style={{
                  width: "100%",
                  padding: 10,
                  borderRadius: 10,
                  border: "none",
                  background: "black",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                加入購物車
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* 購物車 */}
      <div style={{ padding: 30, background: "#fff" }}>
        <h2>🛒 購物車</h2>

        {cart.length === 0 ? (
          <p style={{ color: "#999" }}>尚未加入商品</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              {item.name} - NT$ {item.price}
            </div>
          ))
        )}

        <button
          onClick={checkout}
          disabled={cart.length === 0}
          style={{
            marginTop: 20,
            padding: 12,
            width: "100%",
            borderRadius: 12,
            border: "none",
            background: cart.length === 0 ? "#ccc" : "#ff4d6d",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          前往結帳
        </button>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: 20, color: "#aaa" }}>
        © 2026 Monchhichi Store
      </div>

    </div>
  );
}
