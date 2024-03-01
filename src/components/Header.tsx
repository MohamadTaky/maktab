import { Add, Language, Menu } from "@mui/icons-material";
import { Avatar, Box, Button, IconButton, Link, Stack } from "@mui/material";

export default function Header() {
	return (
		<Box sx={{ py: 2, px: { xs: 2, sm: 8 }, borderBottom: 1, borderBottomColor: "grey.300" }}>
			<Stack direction={{ md: "row" }} sx={{ gap: 2 }} alignItems={{ md: "center" }} useFlexGap>
				<Link href="#" sx={{ ml: "auto" }} underline="none">
					Logo
				</Link>
				<Button
					variant="contained"
					sx={{
						borderRadius: 50,
						background: "linear-gradient(45deg, rgba(136,30,30,1) 0%, rgba(206,20,19,1) 100%)",
						py: 1,
					}}
					startIcon={<Add />}>
					أضف مكتبك على MAKTAB
				</Button>
				<Button
					variant="outlined"
					sx={{
						py: 1,
						border: 1,
						borderRadius: 50,
						borderColor: "secondary.main",
					}}
					startIcon={<Menu sx={{ ml: 3 }} />}>
					<Avatar sx={{ width: 28, height: 28 }} />
				</Button>
				<IconButton>
					<Language />
				</IconButton>
			</Stack>
		</Box>
	);
}
