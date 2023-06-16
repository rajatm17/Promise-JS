var cart = ['shoes','pant','shirts'];

const createOrder = (cart) => {
  return( new Promise(function(resolve,reject){
    if(cart){
      const orderId = '1234';
      resolve(orderId);
    }
    else {
      const err = new Error("cart is not valid");
      reject(err);
    }
  }))
}

const proceedToPayment = (orderId) => {
  return (new Promise(function (resolve,reject){
    if(orderId){
      const orderDetails ={ walletAmount :1000,
      paymentAmount : 300,orderId}
      
      
      resolve(orderDetails);
    }
    else {
      const err = new Error('Invalid OrderId')
      reject(err);
    }
  }))
}

const updateWallet = (orderDetails) =>{
  return (new Promise(function (resolve,reject) {
    let balance = orderDetails.walletAmount - orderDetails.paymentAmount;
    resolve({balance,orderDetails});
  }))
}

createOrder(cart).
  then(function(orderId){
    return orderId;
  })
.then(function (orderId) {
  return (proceedToPayment(orderId));
}).
  then(function name(orderDetails) {
    console.log(orderDetails);
    return orderDetails
  }).
  then(
    function (orderDetails) {
      return updateWallet(orderDetails);
    }
  ).then
(function ({balance,orderDetails}){
  console.log('You have Succesfully Completed your order.')
  console.log('Wallet balance :',balance)
})
