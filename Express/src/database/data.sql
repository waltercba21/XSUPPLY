# Datos de la tabla Brands
insert into Brands (idbrands, name) values (1, 'Viverra');
insert into Brands (idbrands, name) values (2, 'Vestibulum');
insert into Brands (idbrands, name) values (3, 'Montes');
insert into Brands (idbrands, name) values (4, 'Nascetur');
insert into Brands (idbrands, name) values (5, 'Curabitur');
insert into Brands (idbrands, name) values (6, 'Aliquam');
insert into Brands (idbrands, name) values (7, 'Nulla');
insert into Brands (idbrands, name) values (8, 'Ante');
insert into Brands (idbrands, name) values (9, 'Mollis');
insert into Brands (idbrands, name) values (10, 'Posuere');
insert into Brands (idbrands, name) values (11, 'In Blandit');
insert into Brands (idbrands, name) values (12, 'Nisl');
insert into Brands (idbrands, name) values (13, 'Cubilia');
insert into Brands (idbrands, name) values (14, 'Pharetra');
insert into Brands (idbrands, name) values (15, 'Mattis');

# Datos de la tabla Categories
insert into Categories (idcategories, name) values (1, 'Vitae nisi');
insert into Categories (idcategories, name) values (2, 'Rutrum nulla');
insert into Categories (idcategories, name) values (3, 'Faucibus orci');
insert into Categories (idcategories, name) values (4, 'Mauris viverra');
insert into Categories (idcategories, name) values (5, 'Primis in');
insert into Categories (idcategories, name) values (6, 'Amet erat');
insert into Categories (idcategories, name) values (7, 'Nulla sed');
insert into Categories (idcategories, name) values (8, 'Imperdiet sapien');
insert into Categories (idcategories, name) values (9, 'Fusce lacus');
insert into Categories (idcategories, name) values (10, 'Tellus in sagittis');

# Datos de la tabla Products
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (1, 'Quis', 2, 'Ante ipsum', 80, 100, 98, 1, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'product1.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (2, 'Luctus', 3, 'Purus sit', 82, 110, 56, 8, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'product2.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (3, 'Donec', 1, 'Nulla elit', 70, 87, 16, 2, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'product3.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (4, 'Tincidunt', 2, 'Non sodales', 78, 58, 30, 6, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'product4.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (5, 'Mi nulla ac enim', 9, 'Quisque', 68, 73, 76, 3, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'product5.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (6, 'Hendrerit', 5, 'Nulla nisl nunc', 36, 75, 65, 4, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'product6.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (7, 'Elementum', 1, 'Lectus pellentesque', 40, 180, 18, 5, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'product7.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (8, 'Risus', 7, 'A odio in hac', 53, 250, 95, 7, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'product8.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (9, 'Nascetur', 3, 'Sapien iaculis', 28, 3800, 18, 3, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'product9.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (10, 'Condimentum', 2, 'Vestibulum', 48, 1500, 76, 9, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'product10.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (11, 'Duis', 6, 'Erat tortor', 94, 1980, 16, 5, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'product1.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (12, 'Id nulla', 3, 'Quis orci', 32, 370, 16, 3, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'product2.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (13, 'Id justo', 8, 'Justo morbi', 39, 450, 37, 8, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'product3.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (14, 'Vulputate', 3, 'Nam nulla', 74, 990, 39, 1, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'product4.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (15, 'Libero', 2, 'Sagittis nam', 15, 1300, 44, 5, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'product5.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (16, 'Consequat', 6, 'Ut blandit', 84, 270, 26, 3, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'product6.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (17, 'Turpis', 7, 'Aliquam', 2, 2700, 99, 7, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'product7.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (18, 'Luctus', 7, 'Quisque', 34, 750, 43, 5, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'product8.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (19, 'Lacinia nisi', 9, 'Pellentesque', 15, 990, 58, 5, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'product9.png');
insert into Products (idproducts, name, brand_id, taste, weight, price, quantity, category_id, utility, purpose, image) values (20, 'At velit', 6, 'Suscipit', 30, 2200, 85, 8, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'product10.png');

# Datos de la tabla Users
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (1, 'Mattheus', 'Venditto', 'mvenditto0@sourceforge.net', '048 Nevada Circle', '808-551-2993', 'FJ01fd6Zl4W', 'user1.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (2, 'Artemis', 'Essberger', 'aessberger1@walmart.com', '715 Cardinal Center', '765-774-4335', 'bjS86d2g', 'user2.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (3, 'Clarance', 'Lathbury', 'clathbury2@reference.com', '77113 Bay Street', '659-805-8107', 'qkbTUfl', 'user3.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (4, 'Kippar', 'Tennet', 'ktennet3@theglobeandmail.com', '10 Jenna Hill', '408-627-2624', 'QZwDKaHs4ND6', 'user4.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (5, 'Cooper', 'Maydway', 'cmaydway4@phoca.cz', '59 Pine View Point', '830-883-1398', 'eBk4ipLBh', 'user5.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (6, 'Maribeth', 'Tanslie', 'mtanslie5@addthis.com', '62 Troy Road', '730-507-8215', 'eAJPcKDk5M', 'user6.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (7, 'Ruperto', 'Castello', 'rcastello6@wikispaces.com', '7 Acker Place', '573-434-6940', 'V8roxmN', 'user7.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (8, 'Kandace', 'Alywen', 'kalywen7@live.com', '2 Lukken Center', '255-343-8967', 'PlH7fv', 'user8.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (9, 'Carrie', 'Feasley', 'cfeasley8@springer.com', '382 Eagle Crest Court', '260-515-6313', '7UzDp1P', 'user9.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (10, 'Egon', 'Itzkin', 'eitzkin9@storify.com', '5113 Namekagon Parkway', '354-529-6314', 'PEANLwEk35Gz', 'user1.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (11, 'Veronique', 'Rolinson', 'vrolinsona@godaddy.com', '26898 Stang Circle', '905-261-5187', 'e7rWc9Ma', 'user2.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (12, 'Lela', 'Mundell', 'lmundellb@yandex.ru', '67 School Circle', '206-509-1354', 'GAPwenmo5', 'user3.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (13, 'Monique', 'Vasyukov', 'mvasyukovc@intel.com', '3972 Dorton Crossing', '822-517-1836', 'siEVk0', 'user4.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (14, 'Jeremiah', 'Courtman', 'jcourtmand@stumbleupon.com', '71926 Amoth Street', '683-221-8678', 'Dc5QkSRedF9', 'user5.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (15, 'Dorine', 'Thwaites', 'dthwaitese@i2i.jp', '68 Vahlen Avenue', '921-139-6998', '7dR8dugT4fX', 'user6.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (16, 'Darsey', 'Mogra', 'dmograf@dyndns.org', '0317 Northridge Hill', '223-326-4439', 'dM1BixfEX7', 'user7.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (17, 'Valerye', 'Rait', 'vraitg@live.com', '92 Garrison Crossing', '526-235-5093', 'QcqY4rIQ', 'user8.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (18, 'Kirk', 'Yardley', 'kyardleyh@webnode.com', '385 Del Mar Circle', '894-699-2618', 'om6tAgg', 'user9.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (19, 'Durante', 'McLaine', 'dmclainei@narod.ru', '25099 Longview Hill', '346-790-3231', 'khr6wf', 'user1.jpg');
insert into Users (idusers, name, lastname, email, address, phone, password, image) values (20, 'Bengt', 'Gallally', 'bgallallyj@plala.or.jp', '819 Independence Point', '119-520-1860', 'aUdyHeOOG10F', 'user2.jpg');

# Datos de la tabla Orders
insert into Orders (idorders, user_id, amount , date, status) values (1, 2, 53, '2021-07-11', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (2, 8, 46, '2021-08-03', 'Rejected');
insert into Orders (idorders, user_id, amount , date, status) values (3, 2, 13, '2022-06-07', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (4, 3, 6, '2022-05-05', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (5, 13, 35, '2022-02-18', 'Aceptedm');
insert into Orders (idorders, user_id, amount , date, status) values (6, 5, 64, '2022-06-28', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (7, 19, 71, '2021-11-17', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (8, 8, 68, '2022-02-07', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (9, 1, 97, '2021-12-25', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (10, 7, 22, '2022-01-02', 'Rejected');
insert into Orders (idorders, user_id, amount , date, status) values (11, 9, 29, '2022-04-03', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (12, 18, 54, '2021-08-21', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (13, 7, 18, '2021-07-25', 'Acepteds');
insert into Orders (idorders, user_id, amount , date, status) values (14, 8, 48, '2021-11-23', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (15, 3, 60, '2022-02-16', 'Rejected');
insert into Orders (idorders, user_id, amount , date, status) values (16, 9, 2, '2022-04-28', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (17, 4, 49, '2022-02-04', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (18, 9, 82, '2022-05-14', 'Rejected');
insert into Orders (idorders, user_id, amount , date, status) values (19, 2, 72, '2022-03-20', 'Acepted');
insert into Orders (idorders, user_id, amount , date, status) values (20, 6, 63, '2022-05-08', 'Rejected');

# Datos de la tabla Orders_details
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (1, 6, 1, '0.79', 29);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (2, 9, 8, '6.17', 99);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (3, 5, 9, '5.11', 28);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (4, 4, 6, '7.26', 8);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (5, 3, 7, '7.29', 34);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (6, 9, 3, '4.22', 53);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (7, 5, 6, '6.95', 12);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (8, 9, 6, '6.47', 79);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (9, 4, 1, '1.33', 47);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (10, 6, 9, '1.59', 42);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (11, 6, 4, '6.57', 55);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (12, 2, 7, '7.66', 16);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (13, 5, 5, '8.61', 17);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (14, 5, 6, '0.56', 38);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (15, 6, 8, '1.53', 85);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (16, 7, 1, '2.81', 20);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (17, 1, 4, '2.42', 15);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (18, 4, 2, '8.51', 23);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (19, 9, 3, '4.60', 55);
insert into Order_details (idorder_details, order_id, product_id, price, quantity) values (20, 8, 1, '6.84', 78);