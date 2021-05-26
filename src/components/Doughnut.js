import React from "react";
import "./Doughnut.css";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart() {
  return (
    <div className="doughnutChart">
      <p className="doughnutChart__header">Overview</p>
      <div className="doughnutChart__dough">
        <Doughnut
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
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
