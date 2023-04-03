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
