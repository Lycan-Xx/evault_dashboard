import React, { useState } from "react";
import { Eye, EyeOff, Edit, Trash2, Key } from "lucide-react";
import { Button } from "./ui/button.tsx";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog.tsx";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "./ui/alert-dialog.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";

export function Passkeys() {
	const [passkeys, setPasskeys] = useState([
		{ id: "1", name: "Gmail", value: "••••••••", visible: false },
		{ id: "2", name: "GitHub", value: "••••••••", visible: false },
	]);

	const [editDialogOpen, setEditDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const togglePasskeyVisibility = (id) => {
		setPasskeys(
			passkeys.map((pk) =>
				pk.id === id ? { ...pk, visible: !pk.visible } : pk
			)
		);
	};

	const handleEdit = (id) => {
		setSelectedItem(id);
		setEditDialogOpen(true);
	};

	const handleDelete = (id) => {
		setSelectedItem(id);
		setDeleteDialogOpen(true);
	};

	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
			<div className="p-6">
				<div className="space-y-4">
					{passkeys.map((passkey) => (
						<div
							key={passkey.id}
							className="flex items-center justify-between p-4 bg-white rounded-lg border"
						>
							<div className="flex items-center gap-3">
								<Key className="h-5 w-5 text-blue-500" />
								<div>
									<h3 className="font-medium">{passkey.name}</h3>
									<p className="text-sm font-mono">
										{passkey.visible ? passkey.value : "••••••••"}
									</p>
								</div>
							</div>
							<div className="flex gap-2">
								<Button
									variant="outline"
									size="icon"
									onClick={() => togglePasskeyVisibility(passkey.id)}
								>
									{passkey.visible ? (
										<EyeOff className="h-4 w-4" />
									) : (
										<Eye className="h-4 w-4" />
									)}
								</Button>
								<Button
									variant="outline"
									size="icon"
									onClick={() => handleEdit(passkey.id)}
								>
									<Edit className="h-4 w-4" />
								</Button>
								<Button
									variant="outline"
									size="icon"
									onClick={() => handleDelete(passkey.id)}
								>
									<Trash2 className="h-4 w-4" />
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Edit Dialog */}
			<Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit Passkey</DialogTitle>
						<DialogDescription>
							Update the passkey details below
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid gap-2">
							<Label htmlFor="passkey-name">Name</Label>
							<Input id="passkey-name" />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="passkey-value">Value</Label>
							<Input id="passkey-value" type="password" />
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setEditDialogOpen(false)}>
							Cancel
						</Button>
						<Button onClick={() => setEditDialogOpen(false)}>Save</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Dialog */}
			<AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete the
							selected passkey.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Delete</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
