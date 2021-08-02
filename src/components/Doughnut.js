import React, { useState, useEffect } from "react";
import "./Doughnut.css";
import { Doughnut } from "react-chartjs-2";
import { db } from "../firebase";

export default function DoughnutChart() {
  const [wazobiaRecordings, setWazobiaRecordings] = useState([]);
  const [cityRecordings, setCityRecordings] = useState([]);
  const [raypowerRecordings, setRaypowerRecordings] = useState([]);

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

    const getRaypowerRecordings = async () => {
      try {
        let snapShot = await db
          .collection("Channels")
          .doc("Raypower")
          .collection("AnalyzedRecordings")
          .get();
        let analyzedRecordings = snapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setRaypowerRecordings(analyzedRecordings);
      } catch (errors) {
        alert(errors);
      }
    };

    getWazobiaRecordings();
    getCityRecordings();
    getRaypowerRecordings();
  }, []);
  return (
    <div className="doughnutChart">
      <p className="doughnutChart__header">Overview</p>
      <div className="doughnutChart__dough">
        <Doughnut
          options={{
            maintainAspectRatio: false,
          }}
          data={{
            labels: ["WazobiaFM", "CityFM", "RaypowerFM"],
            datasets: [
              {
                label: "Radio channels Overview",
                data: [
                  wazobiaRecordings.length,
                  cityRecordings.length,
                  raypowerRecordings.length,
                ],
                backgroundColor: ["#152238", "rgb(54, 162, 235)", "#851e3e"],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
