export const initialState = {
  blogs: [
    {
      id: 1,
      title: "Think in a JavaScript Way",
      category: ["JavaScript"],
      blogImg:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "Learn With Sumit",
      authorAvatar:
        "https://yt3.ggpht.com/D9X91qRuvaOSs2L5ai9ydYsfuW8sUYgeMs7gsCuGkbElWYtRmraazV6U9a277kGJ_MHEOTjdtcI=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "16",
      isShow: true,
    },
    {
      id: 2,
      title: "JavaScript All You Need To Know",
      category: ["JavaScript", "Vanilla JS"],
      blogImg:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "HM Nayem",
      authorAvatar:
        "https://yt3.ggpht.com/_laaRTCwOZ6hxLgPmjN8HnzzIlhWqyiwbD2kuofkSLx51FImoP0esGJVxyZm7oZ46Yby9MVz7g=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "13",
      isShow: true,
    },
    {
      id: 3,
      title: "Think in a Redux Way",
      category: ["JavaScript", "React", "Redux"],
      blogImg:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "Learn With Sumit",
      authorAvatar:
        "https://yt3.ggpht.com/D9X91qRuvaOSs2L5ai9ydYsfuW8sUYgeMs7gsCuGkbElWYtRmraazV6U9a277kGJ_MHEOTjdtcI=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "6",
      isShow: true,
    },
    {
      id: 4,
      title: "Python All You Need to Know",
      category: ["Python"],
      blogImg:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "HM Nayem",
      authorAvatar:
        "https://yt3.ggpht.com/_laaRTCwOZ6hxLgPmjN8HnzzIlhWqyiwbD2kuofkSLx51FImoP0esGJVxyZm7oZ46Yby9MVz7g=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "21",
      isShow: true,
    },
    {
      id: 5,
      title: "Think in a React Way",
      category: ["JavaScript", "React"],
      blogImg:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      author: "Learn With Sumit",
      authorAvatar:
        "https://yt3.ggpht.com/D9X91qRuvaOSs2L5ai9ydYsfuW8sUYgeMs7gsCuGkbElWYtRmraazV6U9a277kGJ_MHEOTjdtcI=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "10",
      isShow: true,
    },

    {
      id: 6,
      title: "C All You Need to Know",
      category: ["C"],
      blogImg:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "HM Nayem",
      authorAvatar:
        "https://yt3.ggpht.com/_laaRTCwOZ6hxLgPmjN8HnzzIlhWqyiwbD2kuofkSLx51FImoP0esGJVxyZm7oZ46Yby9MVz7g=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "11",
      isShow: true,
    },
    {
      id: 7,
      title: "Computer Science",
      category: ["Science", "CSE"],
      blogImg:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "freeCodeCamp.org",
      authorAvatar:
        "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "16",
      isShow: true,
    },
    {
      id: 8,
      title: "Web Programming with JavaScript",
      category: ["JavaScript", "Web"],
      blogImg:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "CS50",
      authorAvatar:
        "https://yt3.ggpht.com/ytc/AMLnZu_8E2fVaNH2D20xn32ph9axohUCgWaLpXO_tXJ14g=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "16",
      isShow: true,
    },
    {
      id: 9,
      title: "Redux Fundamental",
      category: ["React", "JavaScript", "Redux"],
      blogImg:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "HM Nayem",
      authorAvatar:
        "https://yt3.ggpht.com/_laaRTCwOZ6hxLgPmjN8HnzzIlhWqyiwbD2kuofkSLx51FImoP0esGJVxyZm7oZ46Yby9MVz7g=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "16",
      isShow: true,
    },

    {
      id: 10,
      title: "Machine Learning With Python",
      category: ["Python", "ML"],
      blogImg:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "CS50",
      authorAvatar:
        "https://yt3.ggpht.com/ytc/AMLnZu_8E2fVaNH2D20xn32ph9axohUCgWaLpXO_tXJ14g=s88-c-k-c0x00ffffff-no-rj",
      published: new Date().toDateString(),
      readDuration: "16",
      isShow: true,
    },
  ],
  items: [],
};
