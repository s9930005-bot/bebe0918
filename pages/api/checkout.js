import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { cart } = JSON.parse(req.body);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cart.map(item => ({
      price_data: {
        currency: "twd",
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    })),
    mode: "payment",
    success_url: "https://your-site.vercel.app/success",
    cancel_url: "https://your-site.vercel.app/cancel",
  });

  res.json({ url: session.url });
}
