import React from 'react'
import ReactFrappeChart from "react-frappe-charts";
const Charts = ({ chartType, barChartData }) => {
    return (
        <div>
            <ReactFrappeChart
                 type={chartType}
                colors={["#295DFA"]}
                axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                height={250}
                data={barChartData}
            />
        </div>
    )
}

export default Charts