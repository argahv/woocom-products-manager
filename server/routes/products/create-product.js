module.exports = (app, wooApi) => {
  app.post("/api/v1/product-create", async (req, res) => {
    console.log("req.body", req.body);
    let data = { ...req.body };
    try {
      const createdProduct = await wooApi.post("products", data);
      console.log("createdProduct", createdProduct);
    } catch (error) {
      console.log("error", error);
      res.send(500);
    }
  });
};
