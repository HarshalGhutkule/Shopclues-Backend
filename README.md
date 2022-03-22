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

## Get Mobile list
- Method : GET
- URL : https://shopclues-backend.herokuapp.com/mobiles
- In response you will get all mobiles data

## Get Single mobile detail
- Method : GET
- URL : https://shopclues-backend.herokuapp.com/mobiles/${product_id}
- In response you will get single mobile detail

## Post/Upload File
- Method : POST
- URL : https://shopclues-backend.herokuapp.com/carts

## Team Members
- [Vipin Awadhiya](https://github.com/Vipin115)
- [Bhavesh Agrawal](https://github.com/Bhavesh-XLV)
- [Meghna Singh](https://github.com/Meghna9027)
- [Vishnu PS](https://github.com/VishnuPScodes)
