 db.articles.update(
    { title: "Where does it come from?",
      excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      author: "Kiryl Krystsia",
      tag: "other",
      comments: [
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        author: "Vl. Vasechkin",
        rate: 5,
    ]
  }, {
    $setOnInsert: {date: new Date()}
  }, {
    upsert: true
  })
