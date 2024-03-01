import { Grid } from "@mui/material";
import ListItem from "./ListItem";
import data from "../lib/data.json";

export default function List() {
	return (
		<Grid container spacing={2} my={4}>
			{data.map(item => (
				<ListItem key={item.name} {...item} />
			))}
		</Grid>
	);
}
