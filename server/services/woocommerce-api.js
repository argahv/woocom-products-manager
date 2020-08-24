const WooCommerceApi = require("@woocommerce/woocommerce-rest-api").default;
const keys = require("../config/keys");

const wooApi = () => {
  return new WooCommerceApi({
    url: keys.wooUrl,
    consumerKey: keys.wooConsumerKey,
    consumerSecret: keys.wooConsumerSecret,
    version: "wc/v3",
  });
};
module.exports = wooApi;
