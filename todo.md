# **Rest API to-do**

# Users

## User Registration

**Functional Requirements**

- The API must allow the registration of new users

**Non-Functional Requirements**

- Use crypto-JS library to encrypt password

**Business Rules**

- The API must not allow the registration of a user with an existing email
- The API must encrypt the user's password before saving to the database

## User Login

**Functional Requirements**

- The API must allow registered users to log in

**Non-Functional Requirements**

- Use Json Web Token

**Business Rules**

- The API must not allow users with a non-existent email to log in
- The API must not allow users to login with a wrong password
- The API must return a token when users are successfully logged in

## User Update

**Functional Requirements**

- The API must allow users to update their data
- The API must allow an admin to update a user's data

**Business Rules**

- The API must only allow logged in users to update their data

## Delete User

**Functional Requirements**

- The API must allow a user to delete their account
- The API must allow an admin to delete a user's account 

**Business Rules**

- The API must only allow logged in users to delete their account

## List a User 

**Functional Requirements**

- The API must allow a user to list their data
- The API must allow an admin to list a user's data

**Business Rules**

- The API must only allow logged in users to list their data

## List all Users

**Functional Requirements**

- The API must allow an admin to list data from all users
- The API must allow an admin to list the data of the newest user to register in the application

**Business Rules**

- The API must only allow logged in admin users to list all users

## Get User Stats

**Functional Requirements**

- The API must allow an admin to get user stats

**Business Rules**

- The API must only allow logged in admin users to get user stats

# Products

## Create a new product

**Functional Requirements**

- The API must allow admins to create new products

**Business Rules**

- The API must only allow logged in admin users to create new products

## Update Products

**Functional Requirements**

- The API must allow admins to update a product

**Business Rules**

- The API must only allow logged in admin users to update products

## Delete Products

**Functional Requirements**

- The API must allow admins to delete a product

**Business Rules**

- The API must only allow logged in admin users to delete products

## List a Product

**Functional Requirements**

- The API must allow any user to list a product

**Business Rules**

- The API must allow users who are not logged in to list a product

## List all Products

**Functional Requirements**

- The API must allow any user to list all products
- The API must allow any user to list the 5 newest products
- The API must allow any user to list products by category

**Business Rules**

- The API must allow users who are not logged in to list the products

# Orders

## Create a new Order

**Functional Requirements**

- The API must allow users to create new orders

**Business Rules**

- The API must only allow logged in users to create new orders

## Update a Order

**Functional Requirements**

- The API must allow users to update their orders
- The API must allow an admin to update a user order

**Business Rules**

- The API must only allow logged in users to update their orders

## Delete a Order

**Functional Requirements**

- The API must allow users to delete their orders
- The API must allow an admin to delete a user's order

**Business Rules**

- The API must only allow logged in users to delete their orders

## Get the Data from an Order

**Functional Requirements**

- The API must allow users to list their order data
- The API must allow an admin to list a user order data

**Business Rules**

- The API must only allow logged in users to list their order data

## List all Orders

**Functional Requirements**

- The API must allow admins to list all orders

**Business Rules**

- The API must only allow admin users to list all orders

## Get Monthly Income

**Functional Requirements**

- The API must allow admins to list monthly income

**Business Rules**

- The API must only allow admin users to list monthly income

# Carts

## Create a new Cart 

**Functional Requirements**

- The API must allow users to create a new cart

**Business Rules**

- The API must only allow logged in users to create carts

## Update a Cart

**Functional Requirements**

- The API must allow users to update their cart
- The API must allow an admin to update a user's cart

**Business Rules**

- The API must only allow logged in users to update their cart

## Delete a Cart

**Functional Requirements**

- The API must allow users to delete their cart
- The API must allow an admin to delete a user's cart

**Business Rules**

- The API must only allow logged in users to delete their cart

## Get the User's Cart

**Functional Requirements**

- The API must allow users to list their cart data
- The API must allow an admin to list a user's cart data

**Business Rules**

- The API must only allow logged in users to list their cart data

## Get Data from all Carts

**Functional Requirements**

- The API must allow admins to list data from all carts

**Business Rules**

- The API must only allow admin users to list data from all carts 

# Payment

## Make Payment

**Functional Requirements**

- The API must allow users to make payments

**Non-Functional Requirements**

- Use stripe to make payments

**Business Rules**

- The API must only allow logged in users to make payments
