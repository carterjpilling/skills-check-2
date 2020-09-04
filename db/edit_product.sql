UPDATE products
SET name = $2,
    price = $3,
    product_img=$4
WHERE id = $1