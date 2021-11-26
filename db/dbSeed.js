const pollsRaw = require("../poll master.json");
const dbManager = require("./dbManager");

// let polls = [
//   {
//     _id: "123",
//     title: "test poll1",
//     options: [
//       { prompt: "option1", votes: 0 },
//       { prompt: "option2", votes: 3 },
//     ],
//   },
//   {
//     _id: "sampleId2",
//     title: "test poll2",
//     options: [
//       { prompt: "option1", votes: 3 },
//       { prompt: "option2", votes: 5 },
//     ],
//   },
// ];

let polls = pollsRaw.map((el) => {
  let options = [];
  let totalVotes = 0;
  for (let i = 1; i < 6; i++) {
    if (el[`option${i}`]) {
      options.push({ prompt: el[`option${i}`], votes: el[`option${i}Vote`] });
      totalVotes += el[`option${i}Vote`];
    }
  }
  return {
    title: el.title,
    options: options,
    owner: "1@1.com",
    totalVotes: totalVotes,
    public: el.public,
    createdAt: el.createdAt,
    ttl: el.ttl,
  };
});

// polls.forEach(async (el) => {
//   await dbManager.create("Polls", el);
// });

// (async () => {
//   let polls = await dbManager.read("Polls", {});
//   console.log(polls.map((el) => el._id.toString()));
// })();