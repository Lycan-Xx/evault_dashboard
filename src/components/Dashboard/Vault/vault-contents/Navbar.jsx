import React from "react";
import { FolderKanban } from "lucide-react";

export function Navbar() {
	return (
		<nav className="bg-blue-600 text-white p-4">
			<div className="max-w-4xl mx-auto flex items-center gap-2">
				<FolderKanban className="h-6 w-6" />
				<h1 className="text-xl font-semibold">File Manager</h1>
			</div>
		</nav>
	);
}
