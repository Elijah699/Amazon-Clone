const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HgiYIBEpbZ6hyFmrToCgM1HxWgQsflrsNSwZ2Y2L7UTFc0Q9J96C0vkGyZs241MYBRP8PyaWZX1VfpOEw6US2tj00rpM9WA1R"
);

//API

//APP config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //Subunits of the currency
    currency: "usd",
  });

  //OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/clone-d223e/us-central1/api
