import Head from "next/head";
import * as React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [Dumbot, setDumbot] = React.useState(null);
  React.useEffect(() => {
    // rgb(0 0 0 / 20%) 0px -1px 14px 0px
    // var myLandbot = new Landbot.Livechat({
    //   configUrl:
    //     "https://chats.landbot.io/v3/H-1012257-80E97G8O8QQ65MYF/index.json",
    // });
  });
  React.useEffect(() => {
    let DumbotC = DumbotExtApp.driver("react", {
      React: React,
      ReactDOM: ReactDOM,
    });

    setDumbot(
      <DumbotC
        botkey={"q1P_-mNj8-t99LMvS_5I9"}
        initiallyClosed={false}
        allowClose={true}
        trigger={{
          size: "30px",
        }}
        mode="chat"
        externalVariables={{
          test: {
            names: ["pietro", "tommaso", "filippo"],
          },
        }}
        theme={{
          global: {
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
            borderRadius: "10px",
            fontFamily: "courier",
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
            maxBotColumnSize: "800px",
            // minBotColumnSize: "300px",
            avatarClock: false,
          },
        }}
        width="100%"
        height="100%"
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

          <div id="botContainer">{Dumbot}</div>
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
      <script src="http://localhost:9000/dumbot-distribute.js" />
      {/* <script
        SameSite="None; Secure"
        src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"
      ></script> */}
    </div>
  );
}
