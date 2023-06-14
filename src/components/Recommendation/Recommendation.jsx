import React, { useEffect, useState } from 'react';
import styles from "./Recommendation.module.css";
import Filter from './Filter/Filter';
import Footer from '../Footer/Footer';
import Cards from './Cards/Cards';
import { Container, Row, Col } from 'react-bootstrap';

export default function Recommendation() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} className="d-none d-md-block">
            <Filter />
          </Col>
          <Col md={10}>
            <div className={`text-center ${styles.client}`}>
              <div className="text-center position-relative d-flex justify-content-center align-items-center">
                <h2 className="mb-0 position-absolute">Workspaces</h2>
                <h3 className="mb-0">W</h3>
              </div>
            </div>
            <Cards />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
