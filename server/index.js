const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const WooCommerceApi = require("@woocommerce/woocommerce-rest-api").default;
const keys = require("./config/keys");
// use the model first

// require("./services/passport");
//import the services after model

mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const app = express();
app.options("*", cors());

const wooApi = new WooCommerceApi({
  url: keys.wooUrl,
  consumerKey: keys.wooConsumerKey,
  consumerSecret: keys.wooConsumerSecret,
  version: "wc/v3",
});

app.use(fileUpload());
// Parse the request from the client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import Routes here
require("./routes/products/list-products")(app, wooApi);
require("./routes/products/create-product")(app, wooApi);

require("./routes/product-category/list-categories")(app, wooApi);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
