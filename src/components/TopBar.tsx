import { AutoAwesome, Map, Tune } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import HorizontalMenu from "./HorizontalMenu";

export default function TopBar() {
	return (
		<Stack direction={{ md: "row" }} sx={{ my: 3, gap: 2, alignItems: { md: "center" } }}>
			<HorizontalMenu>
				<Button sx={{ flexDirection: "column" }}>
					<AutoAwesome />
					مكتب
				</Button>
				<Button sx={{ flexDirection: "column" }}>
					<AutoAwesome />
					مكتب
				</Button>
				<Button sx={{ flexDirection: "column" }}>
					<AutoAwesome />
					مكتب
				</Button>
				<Button sx={{ flexDirection: "column" }}>
					<AutoAwesome />
					مكتب
				</Button>
				<Button sx={{ flexDirection: "column" }}>
					<AutoAwesome />
					مكتب
				</Button>
			</HorizontalMenu>
			<Button startIcon={<Tune sx={{ ml: 1 }} />} variant="outlined" sx={{ borderRadius: 50 }}>
				عوامل التصفية
			</Button>
			<Button endIcon={<Map sx={{ mr: 2 }} />} variant="contained" sx={{ borderRadius: 50 }}>
				عرض الخريطة
			</Button>
		</Stack>
	);
}
