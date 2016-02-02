# Interview-MiniAppForOrderManagment

## Overview
This is a task received from an Ireland development company to win a home-based role for a small project that they are developing.
I applied for the following position:

> Full-stack web developer


## Demo

I deployed the demo behind two reverse proxies with a load balancer. If you have any trouble viewing the demo, please contact me on **robertdum01@gmail.com**.
> The fully functional demo can be found here: [Demo-Interview-MiniAppForOrderManagment](http://demoordermanagment.rdumitrescu.com/)


## Task

So the task sounds like this:

You must write a mini app that can manange orders for company that want to deliver products in UK.
To achieve this, lets assume that every order from an UK customer can be represented by an object.

The object has the following properties:

- companyName
- customerAddress
- orderedItem

So the sample data will be as this:

```
{
  "orders" : [
    {
      "companyName" : "Supermarket 1",
      "customerAddress" : "32 Dunnock Dr, Costessey, Norwich, Norfolk NR8 5FF",
      "orderedItem" : "Item 1"
    },
    {
      "companyName" : "Supermarket 3",
      "customerAddress" : "Unnamed Road, Inverness, Highland IV5 7PW",
      "orderedItem" : "Item 2"
    },
    {
      "companyName" : "Supermarket 4",
      "customerAddress" : "12 Buxton Rd, Ilford, Greater London IG2 7HG",
      "orderedItem" : "Item 3"
    },
    {
      "companyName" : "Supermarket 8",
      "customerAddress" : "Unnamed Road, Inverness, Highland IV5 7PW",
      "orderedItem" : "Item 4"
    },
    {
      "companyName" : "Supermarket 2",
      "customerAddress" : "32 Dunnock Dr, Costessey, Norwich, Norfolk NR8 5FF",
      "orderedItem" : "Item 5"
    },
    {
      "companyName" : "Supermarket 1",
      "customerAddress" : "Unnamed Road, Inverness, Highland IV5 7PW",
      "orderedItem" : "Item 2"
    },
    {
      "companyName" : "Supermarket 2",
      "customerAddress" : "32 Dunnock Dr, Costessey, Norwich, Norfolk NR8 5FF",
      "orderedItem" : "Item 1"
    },
    {
      "companyName" : "Supermarket 8",
      "customerAddress" : "12 Buxton Rd, Ilford, Greater London IG2 7HG",
      "orderedItem" : "Item 3"
    },
    {
      "companyName" : "Supermarket 3",
      "customerAddress" : "731 New Mill Rd, London SW8",
      "orderedItem" : "Item 1"
    },
    {
      "companyName" : "Supermarket 3",
      "customerAddress" : "Unnamed Road, Inverness, Highland IV5 7PW",
      "orderedItem" : "Item 3"
    },
    {
      "companyName" : "Supermarket 2",
      "customerAddress" : "731 New Mill Rd, London SW8",
      "orderedItem" : "Item 8"
    },
    {
      "companyName" : "Supermarket 1",
      "customerAddress" : "12 Buxton Rd, Ilford, Greater London IG2 7HG",
      "orderedItem" : "Item 3"
    },
    {
      "companyName" : "Supermarket 2",
      "customerAddress" : "32 Dunnock Dr, Costessey, Norwich, Norfolk NR8 5FF",
      "orderedItem" : "Item 8"
    }
  ]
}
```

Using Node.Js and Angular.Js, please implement a working solution to perform the following operations:

- show all orders
- show all orders from a particular company
- show all orders from a particular address
- show all orders that match the both criterias (reunion for data)
- delete a particular order
- the possibility (a button) to show how often each item has been ordered

You need to consider the following:

- the project must be designed in a scalable manner
- the design doesn't matter so any fancy design doesn't count
- you must design the classes in EcmaScript 6
- the code must be easy to read


## Result

I builded the app with two controllers. One of them was for API calls for an easy-to-use structure for the Angular framework.
The other controller served the static HTML files in order to show the pages that are requested by the user.
In this open-source demo, I disabled the delete button to avoid persistence issues.

The data processing is made in the **ordersModel.js** under **models** folder.

Also I've written the basic JsDoc keywords tags in order to make the code easy to read.

Anyone is free to fork and develop based on this solution. It's nice to have a link back if it's possible.


##Contact

- My resume: [Robert Dumitrescu resume](http://rdumitrescu.com/resume)
- My portfolio: [Robert Dumitrescu portfolio](http://rdumitrescu.com/portfolio/)
- LinkedIn profile: [Robert Dumitrescu LinkedIn profile](https://ro.linkedin.com/in/robertdumitrescu)
- CodePen profile: [Robert Dumitrescu CodePen profile](http://codepen.io/robertdumitrescu/)


