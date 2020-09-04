module.exports = {
  getAllProducts: (req, res) => {
    const db = req.app.get('db')
    db.get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => res.status(500).send(err))
  },
  addProducts: (req, res) => {
    const db = req.app.get('db')
    const product = { ...req.body }
    db.create_product(product)
      .then(() => res.status(200))
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })

  }
}