import React from "react";
import { Navbar } from "./vault-contents/Navbar";
import { Main } from "./vault-contents/Main";

function Vault() {
	return (
		<div className="Vault">
			<Navbar />
			<Main />
		</div>
	);
}

export default Vault;