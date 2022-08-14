import dns from "dns/promises"; 
import { hostname } from "os";

// function callback(error,ip){
//     console.info(ip);
// }

const address = await dns.lookup(hostname, "www.google.com")

console.info(address.address);
console.info(address.family);

// dns.lookup(hostname ,"www.google.com", callback);