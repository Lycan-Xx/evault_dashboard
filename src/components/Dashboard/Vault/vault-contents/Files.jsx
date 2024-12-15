import React, { useState } from "react";
import { Download, Share2, Trash2, FileText, Image } from "lucide-react";
import { Button } from "./ui/button.tsx";
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
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";

function Files() {
	const [files] = useState([
		{
			id: "1",
			name: "Document.pdf",
			type: "PDF",
			size: "2.5 MB",
			lastModified: "2024-03-20",
		},
		{
			id: "2",
			name: "Image.jpg",
			type: "Image",
			size: "1.8 MB",
			lastModified: "2024-03-19",
		},
	]);

	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [shareDialogOpen, setShareDialogOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [shareLink, setShareLink] = useState("");

	const handleDelete = (id) => {
		setSelectedItem(id);
		setDeleteDialogOpen(true);
	};

	const handleShare = (id) => {
		setSelectedItem(id);
		setShareLink(`https://example.com/share/${id}`);
		setShareDialogOpen(true);
	};

	const getFileIcon = (type) => {
		switch (type.toLowerCase()) {
			case "image":
				return <Image className="h-5 w-5 text-blue-500" />;
			default:
				return <FileText className="h-5 w-5 text-blue-500" />;
		}
	};

	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
			<div className="p-6">
				<div className="space-y-4">
					{files.map((file) => (
						<div
							key={file.id}
							className="flex items-center justify-between p-4 bg-white rounded-lg border"
						>
							<div className="flex items-center gap-3">
								{getFileIcon(file.type)}
								<div>
									<h3 className="font-medium">{file.name}</h3>
									<p className="text-sm text-muted-foreground">
										{file.size} • {file.lastModified}
									</p>
								</div>
							</div>
							<div className="flex gap-2">
								<Button
									variant="outline"
									size="icon"
									onClick={() => window.open(`/api/download/${file.id}`)}
								>
									<Download className="h-4 w-4" />
								</Button>
								<Button
									variant="outline"
									size="icon"
									onClick={() => handleShare(file.id)}
								>
									<Share2 className="h-4 w-4" />
								</Button>
								<Button
									variant="outline"
									size="icon"
									onClick={() => handleDelete(file.id)}
								>
									<Trash2 className="h-4 w-4" />
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Delete Confirmation Dialog */}
			<AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete the
							selected file.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Delete</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			{/* Share Dialog */}
			<Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Share File</DialogTitle>
						<DialogDescription>
							Copy the link below to share this file
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid gap-2">
							<Label htmlFor="share-link">Shareable Link</Label>
							<Input
								id="share-link"
								value={shareLink}
								readOnly
								onClick={(e) => e.currentTarget.select()}
							/>
						</div>
					</div>
					<DialogFooter>
						<Button onClick={() => setShareDialogOpen(false)}>Close</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default Files;