# How to use

```JS
import LeakCheckAPI from "./src/LeakCheckAPI.js";
const client = new LeakCheckAPI();

client.setApiKey("87b77b2633fcff103db71bf637886acfc049e187")

client.setType("email");

client.setQuery("coolkid@gmail.com");

const response = await client.run();

console.log(response)

```

## Summary 
This was made using the Extended API documentation provided by the official website https://wiki.leakcheck.io/en/api/extended.

## Requirements 
*  Node.js version 16 or higher

## Developer 
* fanta#1337
