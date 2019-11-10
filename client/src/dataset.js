window.Dataset = {
  //Factory to create an incremented set of numbers
  increment: (function(lowest, highest) {
    var set = [];
    for (var i = lowest; i <= highest; i++) {
      set.push(i);
      set.push(i + 0.5); //incrementation step
    }

    return set;
  })(0, 10), //starts at 0, ends at 10

  //Test set of fake data
  person: [
    {
      id: "1",
      name: "Mona",
      description: [
        {
          id: "1",
          text: "Lisa",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              edit: "This is the second edit"
            },
            {
              id: "2",
              date: "4 hours ago",

              edit: "This is first edit"
            }
          ]
        },
      ]
    },
    {
      id: "2",
      name: "Lisa",
      description: [
        {
          id: "1",
          text: "Mona",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              edit: "This is the second edit"
            },
            {
              id: "2",
              date: "4 hours ago",

              edit: "This is first edit"
            }
          ]
        },
      ]
    }
  ]
       