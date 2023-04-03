import LeakCheckAPI from "./src/LeakCheckAPI.js";
const client = new LeakCheckAPI();

client.setApiKey("")

client.setType("email");

client.setQuery("coolkid@gmail.com");

const response = await client.run();

console.log(response)
