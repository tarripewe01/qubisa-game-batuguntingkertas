/* eslint-disable no-unused-vars */

import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  state = {
    data: [
      {
        nama: "gunting",
        lawan: "batu",
        simbol: "✌️",
      },
      {
        nama: "batu",
        lawan: "kertas",
        simbol: "✊",
      },
      {
        nama: "kertas",
        lawan: "gunting",
        simbol: "👋",
      },
    ],
    pilihanPemain: "",
    pilihanKomputer: "",
    skorPemain: 0,
    skorKomputer: 0,
  };

  handleAksi = (index) => {
    var indexRandom = Math.floor(Math.random() * this.state.data.length);

    var pilihanKomputer = this.state.data[indexRandom];
    var pilihanPemain = this.state.data[index];

    this.setState({ pilihanKomputer: pilihanKomputer.simbol });
    this.setState({ pilihanPemain: pilihanPemain.simbol });

    if (pilihanPemain.nama === pilihanKomputer.lawan) {
      this.setState({ skorPemain: this.state.skorPemain + 1 });
    }
    if (pilihanPemain.lawan === pilihanKomputer.nama) {
      this.setState({ skorKomputer: this.state.skorKomputer + 1 });
    }
  };

  handleReset() {
    this.setState({ pilihanPemain: "" });
    this.setState({ pilihanKomputer: "" });
    this.setState({ skorPemain: 0 });
    this.setState({ skorKomputer: 0 });
  }
  render() {
    return (
      <div className="App">
        <h1>BATU GUNTING KERTAS</h1>
        <h2 style={{ color: "white", fontSize: 40 }}>
          score:
          <span style={{ fontSize: 40, marginLeft: 10 }}>
            {this.state.skorPemain} - {this.state.skorKomputer}
          </span>
        </h2>

        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            borderWidth: 5,
            borderColor: "yellow",
          }}
        >
          <div
            className="border-warning"
            style={{
              borderWidth: 3,
              borderColor: "yellow",
              border: 3,
              marginRight: 300,
            }}
          >
            <h2>PEMAIN</h2>
            <p style={{ fontSize: 60, color: "white" }}>
              {this.state.pilihanPemain ? this.state.pilihanPemain : "READY"}
            </p>
          </div>

          <div>
            <h2>KOMPUTER</h2>
            <p style={{ fontSize: 60, color: "white" }}>
              {this.state.pilihanKomputer
                ? this.state.pilihanKomputer
                : "READY"}
            </p>
          </div>
        </Container>

        <div>
          <Button
            style={{ width: "50%", height: 50, cursor: "pointer" }}
            variant="danger"
            onClick={() => this.handleReset()}
          >
            RESET PERMAINAN
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 60,
            marginTop: 50,
          }}
        >
          {this.state.data.map((tangan, idx) => (
            <div
              key={idx}
              onClick={() => this.handleAksi(idx)}
              style={{ width: 150, cursor: "pointer" }}
            >
              <p style={{ textAlign: "start" }}>{tangan.simbol}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
