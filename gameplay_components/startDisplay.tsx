import { gameStateContext } from "components/app";
import { useContext } from "react";
import styles from "styles/components/gameplay.module.css";
import { BestToday, Instruction } from "./others";

export default function StartDisplay({ visible }: { visible: boolean }) {
  const [, setGameState] = useContext(gameStateContext);

  const className = `${styles.startDisplay} ${
    visible ? styles.visible : styles.invisible
  }`;
  return (
    <div className={className}>
      <BestToday />
      <div className={styles.spacer} />
      <Instruction />
      <div className={styles.spacer} />
      <div className={styles.actionButtonsBox}>
        <button
          className={`${styles.button} t-carter`}
          onClick={() => setGameState("playing")}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}