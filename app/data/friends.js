// 1.You should save your application's data inside of app/data/friends.js as an array of objects.

var friends = [
    {
      name: "Harry",
      photo: "https://i.ytimg.com/vi/pIrOAyXIjak/maxresdefault.jpg",
      scores: [
        "5",
        "1",
        "1",
        "1",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
      ]
    },
    {
      name: "Hermione",
      photo: "https://i.ytimg.com/vi/q1qmQHx1sSg/maxresdefault.jpg",
      scores: [
        "4",
        "2",
        "5",
        "1",
        "3",
        "5",
        "2",
        "1",
        "3",
        "2"
      ]
    },
    {
      name: "Ron",
      photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/11/09/ron-weasley.jpg?w968h681",
      scores: [
        "5",
        "2",
        "5",
        "2",
        "4",
        "1",
        "3",
        "2",
        "5",
        "5"
      ]
    },
    {
      name: "Khristian",
      photo: "https://lh3.googleusercontent.com/a-/AAuE7mArZnkMyrpP3bhT5Y0B7LbPp4O6QAhCqbyyu11W=s640-rw-il",
      scores: [
        "3",
        "3",
        "4",
        "2",
        "2",
        "1",
        "3",
        "2",
        "2",
        "3"
      ]
    },
    {
      name: "Nicholas",
      photo: "https://i1.sndcdn.com/avatars-000053017650-qddye1-t500x500.jpg",
      scores: [
        "4",
        "3",
        "4",
        "1",
        "2",
        "2",
        "2",
        "3",
        "1",
        "4"
      ]
    },
    {
      name: "Matt",
      photo: "https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/52025837_10156621023200020_4224380788390494208_n.jpg?_nc_cat=106&_nc_ht=scontent.fybz2-2.fna&oh=2b05b883d3d5bcb5cbb6a052104bb610&oe=5D1D9C80",
      scores: [
        "4",
        "4",
        "1",
        "1",
        "4",
        "2",
        "5",
        "5",
        "4",
        "1"
      ]
    }
  
  ];
  
  // Here we export the array. This makes it accessible to other files using require.
  module.exports = friends;