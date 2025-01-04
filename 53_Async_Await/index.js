// In this session we are gonna talk about the async/await
// It is a special syntax to work with promises in JavaScript.
async function nishu() {
  let Delhiwthr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("32 deg");
    }, 2000);
  });
  let Haryanawthr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("29 deg");
    }, 4000);
  });
  // Delhiwthr.then(alert)
  // Haryanawthr.then(alert)
  console.log("Fetching the Data Wait....");
  let delhiw = await Delhiwthr;
  console.log("Weather of Delhi is : " + delhiw);
  console.log("Fetching the Data Wait....");
  let haryanaw = await Haryanawthr;
  console.log("Weather of Haryana is : " + haryanaw);
  return [delhiw, haryanaw];
}
const example = async () => {
  console.log("Just an Example Function");
};
const Data = async () => {
  console.log("Welcome to the Weather Broadcast");
  let x = await nishu();
  let y = await example();
  // x.then((value) => {
  //   console.log(value);
  // });
};

Data();


