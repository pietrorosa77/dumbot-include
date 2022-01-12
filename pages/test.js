import Head from "next/head";
import * as React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Home.module.css";
import { nanoid } from "nanoid";

export default function Test() {
  const [userID, setUserId] = React.useState("");
  const [agentID, setAgentId] = React.useState("");
  const [instance, setInstance] = React.useState();
  const [peerInstance, setPeer] = React.useState();
  //MkCg2zOPf_cff0ldNefCT
  const createConnection = (peer) => {
    const conn = peer.connect(
      "dumbotuser-6ec19da0-b59b-4cdb-8ba9-204b3d8ec9bd",
      {
        metadata: {
          nickname: "test",
          avatar:
            "https://gravatar.com/avatar/a7019b905617461978b3edf12c9c6b06?s=400&d=robohash&r=x",
        },
      }
    );
    conn.on("open", () => {
      console.log("creating new connection....");
      conn.on("data", (data) => {
        console.group("getting", data);
      });
      conn.on("error", (e) => {
        console.log("error connecting", e);
        if (conn && !conn.open && !peer.disconnected && !peer.destroyed) {
          createConnection(peer);
        }
      });
    });
    setInstance(conn);
  };

  React.useEffect(() => {
    const peer = new Peer("dumbotagent-Kajb8WeSp010bMNhBX4bq");
    peer.on("open", () => {
      createConnection(peer);
    });

    peer.on("error", (err) => {
      console.log("PEER ERROR", err);
      //   if (conn && !conn.open) {
      //     peer.reconnect();
      //   }
    });

    setPeer(peer);

    return () => {
      console.log(`Destroying chat instance`);
      peer.destroy();
    };
  }, [true]);

  const sendMessage = () => {
    try {
      instance.send("here's test message from agent");
    } catch (error) {
      debugger;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>PEERJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>PEERJS</h1>

        <button onClick={sendMessage}>send message</button>
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
      <script src="https://unpkg.com/peerjs@1.3.2/dist/peerjs.min.js" />
    </div>
  );
}
