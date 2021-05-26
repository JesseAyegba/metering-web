import React from "react";
import "./BarChart.css";
import { Bar } from "react-chartjs-2";

export default function BarChart({ bg }) {
  return (
    <div style={{ backgroundColor: bg }} className="barChart">
      <p className="barChart__header">Audience Overview</p>
      <div className="barChart__bar">
        <Bar
          className="bar"
          options={{
            maintainAspectRatio: false,
          }}
          data={{
            labels: ["WazobiaFM", "CityFM", "HebronFM"],
            datasets: [
              {
                label: "Radio channels Overview",
                data: [50, 70, 20],
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
