import shortid from "shortid";

export let conversations = [
  //   {
  //     username: "",
  //     imageUrl: "",
  //     status: "",
  //     messages: [
  //       {
  //         sentBy: "me",
  //         message: "Lorem, ipsum.",
  //       },
  //       {
  //         sentBy: "",
  //         message: "Lorem, ipsum dolor.",
  //       },
  //     ],
  //   },

  {
    id: shortid.generate(),
    status: "active",
    imageUrl:
      "https://image.shutterstock.com/image-photo/beautiful-african-american-woman-smiling-260nw-402466177.jpg",
    imageAlt: "Daryl Duckmanton",
    name: "Daryl Duckmanton",
    createdAt: "Apr 16",
    latestMessageText: "This is a message",
    messages: [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Ok then",
        createdAt: "Apr 16",
        isMyMessage: true,
      },
      {
        imageUrl:
          "https://image.shutterstock.com/image-photo/beautiful-african-american-woman-smiling-260nw-402466177.jpg",
        imageAlt: "Daryl Duckmanton",
        messageText: `
                Yeah I think it's best we do that. Otherwise things won't work well at all. 
                I'm adding more text here to test the sizing of the speech bubble and the 
                wrapping of it too.
            `,
        createdAt: "Apr 16",
        isMyMessage: false,
      },
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Maybe we can use Jim's studio.",
        createdAt: "Apr 15",
        isMyMessage: true,
      },
      {
        imageUrl:
          "https://image.shutterstock.com/image-photo/beautiful-african-american-woman-smiling-260nw-402466177.jpg",
        imageAlt: "Daryl Duckmanton",
        messageText: `
                All I know is where I live it's too hard
                to record because of all the street noise.
            `,
        createdAt: "Apr 15",
        isMyMessage: false,
      },
      {
        imageUrl: null,
        imageAlt: null,
        messageText: `
                Well we need to work out sometime soon where
                we really want to record our video course.
            `,
        createdAt: "Apr 15",
        isMyMessage: true,
      },
      {
        imageUrl:
          "https://image.shutterstock.com/image-photo/beautiful-african-american-woman-smiling-260nw-402466177.jpg",
        imageAlt: "Daryl Duckmanton",
        messageText: `
                I'm just in the process of finishing off the
                last pieces of material for the course.
            `,
        createdAt: "Apr 15",
        isMyMessage: false,
      },
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "How's it going?",
        createdAt: "Apr 13",
        isMyMessage: true,
      },
      {
        imageUrl:
          "https://image.shutterstock.com/image-photo/beautiful-african-american-woman-smiling-260nw-402466177.jpg",
        imageAlt: "Daryl Duckmanton",
        messageText: " Hey mate what's up?",
        createdAt: "Apr 13",
        isMyMessage: false,
      },
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Hey Daryl?",
        createdAt: "Apr 13",
        isMyMessage: true,
      },
    ],
  },
  {
    id: shortid.generate(),
    status: "offline",
    imageUrl:
      "https://media.istockphoto.com/photos/side-portrait-of-laughing-african-american-man-looking-up-picture-id1142003972?k=20&m=1142003972&s=612x612&w=0&h=583slP1jSnOeOvU_-g7XCvFSaGaivDvKQj2KNv34Kr4=",
    imageAlt: "Kim O'Neil",
    name: "Kim O'Neil",
    createdAt: "Oct 20",
    latestMessageText: "Ok fair enough. Well good talking to you.",
    messages: [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Ok fair enough. Well good talking to you.",
        createdAt: "Oct 20",
        isMyMessage: true,
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/side-portrait-of-laughing-african-american-man-looking-up-picture-id1142003972?k=20&m=1142003972&s=612x612&w=0&h=583slP1jSnOeOvU_-g7XCvFSaGaivDvKQj2KNv34Kr4=",
        imageAlt: "Kim O'Neil",
        messageText: `
                Not sure exactly yet. It will be next year sometime. Probably late.
            `,
        createdAt: "Oct 20",
        isMyMessage: false,
      },
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Yeah I know. But oh well. So when is the big date?",
        createdAt: "Oct 19",
        isMyMessage: true,
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/side-portrait-of-laughing-african-american-man-looking-up-picture-id1142003972?k=20&m=1142003972&s=612x612&w=0&h=583slP1jSnOeOvU_-g7XCvFSaGaivDvKQj2KNv34Kr4=",
        imageAlt: "Kim O'Neil",
        messageText: `
                Well I know you like doing that stuff. But honestly I think
                you are already really talented. It's a shame you haven't found
                what you are looking for yet.
            `,
        createdAt: "Oct 19",
        isMyMessage: false,
      },
      {
        imageUrl: null,
        imageAlt: null,
        messageText: `
                I'm doing ok. Just working on building some applications to
                bulk up my resume, so I can get a better job.
            `,
        createdAt: "Oct 19",
        isMyMessage: true,
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/side-portrait-of-laughing-african-american-man-looking-up-picture-id1142003972?k=20&m=1142003972&s=612x612&w=0&h=583slP1jSnOeOvU_-g7XCvFSaGaivDvKQj2KNv34Kr4=",
        imageAlt: "Kim O'Neil",
        messageText: `
                I've just been really busy at work myself, looking to get
                married sometime next year too. How are you going?
            `,
        createdAt: "Oct 19",
        isMyMessage: false,
      },
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Yes it has been a little while",
        createdAt: "Oct 19",
        isMyMessage: true,
      },
      {
        imageUrl:
          "https://media.istockphoto.com/photos/side-portrait-of-laughing-african-american-man-looking-up-picture-id1142003972?k=20&m=1142003972&s=612x612&w=0&h=583slP1jSnOeOvU_-g7XCvFSaGaivDvKQj2KNv34Kr4=",
        imageAlt: "Kim O'Neil",
        messageText: "Hey!!!! Have not spoken to you for a while",
        createdAt: "Oct 19",
        isMyMessage: false,
      },
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Hi Kim?",
        createdAt: "Oct 19",
        isMyMessage: true,
      },
    ],
  },
  {
    id: shortid.generate(),
    status: "active",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-BqQyskuZ7X1EIqJu0JQNPet066GBercGRcPZt1Xsx5oCzcEDsPZ1_vkMW29tiMqK00&usqp=CAU",
    imageAlt: "Ariana Grande",
    name: "Ariana Grande",
    createdAt: "1 week ago",
    latestMessageText: "Yes I love how Python does that",
    messages: [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Hi",
        createdAt: "1 week ago",
        isMyMessage: true,
      },
    ],
  },
  {
    id: shortid.generate(),
    status: "offline",
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
    imageAlt: "Anabella Ariande",
    name: "Anabella Ariande",
    createdAt: "2:49 PM",
    latestMessageText: "Yeah Miami Heat are done",
    messages: [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Hi",
        createdAt: "2:49",
        isMyMessage: true,
      },
    ],
  },
  {
    id: shortid.generate(),
    status: "active",
    imageUrl:
      "https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png",
    imageAlt: "Douglas Johannasen",
    name: "Douglas Johannasen",
    createdAt: "6:14 PM",
    latestMessageText: "No it does not",
    messages: [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Hi",
        createdAt: "6:14 PM",
        isMyMessage: true,
      },
    ],
  },
  {
    id: shortid.generate(),
    status: "active",
    imageUrl:
      "https://www.dailymoss.com/wp-content/uploads/2019/08/funny-profile-pic59.jpg",
    imageAlt: "Jacob Manly",
    name: "Jacob Manly",
    createdAt: "3 secs ago",
    latestMessageText: "Just be very careful doing that",
    messages: [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Hi",
        createdAt: "3 secs ago",
        isMyMessage: true,
      },
    ],
  },
  {
    id: shortid.generate(),
    status: "active",
    imageUrl:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    imageAlt: "Stacey Wilson",
    name: "Stacey Wilson",
    createdAt: "30 mins ago",
    latestMessageText: "Awesome!!! Congratulations!!!!",
    messages: [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Hi",
        createdAt: "30 mins ago",
        isMyMessage: true,
      },
    ],
  },
  {
    id: shortid.generate(),
    status: "offline",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg",
    imageAlt: "Stan George",
    name: "Stan George",
    createdAt: "1 week ago",
    latestMessageText: "Good job",
    messages: [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Hi",
        createdAt: "1 week ago",
        isMyMessage: true,
      },
    ],
  },
  {
    id: shortid.generate(),
    status: "offline",
    imageUrl:
      "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
    imageAlt: "Sarah Momes",
    name: "Sarah Momes",
    createdAt: "1 year ago",
    latestMessageText: "Thank you. I appreciate that.",
    messages: [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: "Hi",
        createdAt: "1 year ago",
        isMyMessage: true,
      },
    ],
  },
];

export const me = {
  // id
  // / username,
  // email
  // status
  // url
  // joinedAt
  // description\
};
