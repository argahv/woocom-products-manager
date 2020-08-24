module.exports = (app, wooApi) => {
  app.get("/api/v1/product-categories-list", async (req, res) => {
    // let data = { ...req.body };
    const query = req.query;
    try {
      const productCategories = await wooApi.get("products/categories");
      let finalCateg = productCategories.data.map((categ) => ({
        id: categ.id,
        name: categ.name,
        parent: categ.parent,
        slug: categ.slug,
      }));
      console.log("finalCateg", finalCateg);
      //   console.log("productCategories", productCategories);
      res.status(200).send(finalCateg);
    } catch (error) {
      console.log("error", error);
      res.status(500).send(error);
    }
  });
};
