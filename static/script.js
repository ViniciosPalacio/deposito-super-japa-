// BANCO DE DADOS COMPLETO - SINCRONIZADO E PREPARADO PARA TRAVAS DE ESTOQUE
const produtos = [
  {id: 1, cat: "Cervejas", nome: "Brahma Latão 473ml", preco: 5.50, pack: {nome: "Caixa c/ 12", preco: 66.00}, destaque: true},
  {id: 2, cat: "Cervejas", nome: "Antarctica Latão 473ml", preco: 5.50, pack: {nome: "Caixa c/ 12", preco: 66.00}},
  {id: 3, cat: "Cervejas", nome: "Corona Latão 473ml", preco: 7.50, pack: {nome: "Caixa c/ 12", preco: 90.00}, destaque: true},
  {id: 4, cat: "Cervejas", nome: "Budweiser Latão 473ml", preco: 6.50, pack: {nome: "Caixa c/ 12", preco: 78.00}},
  {id: 5, cat: "Cervejas", nome: "Spaten Latão 473ml", preco: 6.50, pack: {nome: "Caixa c/ 12", preco: 78.00}, destaque: true},
  {id: 6, cat: "Cervejas", nome: "Original Latão 473ml", preco: 6.50, pack: {nome: "Caixa c/ 12", preco: 78.00}},
  {id: 7, cat: "Cervejas", nome: "Stella Artois Latão 473ml", preco: 7.50, pack: {nome: "Caixa c/ 12", preco: 90.00}},
  {id: 8, cat: "Cervejas", nome: "Heineken Latão 473ml", preco: 7.00, pack: {nome: "Caixa c/ 12", preco: 84.00}, destaque: true},
  {id: 9, cat: "Cervejas", nome: "Amstel Latão 473ml", preco: 5.50, pack: {nome: "Caixa c/ 12", preco: 66.00}},
  {id: 10, cat: "Cervejas", nome: "Império Latão 473ml", preco: 5.00, pack: {nome: "Caixa c/ 12", preco: 60.00}},
  {id: 11, cat: "Cervejas", nome: "Itaipava Latão 473ml", preco: 4.50, pack: {nome: "Caixa c/ 12", preco: 54.00}},
  {id: 12, cat: "Cervejas", nome: "Lokal Latão 473ml", preco: 4.00, pack: {nome: "Caixa c/ 12", preco: 48.00}},
  {id: 13, cat: "Cervejas", nome: "Corona Long Neck 330ml", preco: 8.50, pack: {nome: "Pack c/ 6", preco: 51.00}, destaque: true},
  {id: 14, cat: "Cervejas", nome: "Budweiser Long Neck 330ml", preco: 7.50, pack: {nome: "Pack c/ 6", preco: 45.00}},
  {id: 15, cat: "Cervejas", nome: "Spaten Long Neck 330ml", preco: 7.50, pack: {nome: "Pack c/ 6", preco: 45.00}},
  {id: 16, cat: "Cervejas", nome: "Stella Pure Gold 330ml", preco: 8.00, pack: {nome: "Pack c/ 6", preco: 48.00}},
  {id: 17, cat: "Cervejas", nome: "Stella Puro Malte 330ml", preco: 8.00, pack: {nome: "Pack c/ 6", preco: 48.00}},
  {id: 18, cat: "Cervejas", nome: "Heineken Long Neck 330ml", preco: 8.00, pack: {nome: "Pack c/ 6", preco: 48.00}, destaque: true},
  {id: 19, cat: "Cervejas", nome: "Império Lager Long Neck 330ml", preco: 6.50, pack: {nome: "Pack c/ 6", preco: 78.00}},
  {id: 20, cat: "Cervejas", nome: "Império Gold Long Neck 330ml", preco: 6.00, pack: {nome: "Pack c/ 6", preco: 108.00}},
  {id: 21, cat: "Cervejas", nome: "Império Ultra Long Neck 330ml", preco: 7.00, pack: {nome: "Pack c/ 6", preco: 84.00}},
  {id: 22, cat: "Cervejas", nome: "Brahma Cracudinha 300ml", preco: 3.50, pack: {nome: "Caixa c/ 24", preco: 80.50}},
  {id: 23, cat: "Cervejas", nome: "Antarctica Cracudinha 300ml", preco: 3.50, pack: {nome: "Caixa c/ 24", preco: 80.50}},
  {id: 24, cat: "Cervejas", nome: "Original Cracudinha 300ml", preco: 3.50, pack: {nome: "Caixa c/ 24", preco: 80.50}},
  {id: 25, cat: "Cervejas", nome: "Brahma Zero Álcool Lata", preco: 5.00, pack: {nome: "Caixa c/ 12", preco: 60.00}},
  {id: 26, cat: "Cervejas", nome: "Heineken Zero Long Neck 330ml", preco: 8.00, pack: {nome: "Pack c/ 6", preco: 48.00}},
  {id: 27, cat: "Destilados", nome: "Vodka Absolut 750ml", preco: 85.00, destaque: true},
  {id: 28, cat: "Destilados", nome: "Vodka Smirnoff 900ml", preco: 40.00, destaque: true},
  {id: 29, cat: "Destilados", nome: "Vodka Kovak 1L", preco: 26.00},
  {id: 30, cat: "Destilados", nome: "Vodka Leonoff 900ml", preco: 20.00},
  {id: 31, cat: "Destilados", nome: "Gin Okay Dry 900ml", preco: 25.00},
  {id: 32, cat: "Destilados", nome: "Gin Leonoff Dry 900ml", preco: 30.00},
  {id: 33, cat: "Destilados", nome: "Gin Leonoff Purple Fresh 900ml", preco: 30.00},
  {id: 34, cat: "Destilados", nome: "Gin Leonoff Watermelon 900ml", preco: 30.00},
  {id: 35, cat: "Destilados", nome: "Gin Leonoff Pineberry 900ml", preco: 30.00},
  {id: 36, cat: "Destilados", nome: "Gin Rocks Tradicional 1L", preco: 35.00, destaque: true},
  {id: 37, cat: "Destilados", nome: "Gin Rocks Sicilians Lemon 1L", preco: 35.00},
  {id: 38, cat: "Destilados", nome: "Gin Rocks Strawberry 1L", preco: 35.00},
  {id: 39, cat: "Destilados", nome: "Gin Rocks Watermelon 1L", preco: 35.00},
  {id: 40, cat: "Destilados", nome: "Gin Rocks Sunset 1L", preco: 35.00},
  {id: 41, cat: "Destilados", nome: "Gin QN Tradicional 900ml", preco: 28.00},
  {id: 42, cat: "Destilados", nome: "Gin QN Melancia 900ml", preco: 28.00},
  {id: 43, cat: "Destilados", nome: "Gin QN Maçã Verde 900ml", preco: 28.00},
  {id: 44, cat: "Destilados", nome: "Gin QN Tropical 900ml", preco: 28.00},
  {id: 45, cat: "Destilados", nome: "Gin QN Strawberry 900ml", preco: 28.00},
  {id: 46, cat: "Destilados", nome: "Gin Tônica QN Frutas Vermelhas 355ml", preco: 9.00},
  {id: 47, cat: "Destilados", nome: "Gin Tônica QN Melancia 355ml", preco: 9.00},
  {id: 48, cat: "Destilados", nome: "Gin Tônica QN Maçã Verde 355ml", preco: 9.00},
  {id: 49, cat: "Destilados", nome: "Gin Tônica Amora 355ml", preco: 9.00},
  {id: 50, cat: "Destilados", nome: "Gin Tônica QN Pitaya 355ml", preco: 9.00},
  {id: 51, cat: "Destilados", nome: "Gin Tônica QN Tangerina 355ml", preco: 9.00},
  {id: 52, cat: "Destilados", nome: "Gin Tônica QN Pink Lemonade 355ml", preco: 9.00},
  {id: 53, cat: "Destilados", nome: "Skol Beats Senses Lata", preco: 7.00, destaque: true},
  {id: 54, cat: "Destilados", nome: "Skol Beats GT Lata", preco: 7.50},
  {id: 55, cat: "Destilados", nome: "Skol Beats Red Mix Lata", preco: 7.00},
  {id: 56, cat: "Destilados", nome: "Skol Beats Red Mix Long Neck", preco: 10.00},
  {id: 57, cat: "Destilados", nome: "Ice Cabaré Frutas Vermelhas", preco: 8.50},
  {id: 58, cat: "Destilados", nome: "Ice 51 Balada", preco: 7.00},
  {id: 59, cat: "Destilados", nome: "Ice 51 Limão", preco: 7.00, pack: {nome: "Caixa c/ 24", preco: 108.00}},
  {id: 60, cat: "Destilados", nome: "Ice Kovak Limão", preco: 6.00, pack: {nome: "Caixa c/ 24", preco: 88.00}},
  {id: 61, cat: "Destilados", nome: "Ice Smirnoff Lions Limão", preco: 8.00, pack: {nome: "Caixa c/ 24", preco: 145.00}},
  {id: 62, cat: "Destilados", nome: "Ice Syn Limão Long Neck", preco: 6.00},
  {id: 63, cat: "Destilados", nome: "Ice Syn Limão Plástico", preco: 4.00},
  {id: 64, cat: "Destilados", nome: "Ice We Mix Morango e Kiwi", preco: 5.00},
  {id: 65, cat: "Destilados", nome: "Ice We Mix Pêssego c/ Chá Preto", preco: 5.00},
  {id: 66, cat: "Destilados", nome: "Ice We Mix Frutas Verdes c/ Chá Verde", preco: 5.00},
  {id: 67, cat: "Destilados", nome: "Ice We Mix Limão e Gengibre", preco: 5.00},
  {id: 68, cat: "Destilados", nome: "Ice We Mix Melancia e Hortelã", preco: 5.00},
  {id: 69, cat: "Destilados", nome: "Pink Moon Rosé 275ml", preco: 6.50},
  {id: 70, cat: "Destilados", nome: "Pink Moon Rosé 750ml", preco: 20.00},
  {id: 71, cat: "Destilados", nome: "Pink Moon Pêssego 275ml", preco: 6.50},
  {id: 72, cat: "Destilados", nome: "Pink Moon Uva 275ml", preco: 6.50},
  {id: 73, cat: "Destilados", nome: "Pink Moon Uva 600ml", preco: 10.00},
  {id: 74, cat: "Destilados", nome: "Stempel Uva 600ml", preco: 16.00},
  {id: 75, cat: "Destilados", nome: "Stempel Abacaxi 600ml", preco: 16.00},
  {id: 76, cat: "Destilados", nome: "Stempel Rosé 600ml", preco: 16.00},
  {id: 77, cat: "Destilados", nome: "Whisky Ballantines 1L", preco: 85.00},
  {id: 78, cat: "Destilados", nome: "Whisky Ballantines 750ml", preco: 75.00},
  {id: 79, cat: "Destilados", nome: "Whisky Cavalo Branco 1L", preco: 75.00, destaque: true},
  {id: 80, cat: "Destilados", nome: "Whisky Cavalo Branco 500ml", preco: 45.00},
  {id: 81, cat: "Destilados", nome: "Whisky Red Label 1L", preco: 95.00, destaque: true},
  {id: 82, cat: "Destilados", nome: "Whisky Red Label 750ml", preco: 85.00},
  {id: 83, cat: "Destilados", nome: "Whisky Jack Daniels Maçã Verde 1L", preco: 180.00},
  {id: 84, cat: "Destilados", nome: "Whisky Jack Daniels Tradicional 1L", preco: 160.00, destaque: true},
  {id: 85, cat: "Destilados", nome: "Whisky Jack Daniels Fire 1L", preco: 160.00},
  {id: 86, cat: "Destilados", nome: "Whisky Buchanan's 12 Anos 1L", preco: 220.00},
  {id: 87, cat: "Destilados", nome: "Whisky Buchanan's 12 Anos 750ml", preco: 180.00},
  {id: 88, cat: "Destilados", nome: "Whisky Old Parr 1L", preco: 160.00},
  {id: 89, cat: "Destilados", nome: "Whisky Woodford Reserve 750ml", preco: 180.00},
  {id: 90, cat: "Destilados", nome: "Licor 43 Edição Especial", preco: 220.00},
  {id: 91, cat: "Destilados", nome: "Licor Baileys 50ml", preco: 10.00},
  {id: 92, cat: "Destilados", nome: "Licor Bananinha Reggiane", preco: 22.00},
  {id: 93, cat: "Destilados", nome: "Licor Amarula 750ml", preco: 165.00},
  {id: 94, cat: "Destilados", nome: "Cachaça da Roça Menta", preco: 20.00},
  {id: 95, cat: "Destilados", nome: "Cachaça da Roça Paçoquita", preco: 20.00},
  {id: 96, cat: "Destilados", nome: "Cachaça Praianinha 970ml", preco: 16.00},
  {id: 97, cat: "Destilados", nome: "Pytu Amarelinha", preco: 25.00},
  {id: 98, cat: "Destilados", nome: "Pytu Limão", preco: 25.00},
  {id: 99, cat: "Destilados", nome: "Cachaça 51 1L", preco: 15.00},
  {id: 100, cat: "Destilados", nome: "Cachaça Velho Barreiro 1L", preco: 18.00},
  {id: 101, cat: "Destilados", nome: "Barrigudinha", preco: 7.00},
  {id: 102, cat: "Destilados", nome: "Caninha da Roça", preco: 6.00},
  {id: 103, cat: "Destilados", nome: "Vinho Pérgola Suave 1L", preco: 25.00, pack: {nome: "Caixa c/ 4", preco: 71.96}},
  {id: 104, cat: "Destilados", nome: "Vinho Galiotto Suave 1L", preco: 25.00, pack: {nome: "Caixa c/ 4", preco: 71.96}},
  {id: 105, cat: "Destilados", nome: "Vinho Casa Rodrigues Suave 1L", preco: 25.00},
  {id: 106, cat: "Destilados", nome: "Vinho Casa Rodrigues Seco 1L", preco: 25.00},
  {id: 107, cat: "Destilados", nome: "Vinho Colorado Suave 1L", preco: 30.00},
  {id: 108, cat: "Destilados", nome: "Vinho Colorado Seco 1L", preco: 30.00},
  {id: 109, cat: "Destilados", nome: "Combo QN Sunshine Whisky Trad.", preco: 16.50},
  {id: 110, cat: "Destilados", nome: "Combo QN Sunshine Whisky c/ Coco", preco: 16.50},
  {id: 111, cat: "Destilados", nome: "Combo QN Sunshine Vodka c/ Manga", preco: 16.50},
  {id: 112, cat: "Destilados", nome: "Combo QN Sunshine Gin c/ Melancia", preco: 16.50},
  {id: 113, cat: "Energéticos", nome: "QN Melancia 2L", preco: 10.00},
  {id: 114, cat: "Energéticos", nome: "QN Maçã Verde 2L", preco: 10.00},
  {id: 115, cat: "Energéticos", nome: "Red Hot 2L Tradicional", preco: 10.00},
  {id: 116, cat: "Energéticos", nome: "Minotauro 2L", preco: 10.00, pack: {nome: "Fardo c/ 6", preco: 36.00}},
  {id: 117, cat: "Energéticos", nome: "Baly Tradicional 2L", preco: 13.00, pack: {nome: "Fardo c/ 6", preco: 49.00}, destaque: true},
  {id: 118, cat: "Energéticos", nome: "Baly Maçã Verde 2L", preco: 13.00},
  {id: 119, cat: "Energéticos", nome: "Baly Melancia 2L", preco: 13.00, pack: {nome: "Fardo c/ 6", preco: 49.00}},
  {id: 120, cat: "Energéticos", nome: "Baly Tadala 2L", preco: 13.00},
  {id: 121, cat: "Energéticos", nome: "Baly Tropical 2L", preco: 13.00},
  {id: 122, cat: "Energéticos", nome: "One 2L", preco: 7.00},
  {id: 123, cat: "Energéticos", nome: "Red Bull Tradicional", preco: 10.00, pack: {nome: "Caixa c/ 24", preco: 165.00}, destaque: true},
  {id: 124, cat: "Energéticos", nome: "Red Bull Tropical", preco: 10.00, pack: {nome: "Pack c/ 6", preco: 36.00}},
  {id: 125, cat: "Energéticos", nome: "Monster Tradicional", preco: 12.00, destaque: true},
  {id: 126, cat: "Energéticos", nome: "Monster Manga", preco: 12.00},
  {id: 127, cat: "Refrigerantes", nome: "Sukita Uva 2L", preco: 8.00},
  {id: 128, cat: "Refrigerantes", nome: "Sukita Laranja 2L", preco: 8.00},
  {id: 129, cat: "Refrigerantes", nome: "Coca-Cola 2L", preco: 12.00, pack: {nome: "Fardo c/ 6", preco: 53.00}, destaque: true},
  {id: 130, cat: "Refrigerantes", nome: "Coca-Cola Retornável 2L", preco: 8.00, pack: {nome: "Caixa c/ 12", preco: 75.00}},
  {id: 131, cat: "Refrigerantes", nome: "Limoneto H2OH 1,5L", preco: 9.00},
  {id: 132, cat: "Refrigerantes", nome: "Mineirinho 2L", preco: 10.00, pack: {nome: "Fardo c/ 6", preco: 39.00}},
  {id: 133, cat: "Refrigerantes", nome: "Guaraná Antarctica 2L", preco: 12.00, destaque: true},
  {id: 134, cat: "Refrigerantes", nome: "Grapete 2L", preco: 9.50},
  {id: 135, cat: "Refrigerantes", nome: "Flexa Cola 2L", preco: 7.00},
  {id: 136, cat: "Refrigerantes", nome: "Flexa Laranja 2L", preco: 7.00},
  {id: 137, cat: "Refrigerantes", nome: "Flexa Uva 2L", preco: 7.00},
  {id: 138, cat: "Refrigerantes", nome: "Flexa Guaraná 2L", preco: 7.00},
  {id: 139, cat: "Refrigerantes", nome: "Coca-Cola Lata 350ml", preco: 5.50, pack: {nome: "Pack c/ 12", preco: 39.00}},
  {id: 140, cat: "Refrigerantes", nome: "Guaraná Antarctica Lata 350ml", preco: 5.50, pack: {nome: "Pack c/ 12", preco: 32.00}},
  {id: 141, cat: "Refrigerantes", nome: "Gatorade Laranja 500ml", preco: 7.00},
  {id: 142, cat: "Refrigerantes", nome: "Gatorade Blueberry 500ml", preco: 7.00},
  {id: 143, cat: "Refrigerantes", nome: "Gatorade Uva 500ml", preco: 7.00, pack: {nome: "Pack c/ 6", preco: 26.00}},
  {id: 144, cat: "Refrigerantes", nome: "Gatorade Morango 500ml", preco: 7.00, pack: {nome: "Pack c/ 6", preco: 26.00}},
  {id: 145, cat: "Refrigerantes", nome: "Água Saborizada Maçã Verde", preco: 4.00},
  {id: 146, cat: "Refrigerantes", nome: "Água Saborizada Tangerina", preco: 4.00},
  {id: 147, cat: "Refrigerantes", nome: "Água Saborizada Limão", preco: 4.00},
  {id: 148, cat: "Refrigerantes", nome: "Água Mineral S/ Gás 510ml", preco: 3.00},
  {id: 149, cat: "Refrigerantes", nome: "Água Mineral C/ Gás 510ml", preco: 3.50},
  {id: 150, cat: "Refrigerantes", nome: "Água Mineral S/ Gás 1,5L", preco: 5.00},
  {id: 151, cat: "Refrigerantes", nome: "Água Mineral C/ Gás 1,5L", preco: 7.00},
  {id: 152, cat: "Refrigerantes", nome: "Pirakids", preco: 2.50},
  {id: 153, cat: "Refrigerantes", nome: "Toddynho", preco: 3.50},
  {id: 154, cat: "Refrigerantes", nome: "Limoneto H2OH 500ml", preco: 5.50, pack: {nome: "Pack c/ 12", preco: 44.00}},
  {id: 155, cat: "Refrigerantes", nome: "Guaravita 290ml", preco: 2.50, pack: {nome: "Caixa c/ 24", preco: 21.36}},
  {id: 156, cat: "Refrigerantes", nome: "Guaraplus 290ml", preco: 2.50},
  {id: 157, cat: "Água", nome: "Galão Cascataí 20L", preco: 13.00},
  {id: 158, cat: "Água", nome: "Galão Serra 20L", preco: 10.00},
  {id: 159, cat: "Gelo/Carvão", nome: "Gelo Filtrado 5kg", preco: 15.00, destaque: true},
  {id: 160, cat: "Gelo/Carvão", nome: "Gelo Escama 20kg", preco: 30.00},
  {id: 161, cat: "Gelo/Carvão", nome: "Gelo de Coco Verde", preco: 4.00, pack: {nome: "Caixa c/ 24", preco: 32.00}, destaque: true},
  {id: 162, cat: "Gelo/Carvão", nome: "Gelo de Coco Maçã Verde", preco: 4.00},
  {id: 163, cat: "Gelo/Carvão", nome: "Gelo de Coco Melancia", preco: 4.00, pack: {nome: "Caixa c/ 24", preco: 32.00}},
  {id: 164, cat: "Gelo/Carvão", nome: "Gelo de Coco Maracujá", preco: 4.00, pack: {nome: "Caixa c/ 24", preco: 30.83}},
  {id: 165, cat: "Gelo/Carvão", nome: "Gelo de Coco Morango", preco: 4.00, pack: {nome: "Caixa c/ 24", preco: 30.83}},
  {id: 166, cat: "Gelo/Carvão", nome: "Carvão Frigogil 2kg", preco: 12.00, destaque: true},
  {id: 167, cat: "Gelo/Carvão", nome: "Carvão Oliveira 2kg", preco: 15.00},
  {id: 168, cat: "Gelo/Carvão", nome: "Carvão Araruama 2,4kg", preco: 17.00},
  {id: 169, cat: "Gelo/Carvão", nome: "Carvão Araruama 5,5kg", preco: 35.00},
  {id: 170, cat: "Churrasco", nome: "Sal Grosso", preco: 5.00},
  {id: 171, cat: "Churrasco", nome: "Sal Parrilla Argentino 1kg", preco: 12.00},
  {id: 172, cat: "Churrasco", nome: "Sal Parrilla Chimichurri 1kg", preco: 12.00},
  {id: 173, cat: "Churrasco", nome: "Sal Parrilla Lemon Pepper 250g", preco: 7.00},
  {id: 174, cat: "Churrasco", nome: "Sal Parrilla Argentino 250g", preco: 7.00},
  {id: 175, cat: "Churrasco", nome: "Sal Parrilla Chimichurri 250g", preco: 7.00},
  {id: 176, cat: "Churrasco", nome: "Sal Parrilla Defumado 250g", preco: 7.00},
  {id: 177, cat: "Churrasco", nome: "Pasta Pão de Alho Bacon 500g", preco: 15.00},
  {id: 178, cat: "Churrasco", nome: "Pasta Pão de Alho Queijo 500g", preco: 15.00},
  {id: 179, cat: "Churrasco", nome: "Pasta Pão de Alho Trad. 500g", preco: 15.00, destaque: true},
  {id: 180, cat: "Churrasco", nome: "Molho Churrasco e Grelhado", preco: 8.00},
  {id: 181, cat: "Churrasco", nome: "Molho Alho", preco: 8.00},
  {id: 182, cat: "Churrasco", nome: "Molho Pimenta Vulcão", preco: 8.00},
  {id: 183, cat: "Churrasco", nome: "Molho Pimenta Biquinho", preco: 8.00},
  {id: 184, cat: "Churrasco", nome: "Farofa Picanha", preco: 8.00},
  {id: 185, cat: "Churrasco", nome: "Farofa Tradicional", preco: 8.00},
  {id: 186, cat: "Churrasco", nome: "Farofa Costelinha", preco: 8.00},
  {id: 187, cat: "Churrasco", nome: "Tempero Completo Churrasco", preco: 8.00},
];

const CATS_EXCLUIDAS = ["Doces", "Petiscos", "Tabacaria"];
const catsUnicas = [...new Set(produtos.map(p => p.cat))].filter(c => !CATS_EXCLUIDAS.includes(c));
const cats = ["Destaques", ...catsUnicas];

let catAtiva = "Destaques";
let carrinho = {}; 
let pagamento = "";
let coords = null;

function normalizarTexto(txt) {
  return txt.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "");
}

// --- CONTROLE DO MENU LATERAL (SIDEBAR) ---
function abrirMenuSanduiche() {
  document.getElementById("sidebar-overlay").classList.remove("hidden");
}

function fecharMenuSanduiche(e) {
  if (!e || e.target === document.getElementById("sidebar-overlay")) {
    document.getElementById("sidebar-overlay").classList.add("hidden");
  }
}

function irParaMapa() {
  fecharMenuSanduiche();
  const mapa = document.querySelector('.store-location');
  if (mapa) {
    mapa.scrollIntoView({ behavior: 'smooth' });
  }
}

// --- AUTOCOMPLETE DA PESQUISA COM TRAVA DE ESTOQUE ---
function iniciarAutocomplete() {
  const input = document.getElementById("searchBar");
  const wrapper = input.parentElement;

  const dropdown = document.createElement("ul");
  dropdown.id = "autocomplete-list";
  dropdown.style.cssText = `
    position:absolute; top:100%; left:0; right:0; z-index:999;
    background: var(--color-background-primary);
    border: 1px solid var(--color-border-secondary);
    border-top: none; border-radius: 0 0 10px 10px;
    margin: 0; padding: 0; list-style: none;
    max-height: 260px; overflow-y: auto;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    display: none;
  `;
  wrapper.style.position = "relative";
  wrapper.appendChild(dropdown);

  let itemFocado = -1;

  input.addEventListener("input", () => {
    const termo = normalizarTexto(input.value);
    itemFocado = -1;

    if (termo.length < 2) {
      dropdown.style.display = "none";
      dropdown.innerHTML = "";
      renderProdutos();
      return;
    }

    // Filtro de visibilidade (exclui itens com emEstoque: false)
    const produtosFiltrados = produtos.filter(p => !CATS_EXCLUIDAS.includes(p.cat) && p.emEstoque !== false);

    const sugestoes = produtosFiltrados
      .map(p => {
        const nome = normalizarTexto(p.nome);
        const cat  = normalizarTexto(p.cat);
        let score = 0;
        if (nome.startsWith(termo)) score = 3;
        else if (nome.includes(termo)) score = 2;
        else if (cat.includes(termo)) score = 1;
        return { p, score };
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(x => x.p);

    if (!sugestoes.length) {
      dropdown.style.display = "none";
      dropdown.innerHTML = "";
      renderProdutos();
      return;
    }

    dropdown.innerHTML = sugestoes.map((p, i) => {
      const nomeDest = destacarTermo(p.nome, input.value);
      return `<li data-index="${i}" data-nome="${p.nome}"
        style="padding:10px 14px; cursor:pointer; display:flex; align-items:center; gap:10px;
               border-bottom: 1px solid var(--color-background-tertiary); font-size:14px;
               color: var(--color-text-primary);">
        <span style="font-size:18px">${iconeCategoria(p.cat)}</span>
        <span>${nomeDest}</span>
        <span style="margin-left:auto; font-size:12px; opacity:0.5">${p.cat}</span>
      </li>`;
    }).join("");

    dropdown.style.display = "block";

    dropdown.querySelectorAll("li").forEach(li => {
      li.addEventListener("mouseenter", () => {
        dropdown.querySelectorAll("li").forEach(x => x.style.background = "");
        li.style.background = "var(--color-background-secondary)";
      });
      li.addEventListener("mouseleave", () => { li.style.background = ""; });
      li.addEventListener("mousedown", (e) => {
        e.preventDefault();
        selecionarSugestao(li.dataset.nome);
      });
    });

    renderProdutos();
  });

  input.addEventListener("keydown", (e) => {
    const itens = dropdown.querySelectorAll("li");
    if (!itens.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); itemFocado = Math.min(itemFocado + 1, itens.length - 1); atualizarFoco(itens); }
    else if (e.key === "ArrowUp") { e.preventDefault(); itemFocado = Math.max(itemFocado - 1, 0); atualizarFoco(itens); }
    else if (e.key === "Enter" && itemFocado >= 0) { e.preventDefault(); selecionarSugestao(itens[itemFocado].dataset.nome); }
    else if (e.key === "Escape") { fecharAutocomplete(); }
  });

  function atualizarFoco(itens) {
    itens.forEach((li, i) => { li.style.background = i === itemFocado ? "var(--color-background-secondary)" : ""; });
  }

  function fecharAutocomplete() {
    dropdown.style.display = "none";
    dropdown.innerHTML = "";
    itemFocado = -1;
  }

  function selecionarSugestao(nome) {
    input.value = nome;
    fecharAutocomplete();
    renderProdutos();
  }
}

function destacarTermo(nome, termo) {
  if (!termo) return nome;
  const regex = new RegExp(`(${termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
  return nome.replace(regex, '<strong style="color:var(--brand-blue)">$1</strong>');
}

function iconeCategoria(cat) {
  const mapa = {
    "Cervejas": "🍺", "Destilados": "🥃", "Energéticos": "⚡",
    "Refrigerantes": "🥤", "Água": "💧", "Gelo/Carvão": "🧊",
    "Churrasco": "🔥",
  };
  return mapa[cat] || "📦";
}

function renderCats(){
  const el = document.getElementById("cats");
  el.innerHTML = cats.map(c => `<button class="cat-btn${c===catAtiva?' active':''}" onclick="setcat('${c}')">${c}</button>`).join('');
}

function setcat(c){
  catAtiva = c;
  document.getElementById("searchBar").value = "";
  const dropdown = document.getElementById("autocomplete-list");
  if (dropdown) { dropdown.style.display = "none"; dropdown.innerHTML = ""; }
  renderCats();
  renderProdutos();
}

function mudarVariante(prodId, variante) {
  const p = produtos.find(x => x.id === prodId);
  const priceDiv = document.getElementById(`price-${prodId}`);
  if (variante === 'unidade') {
    priceDiv.textContent = `R$ ${p.preco.toFixed(2).replace('.',',')}`;
  } else {
    priceDiv.textContent = `R$ ${p.pack.preco.toFixed(2).replace('.',',')}`;
  }
  const span = document.getElementById(`qtd-${prodId}`);
  span.textContent = "0";
  span.className = 'qty';
}

function carregarImagemComFallback(img) {
  const id = img.getAttribute('data-id');
  let extIndex = parseInt(img.getAttribute('data-ext') || '0', 10);
  
  const extensoes = ['jpeg', 'png', 'webp', 'jfif', 'svg', 'JPG', 'JPEG', 'PNG', 'WEBP'];
  
  if (extIndex < extensoes.length) {
    const proxExt = extensoes[extIndex];
    img.setAttribute('data-ext', extIndex + 1);
    img.src = `static/assets/${id}.${proxExt}`;
  } else {
    img.onerror = null;
    img.src = 'static/assets/default.jpg';
  }
}

// --- MOTOR DE RENDERIZAÇÃO COM TRAVA DE ESTOQUE ---
function renderProdutos(){
  const termo = document.getElementById("searchBar").value.toLowerCase();
  const container = document.getElementById("product-list");

  // Filtro de visibilidade (exclui itens com emEstoque: false)
  const produtosVisiveis = produtos.filter(p => !CATS_EXCLUIDAS.includes(p.cat) && p.emEstoque !== false);
  
  let catsFiltradas = termo !== "" ? catsUnicas : (catAtiva === "Destaques" ? ["Destaques"] : [catAtiva]);
  let html = "";

  catsFiltradas.forEach(cat => {
    let lista = termo !== "" ?
      produtosVisiveis.filter(p => p.cat === cat && normalizarTexto(p.nome).includes(normalizarTexto(termo))) :
      (cat === "Destaques" ? produtosVisiveis.filter(p => p.destaque === true) : produtosVisiveis.filter(p => p.cat === cat));

    if (!lista.length) return;

    const tituloSessao = (catAtiva === "Destaques" && termo === "") ? "Mais Vendidos" : cat;
    if (html.indexOf(`>${tituloSessao}</div>`) === -1) {
      html += `<div class="section-title">${tituloSessao}</div><div class="grid">`;
    }

    lista.forEach(p => {
      let packSelectHTML = "";
      // Exibe seletor de pack apenas se existir E não estiver marcado como esgotado
      if (p.pack && p.pack.emEstoque !== false) {
        packSelectHTML = `
        <div class="pack-selector">
          <select id="sel-${p.id}" onchange="mudarVariante(${p.id}, this.value)">
            <option value="unidade">Unidade (R$ ${p.preco.toFixed(2).replace('.',',')})</option>
            <option value="pack">${p.pack.nome} (R$ ${p.pack.preco.toFixed(2).replace('.',',')})</option>
          </select>
        </div>`;
      }

      html += `<div class="card">
        <div class="card-img-wrap">
          <img src="static/assets/${p.id}.jpg" alt="${p.nome}" class="card-img" data-id="${p.id}" data-ext="0" onerror="carregarImagemComFallback(this)">
        </div>
        <h3>${p.nome}</h3>
        ${packSelectHTML}
        <div class="price" id="price-${p.id}">R$ ${p.preco.toFixed(2).replace('.',',')}</div>
        <div class="controls">
          <button onclick="alt(${p.id},-1)" aria-label="Remover">−</button>
          <span class="qty" id="qtd-${p.id}">0</span>
          <button onclick="alt(${p.id},1)" aria-label="Adicionar">+</button>
        </div>
      </div>`;
    });
    html += `</div>`;
  });

  if (!html) html = `<div class="empty"><i class="ti ti-search-off" style="font-size:32px;display:block;margin-bottom:12px"></i>Nenhum produto encontrado</div>`;
  container.innerHTML = html;

  for (let key in carrinho) {
    const baseId = key.split('_')[0];
    const span = document.getElementById(`qtd-${baseId}`);
    if (span) { span.textContent = carrinho[key].quantidade; span.className = 'qty has-qty'; }
  }
}

function filtrar(){ renderProdutos(); }

function alt(idBase, delta){
  const p = produtos.find(x => x.id === idBase);
  const selector = document.getElementById(`sel-${idBase}`);
  const isPack = selector && selector.value === 'pack';
  const cartId = isPack ? `${idBase}_pack` : `${idBase}_un`;
  const nomeFinal = isPack ? `${p.nome} (${p.pack.nome})` : p.nome;
  const precoFinal = isPack ? p.pack.preco : p.preco;

  if (!carrinho[cartId]) carrinho[cartId] = {nome: nomeFinal, preco: precoFinal, quantidade: 0, baseId: idBase};
  carrinho[cartId].quantidade += delta;
  if (carrinho[cartId].quantidade <= 0) delete carrinho[cartId];

  const span = document.getElementById(`qtd-${idBase}`);
  if (span) {
    let totalNaTela = 0;
    if (carrinho[`${idBase}_un`]) totalNaTela += carrinho[`${idBase}_un`].quantidade;
    if (carrinho[`${idBase}_pack`]) totalNaTela += carrinho[`${idBase}_pack`].quantidade;
    span.textContent = totalNaTela;
    span.className = 'qty' + (totalNaTela > 0 ? ' has-qty' : '');
  }
  atualizarCarrinho();
}

function atualizarCarrinho(){
  let total=0, itens=0;
  for (let id in carrinho){ total += carrinho[id].quantidade * carrinho[id].preco; itens += carrinho[id].quantidade; }
  const bar = document.getElementById("cart-bar");
  if (total > 0) {
    bar.classList.remove("hidden");
    document.getElementById("cart-total").textContent = `Total: R$ ${total.toFixed(2).replace('.',',')}`;
    document.getElementById("cart-items-count").textContent = `${itens} ${itens===1?'item':'itens'}`;
  } else {
    bar.classList.add("hidden");
  }
}

function abrirModal(){
  let resumo="", total=0;
  for (let id in carrinho){
    const it = carrinho[id];
    const sub = it.quantidade * it.preco;
    total += sub;
    resumo += `<div style="display:flex;justify-content:space-between;padding:4px 0">${it.quantidade}× ${it.nome}<span>R$ ${sub.toFixed(2).replace('.',',')}</span></div>`;
  }
  resumo += `<div style="display:flex;justify-content:space-between;padding:10px 0 0;border-top:1px solid var(--color-border-secondary);margin-top:8px;font-weight:700;">Total<span>R$ ${total.toFixed(2).replace('.',',')}</span></div>`;
  document.getElementById("resumo-pedido").innerHTML = resumo;
  document.getElementById("modal-overlay").classList.remove("hidden");
}

function fecharModal(){ document.getElementById("modal-overlay").classList.add("hidden"); }
function fecharModalFora(e){ if (e.target === document.getElementById("modal-overlay")) fecharModal(); }

function selPag(el, pag){
  pagamento = pag;
  document.querySelectorAll(".pay-opt").forEach(x => x.classList.remove("sel"));
  el.classList.add("sel");
}

function pegarLocalizacao(){
  const btn = document.getElementById("loc-btn");
  const status = document.getElementById("loc-status");
  const inputEnd = document.getElementById("endereco");
  
  const googleApiKey = 'AIzaSyART5nMhHX05nHhxYNXagzot2UK8rAL8k8'; 
  
  btn.innerHTML = '<i class="ti ti-loader"></i> Obtendo...';
  btn.disabled = true;

  if (!navigator.geolocation){ 
    alert("Seu navegador não suporta geolocalização."); 
    btn.innerHTML = '<i class="ti ti-current-location"></i> Usar minha localização atual';
    btn.disabled = false;
    return; 
  }

  const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

  navigator.geolocation.getCurrentPosition(
    pos => {
      coords = {lat: pos.coords.latitude, lng: pos.coords.longitude};
      
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${googleApiKey}&language=pt-BR`)
        .then(r => {
          if(!r.ok) throw new Error("Erro na rede do Google");
          return r.json();
        })
        .then(d => {
          if(d.status === "OK" && d.results.length > 0) {
            inputEnd.value = d.results[0].formatted_address;
            status.style.display = "block"; 
            status.style.color = "#1a7a3c";
            status.textContent = "✓ Localização exata pelo Google Maps!";
          } else {
            throw new Error("Endereço não localizado com precisão.");
          }
        })
        .catch(err => {
          console.error(err);
          inputEnd.value = `${coords.lat}, ${coords.lng}`;
          status.style.display = "block"; 
          status.style.color = "#d9534f";
          status.textContent = "⚠️ Ocorreu um erro ao converter as coordenadas. Por favor, digite o endereço.";
        })
        .finally(() => {
          btn.innerHTML = '<i class="ti ti-current-location"></i> Usar minha localização atual';
          btn.disabled = false;
        });
    },
    err => {
      console.error(err);
      let msg = "Erro desconhecido ao buscar localização.";
      if (err.code === 1) msg = "Você não deu permissão para acessar o GPS.";
      else if (err.code === 2) msg = "Sinal de GPS indisponível neste momento.";
      else if (err.code === 3) msg = "O tempo limite para buscar a localização esgotou.";
      
      alert(msg);
      status.style.display = "block";
      status.style.color = "#d9534f";
      status.textContent = "❌ Falha: " + msg;
      
      btn.innerHTML = '<i class="ti ti-current-location"></i> Usar minha localização atual';
      btn.disabled = false;
    },
    options
  );
}

function enviar(){
  const end = document.getElementById("endereco").value.trim();
  if (!pagamento){ alert("Selecione a forma de pagamento."); return; }
  if (!end){ alert("Informe o endereço de entrega."); return; }
  
  let txt = "Olá, Super Japa! Gostaria de fazer o seguinte pedido:\n\n";
  let total = 0;
  
  for (let id in carrinho){
    const it = carrinho[id]; 
    total += it.quantidade * it.preco;
    txt += `*${it.quantidade}x* ${it.nome} - R$ ${(it.quantidade*it.preco).toFixed(2).replace('.',',')}\n`;
  }
  
  txt += `\n*Total:* R$ ${total.toFixed(2).replace('.',',')}\n*Pagamento:* ${pagamento}\n*Endereço:* ${end}`;
  
  window.open(`https://wa.me/5522997062756?text=${encodeURIComponent(txt)}`, '_blank');
  fecharModal();
}

renderCats();
renderProdutos();
iniciarAutocomplete();
