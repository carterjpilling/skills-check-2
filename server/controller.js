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
      .then(newProduct => res.status(200).send(newProduct))
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })

  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    db.delete_product(+id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
  }
}