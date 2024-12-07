import React from "react";
import { History } from "lucide-react";

const HistoryList = ({ transferHistory }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-md transition duration-500">
      <h4 className="text-lg font-bold mb-4 flex items-center">
        <History className="mr-2" /> Transfer History
      </h4>
      <ul className="space-y-2">
        {transferHistory.map((history) => (
          <li
            key={history.id}
            className="p-2 bg-white border rounded-md shadow-sm"
          >
            <div className="flex justify-between">
              <span>{history.date}</span>
              <span className="font-semibold">{history.amount}</span>
            </div>
            <p className="text-gray-600">To: {history.recipient}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;