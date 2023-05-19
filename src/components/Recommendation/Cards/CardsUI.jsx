import React from "react";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
import {Container, Image, Row} from "react-bootstrap";

function CardsUI(props) {
  return (
    <Container className={`card text-center shadow ${styles.card}`}>
        <Row>
            <div className={`${styles.overflow}`}>
                <Image
                    src={props.imgsrc}
                    alt="image1"
                    className={`card-img-top ${styles.cardImg}`}
                />
            </div>
            <div className={`card-body text-dark ${styles.cardBody}`}>
                <h4 className={`${styles.cardText}`}>{props.title}</h4>
                <p className="cardText text-secondry">{props.text}</p>
                <p className="card-text text-secondry">{props.date}</p>
                <p className="card-text text-secondry">{props.description}</p>
                <p className="card-text text-secondry">{props.price}</p>
                <p className="card-text text-secondry">{props.duration}</p>

                <Link
                    href="#"
                    to={"/WorkSpace"}
                    className={`btn mt-2 ${styles.btnWs}`}
                    style={{
                        borderRadius: "20px",
                        textDecoration: "none",
                        backgroundColor: "#4b86b4",
                        color: "white",
                        padding: "10px 15px 10px 15px",
                    }}
                >
                    go to your workspace
                </Link>
            </div>

        </Row>
      </Container>
  );
}

export default CardsUI;
