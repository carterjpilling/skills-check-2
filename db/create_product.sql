INSERT INTO products 
(name, price, product_img)
VALUES 
(${name}, ${price}, ${product_img})
RETURNING*;