import Head from "next/head";
import * as React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [Dumbot, setDumbot] = React.useState(null);
  // React.useEffect(() => {
  //   var myLandbot = new Landbot.Popup({
  //     configUrl:
  //       "https://chats.landbot.io/v3/H-1050454-W9M72A1TJ2OV4S7A/index.json",
  //   });
  // });
  React.useEffect(() => {
    if (!DumbotExtApp) {
      return;
    }
    let DumbotC = DumbotExtApp.driver("react", {
      React: React,
      ReactDOM: ReactDOM,
    });

    setDumbot(
      <DumbotC
        botkey={"SPFj05jqH34LaV5vzV4hh"}
        initiallyClosed={false}
        allowClose={true}
        trigger={{
          size: "30px",
        }}
        mode="full"
        externalVariables={{
          test: {
            names: ["pietro", "tommaso", "filippo"],
          },
        }}
        onStateChanged={async (state) => {
          console.log("BOT STATE CHANGED", state);
        }}
        onBotFinished={(state) => {
          console.log("BOT FINISHED", state);
        }}
        onUserAction={(answer) => {
          console.log("GETTINMG USER ANSWER FROM BOT", answer);
        }}
        onSendAttachments={(files) => {
          console.log("GETTINMG FILES FROM BOT", files);
        }}
        theme={{
          global: {
            // font: {
            //   family: "'Comforter'",
            //   size: "20px",
            //   face: `/* cyrillic */
            //   @font-face {
            //     font-family: 'Comforter';
            //     font-style: normal;
            //     font-weight: 400;
            //     font-display: swap;
            //     src: url(https://fonts.gstatic.com/s/comforter/v1/H4clBXOCl8nQnlaql3Qq65u9uqc.woff2) format('woff2');
            //     unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
            //   }
            //   /* vietnamese */
            //   @font-face {
            //     font-family: 'Comforter';
            //     font-style: normal;
            //     font-weight: 400;
            //     font-display: swap;
            //     src: url(https://fonts.gstatic.com/s/comforter/v1/H4clBXOCl8nQnlaql3Qq4Ju9uqc.woff2) format('woff2');
            //     unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
            //   }
            //   /* latin-ext */
            //   @font-face {
            //     font-family: 'Comforter';
            //     font-style: normal;
            //     font-weight: 400;
            //     font-display: swap;
            //     src: url(https://fonts.gstatic.com/s/comforter/v1/H4clBXOCl8nQnlaql3Qq4Zu9uqc.woff2) format('woff2');
            //     unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            //   }
            //   /* latin */
            //   @font-face {
            //     font-family: 'Comforter';
            //     font-style: normal;
            //     font-weight: 400;
            //     font-display: swap;
            //     src: url(https://fonts.gstatic.com/s/comforter/v1/H4clBXOCl8nQnlaql3Qq75u9.woff2) format('woff2');
            //     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            //   }
            //   /* latin-ext */
            //   @font-face {
            //     font-family: 'Sora';
            //     font-style: normal;
            //     font-weight: 400;
            //     font-display: swap;
            //     src: url(https://fonts.gstatic.com/s/sora/v3/xMQOuFFYT72X5wkB_18qmnndmSdSnk-DKQJRBg.woff2) format('woff2');
            //     unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            //   }
            //   /* latin */
            //   @font-face {
            //     font-family: 'Sora';
            //     font-style: normal;
            //     font-weight: 400;
            //     font-display: swap;
            //     src: url(https://fonts.gstatic.com/s/sora/v3/xMQOuFFYT72X5wkB_18qmnndmSdSnk-NKQI.woff2) format('woff2');
            //     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            //   }`,
            // },
            colors: {
              // botBackground: "gray",
              // botBubbleColor: "red",
              // botFontColor: "#fff",
              // botUserBubbleColor: "yellow",
              // botUserFontColor: "cyan",
              // optionsColor: "#7D4CDB",
              // botUserAvatarBg: "red",
              // botAvatarBg: "green",
              // botFocusColor: "orange",
              // botHeaderLogoBgColor: "yellow",
              // botHeaderBgColor: "lightblue",
              // botHeaderFontColor: "yellow",
              // botFooterBgColor: "lightblue",
              // botFooterFontColor: "red",
              // botAvatarClockFontColor: "green",
              // botTriggerButtonHoverColor: "orange",
              // botTriggerButtonColor: "green",
              // botTriggerButtonBackgroundColor: "red",
              // botInputControlsFontColor: "orange",
              // botInputBoxBgColor: "blue",
              // botCloseButtonBgColor: "red",
              // botBackButtonBgColor: "yellow",
              // botCloseButtonFontColor: "orange",
              // botBackButtonFontColor: "orange",
            },
          },
          bot: {
            borderRadius: "20px",
            //fontFamily: "courier",
            // bubbleFontSize: "20px",
            // bubbleMaxWidth: "100%",
            // bubbleBoxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.90)",
            // bubblePxRadius: "18px",
            // bubblePadding: "12px",
            // headerHeight: "100px",
            // headerLogoSize: "40px",
            // headerFontSize: "16px",
            // headerText: "Welcome to this amazing experience",
            // headerTextAlign: "center",
            // footerHeight: "65px",
            // footerFontSize: "30px",
            // footerText: "Powered by Dumbot ttttt",
            // footerTextAlign: "center",
            // finalMessageContent: "Powered by mmmm!",
            // messageDelay: 1000,
            // avatarSize: "50px",
            // disableAvatars: true,
            // allowRestartOnEnd: false,
            // bubbleAnimationDuration: "0.5s",
            // maxBotColumnSize: "800px",
            // minBotColumnSize: "300px",
            avatarClock: true,
            //jsonViewerTheme: "solarized",
          },
        }}
        width="100%"
        height="100%"
        saveBotProgress={false}
        onCallHost={async () => {
          const res = await fetch("https://gorest.co.in/public/v1/users");
          return await res.json();
        }}
        onToggle={(opened) => {}}
      />
    );
    // DumbotExtApp({
    //   botkey: "q1P_-mNj8-t99LMvS_5I9",
    //   initiallyClosed: false,
    //   allowClose: true,
    //   mode: "inline",
    //   trigger: {
    //     size: "30px",
    //   },
    //   width: "100%",
    //   height: "100%",
    //   onToggle: function (opened) {
    //     // if (opened) {
    //     //   debugger;
    //     //   botContainer.classList.remove("closed");
    //     //   botContainer.classList.add("opened");
    //     // } else {
    //     //   botContainer.classList.remove("opened");
    //     //   botContainer.classList.add("closed");
    //     // }
    //   },
    //   onCallHost: async () => {
    //     const res = await fetch("https://gorest.co.in/public/v1/users");
    //     if (res.ok) {
    //       return await res.json();
    //     }

    //     return {};
    //   },

    //   theme: {
    //     // botBackground: "linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)",
    //     // botShadow: "unset",

    //   },
    //   externalVariables: {
    //     test: {
    //       names: ["pietro", "tommaso", "filippo"],
    //     },
    //   },
    // }).render("#botContainer");
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

          <div id="botContainer" style={{ width: "500px", height: "500px" }}>
            {Dumbot}
          </div>
          {/* <div id="botContainer" className="dumbor-container closed"></div> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      <script src="http://localhost:6789/dumbot-client.bundle.js" />
      {/* <script src="https://dumbot-app-7e5ky.ondigitalocean.app/dumbot-client.bundle.js?egreertret" /> */}
      {/* <script
        SameSite="None; Secure"
        src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"
      ></script> */}
    </div>
  );
}
