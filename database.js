const mongoose = require("mongoose");
//connection URL
mongoose.connect("mongodb://localhost:27017/coffeeShopDB");

module.exports = mongoose;
//collection of coldCoffees
// const ColdCoffeesSchema = new mongoose.Schema({
//   _id: {
//     type: String,
//     require: [true, "please check you're data entries Id is missing"],
//   },
//   name: {
//     type: String,
//     require: [true, "please check you're data entries name is missing"],
//   },
//   image: {
//     type: String,
//     require: [true, "please check you're data entries image is missing"],
//   },
//   items: [
//     {
//       type: Map,
//       of: String,
//       id: {
//         type: Number,
//         require: [true, "please check you're data entries Id is missing"],
//       },
//       name: {
//         type: String,
//         require: [true, "please check you're data entries name is missing"],
//       },
//       ingrediants: [{ type: Map, of: String }],
//       description: {
//         type: String,
//         require: [
//           true,
//           "please check you're data entries description is missing",
//         ],
//       },
//       image: {
//         type: String,
//         require: [true, "please check you're data entries image is missing"],
//       },
//       price: {
//         type: Number,
//         require: [true, "please check you're data entries Id is missing"],
//       },
//       currency: String,
//       sizes: [
//         {
//           type: Map,
//           of: String,
//           require: [true, "please check you're data entries sizes is missing"],
//         },
//       ],
//       selectedSize: String,
//     },
//   ],
// });
// // create cold model
// const ColdCoffees = mongoose.model("ColdCoffees", ColdCoffeesSchema);
// // insertion of the data
// const ColdDrinks = new ColdCoffees({
//   _id: "coldDrinks",
//   name: "Cold Coffees",
//   image: "/images/chocolate-brew.webp",
//   items: [
//     {
//       id: 1,
//       name: "Iced Caffè Mocha",
//       ingrediants: ["milk foam", "espresso", "steamed milk", "hot chocolate"],
//       description:
//         "Take the first sip of many. Cold, refreshing, and delicious. Rinse and repeat whenever you get the craving",
//       image: "/images/iced-mocha.webp",
//       price: 12,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 2,
//       name: "Vanilla Sweet Cream Cold Brew",
//       ingrediants: ["vanilla", "milk foam", "espresso", "steamed milk"],
//       description:
//         "Rich coffee with a hint of vanilla, sweetened with a drizzle of caramel. It's cold, it's refreshing, and 100% delicious, every time.",
//       image: "/images/vanilla-cold-brew.webp",
//       price: 14,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 3,
//       name: "Iced Caffè Americano",
//       ingrediants: ["hot water", "espresso"],
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//       image: "/images/black.webp",
//       price: 14,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 4,
//       name: "Chocolate Cream Cold Brew",
//       ingrediants: ["milk foam", "espresso", "steamed milk", "hot chocolate"],
//       description:
//         "A cold start never tasted so good. Foamed milk, espresso, and you're on your way to a refreshingly cool beverage that you can enjoy any time of day.",
//       image: "/images/chocolate-brew.webp",
//       price: 16,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//   ],
// });

// // ColdDrinks.save().then(() => console.log('inserted cold coffees'));

// // schema collection of hotCoffees
// const HotCoffeesSchema = new mongoose.Schema({
//   _id: {
//     type: String,
//     require: [true, "please check you're data entries Id is missing"],
//   },
//   name: {
//     type: String,
//     require: [true, "please check you're data entries name is missing"],
//   },
//   image: {
//     type: String,
//     require: [true, "please check you're data entries image is missing"],
//   },
//   items: [
//     {
//       type: Map,
//       of: String,
//       id: {
//         type: Number,
//         require: [true, "please check you're data entries Id is missing"],
//       },
//       name: {
//         type: String,
//         require: [true, "please check you're data entries name is missing"],
//       },
//       ingrediants: [{ type: Map, of: String }],
//       description: {
//         type: String,
//         require: [
//           true,
//           "please check you're data entries description is missing",
//         ],
//       },
//       image: {
//         type: String,
//         require: [true, "please check you're data entries image is missing"],
//       },
//       price: {
//         type: Number,
//         require: [true, "please check you're data entries Id is missing"],
//       },
//       currency: String,
//       sizes: [
//         {
//           type: Map,
//           of: String,
//           require: [true, "please check you're data entries sizes is missing"],
//         },
//       ],
//       selectedSize: String,
//     },
//   ],
// });

// const HotCoffees = mongoose.model("HotCoffees", HotCoffeesSchema);

// const HotDrinks = new HotCoffees({
//   _id: "hotDrinks",
//   name: "Hot Coffees",
//   image: "/images/black.webp",
//   items: [
//     {
//       id: 5,
//       name: "Espresso",
//       ingrediants: "espresso",
//       description:
//         "Every espresso beverage we handcraft for you, started right here. The quest began in 1975 with a search for the perfect melding of beans and roast, ending months of intense experimentation with the coffee you’re holding in your hand. A recipe for caramelly sweetness – so right that it's never been changed.",
//       image: "/images/hot-espresso.webp",
//       price: 10,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 6,
//       name: "Flat White",
//       ingrediants: ["espresso", "steamed milk"],
//       description:
//         "Take that first sip, and enjoy. A delicious spiced coffee, and you made it yourself. Look at you go. You can also sprinkle a bit of cinnamon on top, if you’re feeling extra fancy.",
//       image: "/images/flate-white.webp",
//       price: 12,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 7,
//       name: "Caffè Americano",
//       ingrediants: ["hot water", "espresso"],
//       description:
//         "Sip it slowly, and savour the flavour.Simple, and delicious  just the way coffee should be.",
//       image: "/images/black.webp",
//       price: 14,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 8,
//       name: "Caramel Macchiato",
//       ingrediants: ["hot water", "espresso"],
//       description:
//         "It’s a lightly roasted blonde coffee, but it's full of flavour. Add some frothed milk and you've got yourself one delicious macchiato.",
//       image: "/images/caramel-macchiato.webp",
//       price: 14,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 9,
//       name: "Caffè Mocha",
//       ingrediants: ["hot water", "espresso"],
//       description:
//         "Take that first sip, and enjoy. The Caffé Mocha you know and love, and you've just perfected it. Nice.",
//       image: "/images/mocha.webp",
//       price: 14,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//   ],
// });

// //    HotDrinks.save().then(() => console.log('inserted hot coffees'));

// // schema collection of hotCoffees
// const PopularCoffeesSchema = new mongoose.Schema({
//   _id: {
//     type: String,
//     require: [true, "please check you're data entries Id is missing"],
//   },
//   name: {
//     type: String,
//     require: [true, "please check you're data entries name is missing"],
//   },
//   image: {
//     type: String,
//     require: [true, "please check you're data entries image is missing"],
//   },
//   items: [
//     {
//       type: Map,
//       of: String,
//       id: {
//         type: Number,
//         require: [true, "please check you're data entries Id is missing"],
//       },
//       name: {
//         type: String,
//         require: [true, "please check you're data entries name is missing"],
//       },
//       ingrediants: [{ type: Map, of: String }],
//       description: {
//         type: String,
//         require: [
//           true,
//           "please check you're data entries description is missing",
//         ],
//       },
//       image: {
//         type: String,
//         require: [true, "please check you're data entries image is missing"],
//       },
//       price: {
//         type: Number,
//         require: [true, "please check you're data entries Id is missing"],
//       },
//       currency: String,
//       sizes: [
//         {
//           type: Map,
//           of: String,
//           require: [true, "please check you're data entries sizes is missing"],
//         },
//       ],
//       selectedSize: String,
//     },
//   ],
// });

// const PopularCoffees = mongoose.model("PopularCoffees", PopularCoffeesSchema);

// const PopularDrinks = new PopularCoffees({
//   _id: "popularDrinks",
//   name: "Popular Coffees",
//   image: "/images/black.webp",
//   items: [
//     {
//       id: 10,
//       name: "Vietnamese Iced Coffee",
//       ingrediants: ["milk foam", "espresso", "steamed milk", "hot chocolate"],
//       description: "ULIIMATE REFRESHMENT",
//       image: "/images/Vietnamese-Iced-Coffee.webp",
//       price: 16,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 11,
//       name: "Iced Caramel Macchiato",
//       ingrediants: ["milk foam", "espresso", "steamed milk"],
//       description: "RICH WITH HINTS OF VANILLA",
//       image: "/images/Iced-Caramel-Macchiato.webp",
//       price: 14,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 12,
//       name: "Café au Lait",
//       ingrediants: ["milk foam", "espresso", "steamed milk"],
//       description: "DELICIOUSLY SIMPLE TO MAKE",
//       image: "/images/Café-au-Lait.webp",
//       price: 14,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//     {
//       id: 13,
//       name: "Iced Latte",
//       ingrediants: ["milk foam", "espresso", "steamed milk"],
//       description: "RIFRISHNGLY COOL",
//       image: "/images/Iced-Latte.webp",
//       price: 14,
//       currency: "Rs.",
//       sizes: ["small", "medium", "large"],
//       selectedSize: "",
//     },
//   ],
// });

// // PopularDrinks.save().then(() => console.log("inserted popular coffees"));

// const Products = new mongoose.Schema({
//   _id: {
//     type: String,
//     require: [true, "please check you're data entries Id is missing"],
//   },
//   name: {
//     type: String,
//     require: [true, "please check you're data entries name is missing"],
//   },
//   image: {
//     type: String,
//     require: [true, "please check you're data entries image is missing"],
//   },
//   items: [
//     {
//       type: Map,
//       of: String,
//       id: {
//         type: Number,
//         require: [true, "please check you're data entries Id is missing"],
//       },
//       name: {
//         type: String,
//         require: [true, "please check you're data entries name is missing"],
//       },
//       ingrediants: [{ type: Map, of: String }],
//       description: {
//         type: String,
//         require: [
//           true,
//           "please check you're data entries description is missing",
//         ],
//       },
//       image: {
//         type: String,
//         require: [true, "please check you're data entries image is missing"],
//       },
//       price: {
//         type: Number,
//         require: [true, "please check you're data entries Id is missing"],
//       },
//       currency: String,
//       sizes: [
//         {
//           type: Map,
//           of: String,
//           require: [true, "please check you're data entries sizes is missing"],
//         },
//       ],
//       selectedSize: String,
//     },
//   ],
// });

// // schema collection of hotCoffees
// const OrdersSchema = new mongoose.Schema({
//   _id: {
//     type: Number,
//     require: [true, "please check you're data entries id is missing"],
//   },
//   products: [{ type: map, of: array }],
//   shippingInfo: {
//     firstName: {
//       type: String,
//       require: [true, "please check you're data entries firstName is missing"],
//     },
//     lastName: {
//       type: String,
//       require: [true, "please check you're data entries  lastName is missing"],
//     },
//     address: {
//       type: String,
//       require: [true, "please check you're data entries address is missing"],
//     },
//     phone: {
//       type: Number,
//       require: [true, "please check you're data entries phone is missing"],
//     },
//     city: {
//       type: String,
//       require: [true, "please check you're data entries city is missing"],
//     },
//     postalCode: {
//       type: String,
//       require: [true, "please check you're data entries postalCode is missing"],
//     },
//     pickupLocation: {
//       type: String,
//       require: [
//         true,
//         "please check you're data entries pickupLocation is missing",
//       ],
//     },
//   },
// });

// const Order = mongoose.model("Orders", OrdersSchema);

// const Orders = new Order({});

// Orders.save().then(() => console.log("inserted the orders"));
