# Backend of Shopclues

Backend API for a shopclues clone website, built using NodeJS, Express, Mongoose, MongoDB Atlas and AWS EC2, Heroku for storage.

## Documentation for API?

## Sign Up
- Method : POST
- URL : https://shopclues-backend.herokuapp.com/register
- req body example : {"email" : "abc@gmail.com", "number":"1234567891", "user_name": "Harshal" ,"password": "secret123"}
- In response you will get a bearer token that you have to use in all requests

## Login
- Method : POST
- URL : https://shopclues-backend.herokuapp.com/login
- req body example : {"user_name": "Harshal", "password": "secret123"}
- In response you will get a bearer token that you have to use in all requests

## Paytm payment gateway link
- Visit the repo [https://github.com/HarshalGhutkule/Paytm-payment-gateway.git]
- https://shopcluespaytm.herokuapp.com

## Get user data
- Method : GET
- URL : https://shopclues-backend.herokuapp.com/users/${_id}
- In response you will get user details
- Use token as Bearer token

## Get user orders data
- Method : GET
- URL : https://shopclues-backend.herokuapp.com/orders/${_id}
- In response you will get user orders detail
- Use token as Bearer token

## Update user information
- Method : PATCH
- URL : https://shopclues-backend.herokuapp.com/users/update/${_id}
- Req Body example : {"firstName": "abcd", "lastName": "abcd", "email": "abc@gmail.com", "number": "mobile number"}
- In response it will update user information
- Use token as Bearer token

## Reset user password
- Method : PATCH
- URL : https://shopclues-backend.herokuapp.com/reset/${_id}
- Req Body example : {"password": "oldPassword", "newPassword": "newPassword"}
- In response it will reset password
- Use token as Bearer token

## Update user address
- Method : PATCH
- URL : https://shopclues-backend.herokuapp.com/users/${_id}
- Req Body example : {"pincode": "421005", "city": "pune", "state": "MH", "name": "harshal", "phonenumber": "1234567891", "house": "12/9", "street": "abcd", "gst": "1234567"}
- In response it will update user address
- Use token as Bearer token

## Get Mobile list
- Method : GET
- URL : https://shopclues-backend.herokuapp.com/mobiles
- In response you will get all mobiles data

## Get Single mobile detail
- Method : GET
- URL : https://shopclues-backend.herokuapp.com/mobiles/${product_id}
- In response you will get single mobile detail

## Post/Add product to cart
- Method : POST
- URL : https://shopclues-backend.herokuapp.com/carts
- Req body : {"image": "url", "product_name" : "productName", "price" : '999', "product_desc" : "description", "discount" : "20%"}
- Use token as Bearer token

## Get cart data
- Method : GET
- URL : https://shopclues-backend.herokuapp.com/carts/${_id}
- In response you will get cart data
- Use token as Bearer token

## Delete cart data
- Method : DELETE
- URL : https://shopclues-backend.herokuapp.com/carts/${_id}
- In response it will delete that product from cart
- Use token as Bearer token

## Team Members
- [Vipin Awadhiya](https://github.com/Vipin115)
- [Bhavesh Agrawal](https://github.com/Bhavesh-XLV)
- [Meghna Singh](https://github.com/Meghna9027)
- [Vishnu PS](https://github.com/VishnuPScodes)
