import Link from "next/link";
import styles from "./common.module.css";

const Card = (curEl) => {
  const { id, email, gender, name, dob, picture, phone } = curEl;
  console.log("🚀 ~ file: Card.jsx:7 ~ Card ~ curEl:", curEl);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <img src={picture.large} width={"auto"} height={450} alt="..." />
          <div className={styles.card_data}>
            <div className="card-body ps-2">
              <p className="card-text">
                {" "}
                <span className={styles.font_class}> Frist Name:</span>{" "}
                {name.first}{" "}
              </p>
              <p className="card-text">
                {" "}
                <span className={styles.font_class}> Last Name:</span>{" "}
                {name.last}{" "}
              </p>
              <p className="card-text">
                {" "}
                <span className={styles.font_class}>Gender:</span> {gender}{" "}
              </p>
              <p className="card-text">
                {" "}
                <span className={styles.font_class}>Phone:</span> {phone}{" "}
              </p>
              <p className="card-text d-inline">
                {" "}
                <span className={styles.font_class}>Title:</span> {name.title}{" "}
              </p>
              <p className="card-text d-inline">
                {" "}
                <span className={styles.font_class}>Age:</span> {dob.age}{" "}
              </p>
              <p className="card-text">
                {" "}
                <span className={styles.font_class}> Email: </span> {email}{" "}
              </p>
              <span className="text-danger">
                {" "}
                <span className={styles.font_class}>Date of Birth:</span>
                {dob.date}{" "}
              </span>

              <Link href={`/public/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
