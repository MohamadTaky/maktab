import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MouseEvent, useState } from "react";

export default function FilterMenu() {
	const [filter, setFilter] = useState<string>();
	const handleFilterChange = (_e: MouseEvent<HTMLElement, globalThis.MouseEvent>, value: any) =>
		setFilter(value);

	return (
		<ToggleButtonGroup dir="ltr" value={filter} exclusive onChange={handleFilterChange}>
			<ToggleButton disableRipple value="year" sx={{ flex: 1 }}>
				سنوات
			</ToggleButton>
			<ToggleButton disableRipple value="month" sx={{ flex: 1 }}>
				أشهر
			</ToggleButton>
			<ToggleButton disableRipple value="day" sx={{ flex: 1 }}>
				بالأيام
			</ToggleButton>
			<ToggleButton disableRipple value="hour" sx={{ borderRadius: 3, flex: 1 }}>
				بالساعات
			</ToggleButton>
		</ToggleButtonGroup>
	);
}
