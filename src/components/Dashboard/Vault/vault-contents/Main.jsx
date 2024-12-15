import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";
import Files from "./Files.jsx";
import { Passkeys } from "./PassKeys.jsx";

export function Main() {
	return (
		<div className="w-full max-w-4xl mx-auto p-6">
			<Tabs defaultValue="files" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="files">Files</TabsTrigger>
					<TabsTrigger value="passkeys">Passkeys</TabsTrigger>
				</TabsList>

				<TabsContent value="files">
					<Files />
				</TabsContent>

				<TabsContent value="passkeys">
					<Passkeys />
				</TabsContent>
			</Tabs>
		</div>
	);
}