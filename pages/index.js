import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
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
          <div id="botContainer" className="dumbor-container closed"></div>
          {/* <div id="botContainer" className="db2"></div> */}
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
      <script
        dangerouslySetInnerHTML={{
          __html: `
      window.addEventListener("load", function(){
        const botContainer = document.getElementById("botContainer");
        DumbotExtApp({
          botkey: "q1P_-mNj8-t99LMvS_5I9",
          initiallyClosed:true,
          allowClose: true,
          onToggle: function(opened){
            if(opened) {
              botContainer.classList.remove("closed");
              botContainer.classList.add("opened");
            } else {
              botContainer.classList.remove("opened");
              botContainer.classList.add("closed");
            }
          },
          theme: {
           // botBackground: "linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)",
            // botShadow: "unset",
            // fontFamily: "monospace",
            // botBubbleColor: "red",
            // botFontColor: "#fff",
            // userBubbleColor: "yellow",
            // userFontColor: "blue",
            // bubbleFont: "14px",
            // bubbleMaxWidth: "50%",
            // bubbleBoxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
            // bubblePadding: "12px",
            // optionsColor: "#7D4CDB",
            // userAvatarBg: "#fff",
            // botAvatarBg: "#fff",
            // userAvatarColor: "#4a4d70",
            // botAvatarColor: "#4a4d70",
            // accentColor: "orange",
            // focusColor: "orange",
            // borderRadius: "10px",
            // headerHeight: "100px",
            // headerLogoSize:"40px",
            // headerBgColor: "orange",
            // headerLogoBgColor:"#fff",
            // headerFontColor: "#fff",
            // headerFontSize: "16px",
            // headerText:"Header text coming from hosting site!",
            // headerTextAlign:"center",
            // footerBgColor: "orange",
            // footerFontColor:"#fff",
            // footerHeight:"65px",
            // footerFontSize:"12px",
            // footerText:"Footer text coming from hosting site!",
            // footerTextAlign:"center",
            // inputBoxBgColor:"gray"
          },
          externalVariables: {
            test: {
              names:['pietro','tommaso','filippo']
            }
          }

         }).render('#botContainer');
    });
    
      `,
        }}
      ></script>
    </div>
  );
}
