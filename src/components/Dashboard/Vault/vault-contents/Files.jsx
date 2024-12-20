// Files.tsx
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
	const [files, setFiles] = useState([
		{
			id: "1",
			name: "Document.pdf",
			type: "PDF",
			size: "2.5 MB",
			lastModified: "2024-03-20",
			preview: "This is a preview of Document.pdf.",
		},
		{
			id: "2",
			name: "Image.jpg",
			type: "Image",
			size: "1.8 MB",
			lastModified: "2024-03-19",
			preview: "This is a preview of Image.jpg.",
		},
	]);

	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [shareDialogOpen, setShareDialogOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [shareLink, setShareLink] = useState("");
	const [previewFile, setPreviewFile] = useState(null);

	// Delete file
	const confirmDelete = () => {
		setFiles((prevFiles) => prevFiles.filter((file) => file.id !== selectedItem));
		setDeleteDialogOpen(false);
		setSelectedItem(null);
	};

	const handleDelete = (id) => {
		setSelectedItem(id);
		setDeleteDialogOpen(true);
	};

	// Share file
	const handleShare = (id) => {
		setSelectedItem(id);
		setShareLink(`https://example.com/share/${id}`);
		setShareDialogOpen(true);
	};

	// File icon
	const getFileIcon = (type) => {
		switch (type.toLowerCase()) {
			case "image":
				return <Image className="h-5 w-5 text-blue-500" />;
			default:
				return <FileText className="h-5 w-5 text-blue-500" />;
		}
	};

	// Handle file preview
	const handlePreview = (file) => {
		setPreviewFile(file);
	};

	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
			<div className="p-6">
				<div className="space-y-4">
					{files.map((file) => (
						<div
							key={file.id}
							className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
							onClick={() => handlePreview(file)}
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
									onClick={(e) => {
										e.stopPropagation();
										alert(`Downloading file: ${file.name}`);
									}}
								>
									<Download className="h-4 w-4" />
								</Button>
								<Button
									variant="outline"
									size="icon"
									onClick={(e) => {
										e.stopPropagation();
										handleShare(file.id);
									}}
								>
									<Share2 className="h-4 w-4" />
								</Button>
								<Button
									variant="outline"
									size="icon"
									onClick={(e) => {
										e.stopPropagation();
										handleDelete(file.id);
									}}
								>
									<Trash2 className="h-4 w-4" />
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* File Preview Modal */}
			{previewFile && (
				<Dialog open={!!previewFile} onOpenChange={() => setPreviewFile(null)}>
					<DialogContent className="bg-white border border-gray-300 rounded-lg shadow-md">
						<DialogHeader>
							<DialogTitle className="text-lg font-semibold text-gray-900">
								{previewFile.name}
							</DialogTitle>
						</DialogHeader>
						<DialogDescription className="text-gray-600">
							<p>{previewFile.preview}</p>
						</DialogDescription>
						<DialogFooter>
							<Button onClick={() => setPreviewFile(null)}>Close</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}

			{/* Delete Confirmation Dialog */}
			<AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<AlertDialogContent className="bg-white border border-gray-300 rounded-lg shadow-md">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-lg font-semibold text-gray-900">
							Are you sure?
						</AlertDialogTitle>
						<AlertDialogDescription className="text-gray-600">
							This action cannot be undone. This will permanently delete the
							selected file.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction onClick={confirmDelete}>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			{/* Share Dialog */}
			<Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
				<DialogContent className="bg-white border border-gray-300 rounded-lg shadow-md">
					<DialogHeader>
						<DialogTitle className="text-lg font-semibold text-gray-900">
							Share File
						</DialogTitle>
						<DialogDescription className="text-gray-600">
							Copy the link below to share this file
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid gap-2">
							<Label htmlFor="share-link" className="text-sm font-medium">
								Shareable Link
							</Label>
							<Input
								id="share-link"
								value={shareLink}
								readOnly
								className="border border-gray-300 rounded-lg px-3 py-2"
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