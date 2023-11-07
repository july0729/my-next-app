import styles from './CatCard.module.css';

export interface ICatCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const CatCard: React.FC<ICatCard> = ({tag, title, body, author, time}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header} style={{backgroundColor: 'pink', height: '200px'}}>
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user} >
            <div style={{backgroundColor: 'skyblue', height: '40px', width: '40px', borderRadius: '50%'}}></div>
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
              d</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;

