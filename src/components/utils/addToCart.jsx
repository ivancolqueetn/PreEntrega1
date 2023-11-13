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


export const restCantidad = (item) => {

  const newcart = localStorage.getItem("cartItems");
  const newcartParse = JSON.parse(newcart);
  console.log(newcartParse);
  if (newcartParse.filter((element) => element.id === item.id).length) {
    newcartParse.map((element) => {
      
      if (element.id === item.id) {
        if(element.cantidad==1){
          return
        }
        element.cantidad = element.cantidad - 1;
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(newcartParse));
    return;
  }
  newcartParse.push(item);
  localStorage.setItem("cartItems", JSON.stringify(newcartParse));
};

export const addCantidad = (item) => {

  const newcart = localStorage.getItem("cartItems");
  const newcartParse = JSON.parse(newcart);
  console.log(newcartParse);
  if (newcartParse.filter((element) => element.id === item.id).length) {
    newcartParse.map((element) => {
      if (element.id === item.id) {
        element.cantidad = element.cantidad + 1;
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(newcartParse));
    return;
  }
  newcartParse.push(item);
  localStorage.setItem("cartItems", JSON.stringify(newcartParse));
};


export const deleteItem = (item) => {

  const newcart = localStorage.getItem("cartItems");
  const newcartParse = JSON.parse(newcart);
  console.log(newcartParse);
  const cartUpdated = newcartParse.filter((element) =>element.id != item.id )
  localStorage.setItem("cartItems", JSON.stringify(cartUpdated));
};