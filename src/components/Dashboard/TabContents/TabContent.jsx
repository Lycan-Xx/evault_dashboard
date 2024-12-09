import React from "react";
import TransferForm from "./TransferForm";
import WithdrawForm from "./WithdrawForm";
import HistoryList from "./HistoryList";

const TabContent = ({ selectedTab, transferHistory }) => {
  switch (selectedTab) {
    case "Transfer":
      return <TransferForm />;
    case "Withdraw":
      return <WithdrawForm />;
    case "History":
      return <HistoryList transferHistory={transferHistory} />;
    default:
      return (

    	<div>
       		<h4 className="text-xl font-bold text-blue-600 mb-4">
         		 Welcome to eVault Dashboard!
        	</h4>
				<p className="text-gray-700">
					Here you can manage your accounts, transfer funds, and access services.
				</p>
     	 </div>
      
      );
  }
};

export default TabContent;