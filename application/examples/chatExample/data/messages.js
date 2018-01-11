module.exports = [{
    _id: Math.round(Math.random() * 1000000),
    voice: {
      unread: true,
      length: 1,
    },
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
      avatar: 'https://b-ssl.duitang.com/uploads/item/201712/17/20171217134253_Uk8HX.jpeg',
    },
  },{
    _id: Math.round(Math.random() * 1000000),
    text: 'Yes, and I use Gifted Chat!',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
      avatar: 'https://b-ssl.duitang.com/uploads/item/201712/17/20171217134253_Uk8HX.jpeg',
    },
    sent: true,
    received: true,
    // location: {
    //   latitude: 48.864601,
    //   longitude: 2.398704
    // },
  },{
    _id: Math.round(Math.random() * 1000000),
    text: 'Are you building a chat app?',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://b-ssl.duitang.com/uploads/item/201512/13/20151213193432_mGHdA.jpeg',
    },
  },{
    _id: Math.round(Math.random() * 1000000),
    text: "You are officially rocking GiftedChat.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://b-ssl.duitang.com/uploads/item/201512/13/20151213193432_mGHdA.jpeg',
    },
  },
];