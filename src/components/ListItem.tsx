import { Favorite, Star } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Carosuel from "./Carosuel";

type ListItemProps = {
	name: string;
	address: string;
	price: number;
	accepts: string[];
	pricePerDuration: string;
	images: { src: string; alt: string }[];
	isFavourite: boolean;
};

export default function ListItem({
	name,
	address,
	accepts,
	images,
	price,
	pricePerDuration,
	isFavourite,
}: ListItemProps) {
	const [favorite, setFavourite] = useState(isFavourite);
	const toggleFavourite = () => setFavourite(prev => !prev);

	return (
		<Grid item xs={12} sm={6} md={3}>
			<Carosuel images={images}>
				<IconButton
					onClick={toggleFavourite}
					sx={{
						position: "absolute",
						left: 0,
						top: 0,
						color: favorite ? "red" : "",
						strokeWidth: 1,
						stroke: "white",
					}}>
					<Favorite />
				</IconButton>
			</Carosuel>
			<Box sx={{ mt: 2, position: "relative" }}>
				<Typography sx={{ fontWeight: "700" }}>{name}</Typography>
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						fontSize: "0.75rem",
						display: "flex",
						alignItems: "center",
					}}>
					<Star fontSize="small" sx={{ width: 16 }} />
					(0)
				</Box>
				<Typography sx={{}}>{address}</Typography>
				<Typography>
					<Typography component="span">يقبل الإيجار: </Typography>
					{accepts.sort().join(" | ")}
				</Typography>
				<Typography>
					{Intl.NumberFormat("ar", { currency: "sar" }).format(price)} {pricePerDuration}
				</Typography>
			</Box>
		</Grid>
	);
}
