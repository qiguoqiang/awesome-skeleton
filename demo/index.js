const getSkeleton = require("../src/index");

getSkeleton({
  pageName: "baidu",
  pageUrl:
    "http://localhost/message-center.html#/?token=3082726f-8a29-49d8-9a7f-fd70f04fe258&msisdn=914581532239&routerKey=bd1693f1",
  openRepeatList: true,
  device: {
    name: "PFG",
    userAgent:
      "PFG-PRO-APP/ Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36",
    viewport: {
      width: 360,
      height: 850,
    },
  },
  minGrayBlockWidth: 10,
  minGrayPseudoWidth: 10,
  debug: true,
  debugTime: 3000,
  cookies: [
    {
      domain: ".baidu.com",
      expirationDate: 1568267131.555328,
      hostOnly: false,
      httpOnly: false,
      name: "BDORZ",
      path: "/",
      sameSite: "unspecified",
      secure: false,
      session: false,
      storeId: "0",
      value: "yyyyyyyyy",
      id: 2,
    },
  ],
}).then((result) => {
  // console.log(result.html);
});
