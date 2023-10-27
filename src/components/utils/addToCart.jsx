export const addToCart = (item) => {
  if (!localStorage.getItem("cartItems")) {
    localStorage.setItem("cartItems", JSON.stringify([]));
  }
  const newcart = localStorage.getItem("cartItems");
  const newcartParse = JSON.parse(newcart);
  console.log(newcartParse);
  if (newcartParse.filter((element) => element.id === item.id).length) {
    newcartParse.map((element) => {
      if (element.id === item.id) {
        element.cantidad = element.cantidad + item.cantidad;
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(newcartParse));
    return;
  }
  newcartParse.push(item);
  localStorage.setItem("cartItems", JSON.stringify(newcartParse));
};
