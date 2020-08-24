module.exports = (app, wooApi) => {
  app.post("/api/v1/product-category-create", async (req, res) => {
    console.log("req.body", req.body);
    let data = { ...req.body };
    try {
      const createdProductCategory = await wooApi.post(
        "products/categories",
        data
      );
      console.log("createdProductCategory", createdProductCategory);
    } catch (error) {
      console.log("error", error);
      res.send(500);
    }
  });
};
