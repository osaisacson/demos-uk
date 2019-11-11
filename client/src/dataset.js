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
  //from:
  //https://www.theyworkforyou.com/mp/25390/karin_smyth/bristol_south#numerology
  //
  representatives: [
    {
      id: '1',
      fname: 'Karin',
      lname: 'Smyth',
      repImg: 'https://www.theyworkforyou.com/images/mpsL/25390.jpg',
      voteFreq:
        'Has voted in 80.56% of votes in this Parliament with this affiliation — average amongst MPs.',
      twitterUrl: 'https://twitter.com/karinsmyth',
      votingRecord: [
        //From https://www.theyworkforyou.com/mp/25390/karin_smyth/bristol_south/votes#social
        //Either model after above (general), or by the more detailed https://www.theyworkforyou.com/mp/25390/karin_smyth/bristol_south/divisions?policy=6670
        //Or, ideally, an option to just see the general issues as a start, and on click fold out to go to the individual issues.
        {
          id: '1',
          category: 'social issues',
          text: 'Consistently voted for equal gay rights',
          voted: 'yes'
        },
        {
          id: '2',
          category: 'social issues',
          text: 'Voted for allowing marriage between two people of same sex',
          voted: 'yes'
        },
        {
          id: '3',
          category: 'social issues',
          text:
            'Consistently voted for laws to promote equality and human rights',
          voted: 'yes'
        },
        {
          id: '4',
          category: 'social issues',
          text:
            'Voted for allowing terminally ill people to be given assistance to end their life',
          voted: 'yes'
        },
        {
          id: '5',
          category: 'foreign policy and defence',
          text:
            'Voted against use of UK military forces in combat operations overseas',
          voted: 'no'
        },
        {
          id: '6',
          category: 'foreign policy and defence',
          text: 'Voted against investigations into the Iraq war',
          voted: 'no'
        },
        {
          id: '7',
          category: 'foreign policy and defence',
          text: 'Voted for replacing Trident with a new nuclear weapons system',
          voted: 'yes'
        },
        {
          id: '8',
          category: 'foreign policy and defence',
          text: 'Generally voted for more EU integration',
          voted: 'yes'
        },
        {
          id: '9',
          category: 'foreign policy and defence',
          text:
            "Generally voted for a referendum on the UK's membership of the EU",
          voted: 'yes'
        },
        {
          id: '10',
          category: 'foreign policy and defence',
          text:
            'Generally voted for a right to remain for EU nationals already in living in the UK',
          voted: 'yes'
        },
        {
          id: '11',
          category: 'foreign policy and defence',
          text: 'Voted a mixture of for and against UK membership of the EU',
          voted: 'mix'
        },
        {
          id: '12',
          category: 'foreign policy and defence',
          text: 'Voted against military action against ISIL (Daesh)',
          voted: 'no'
        },
        {
          id: '13',
          category: 'welfare and benefits',
          text:
            'Generally voted for paying higher benefits over longer periods for those unable to work due to illness or disability',
          voted: 'yes'
        },
        {
          id: '14',
          category: 'welfare and benefits',
          text:
            'Almost always voted against a reduction in spending on welfare benefits',
          voted: 'no'
        }
      ]
    }
  ]
};
