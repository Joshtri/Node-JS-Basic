import timers from "timers/promises";

// console.info(new Date());

// const name = "Yostry"
// await timers.setTimeout(5000, name);
// console.info(new Date());
// console.info(name);


for await (const StartTime of timers.setInterval(1000, "ignored")){
    console.info(`Start time at ${new Date}`);
}