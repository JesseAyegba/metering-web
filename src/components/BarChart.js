import React, { useEffect, useState } from "react";
import "./BarChart.css";
import { Bar } from "react-chartjs-2";
import { db } from "../firebase";

export default function BarChart({ bg }) {
  const [wazobiaRecordings, setWazobiaRecordings] = useState([]);
  const [cityRecordings, setCityRecordings] = useState([]);
  const [hebronRecordings, setHebronRecordings] = useState([]);

  useEffect(() => {
    const getWazobiaRecordings = async () => {
      try {
        let snapShot = await db
          .collection("Channels")
          .doc("Wazobia")
          .collection("AnalyzedRecordings")
          .get();
        let analyzedRecordings = snapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setWazobiaRecordings(analyzedRecordings);
      } catch (errors) {
        alert(errors);
      }
    };

    const getCityRecordings = async () => {
      try {
        let snapShot = await db
          .collection("Channels")
          .doc("City")
          .collection("AnalyzedRecordings")
          .get();
        let analyzedRecordings = snapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setCityRecordings(analyzedRecordings);
      } catch (errors) {
        alert(errors);
      }
    };

    const getHebronRecordings = async () => {
      try {
        let snapShot = await db
          .collection("Channels")
          .doc("Hebron")
          .collection("AnalyzedRecordings")
          .get();
        let analyzedRecordings = snapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setHebronRecordings(analyzedRecordings);
      } catch (errors) {
        alert(errors);
      }
    };

    getWazobiaRecordings();
    getCityRecordings();
    getHebronRecordings();
  }, []);
  return (
    <div style={{ backgroundColor: bg }} className="barChart">
      <p className="barChart__header">Audience Overview</p>
      <div className="barChart__bar">
        <Bar
          className="bar"
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                display: false,
                grid: {
                  display: false,
                },
              },
            },
          }}
          data={{
            labels: ["WazobiaFM", "CityFM", "HebronFM"],
            datasets: [
              {
                label: "Radio channels Overview",
                data: [
                  wazobiaRecordings.length,
                  cityRecordings.length,
                  hebronRecordings.length,
                ],
                backgroundColor: ["#152238", "rgb(54, 162, 235)", "#851e3e"],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
