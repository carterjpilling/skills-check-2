module.exports = {
  getAllProducts: (req, res) => {
    const db = req.app.get('db')
    db.get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => res.status(500).send(err))
  }
}