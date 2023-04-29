exports.users = (req, res) => {
  res.json({
    GF: [
      {
        id: 1,
        name: "Babe",
        text: "I love purba",
      },
      {
        id: 2,
        name: "Mom",
        text: "I love My Mom",
      },
    ],
  });
};
