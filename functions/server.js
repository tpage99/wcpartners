// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")("sk_test_NoYFkOVLyowLRBIFBg67PflX00Hj6WISoH")

const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  line_items: [
    {
      price: "price_1HUzTIIhVdwD4jda2HfBMOzN",
      quantity: 1,
    },
    {
      price: "price_1HUzTIIhVdwD4jdaZKLnr4Sg",
      quantity: 1,
    },
  ],
  mode: "payment",
  success_url: "https://example.com/success?session_id={CHECKOUT_SESSION_ID}",
  cancel_url: "https://example.com/cancel",
})
