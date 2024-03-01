import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Stack, StackProps, styled } from "@mui/material";
import { Children, useState } from "react";

type FilterProps = StackProps;

export default function HorizontalMenu({ children }: FilterProps) {
	const [current, setCurrent] = useState(0);
	const next = () => setCurrent(prev => prev + 1);
	const prev = () => setCurrent(prev => prev - 1);
	const childrenCount = Children.count(children);

	return (
		<Stack direction="row" alignItems="center" sx={{ flex: "1" }}>
			<ControlButton onClick={prev} disabled={current === 0} variant="outlined">
				<ChevronRight />
			</ControlButton>
			<Box sx={{ width: 1, overflow: "hidden" }}>
				<Stack
					direction="row"
					justifyContent="space-between"
					sx={{ translate: `${current * 64}px`, transition: "translate 0.3s linear" }}
					useFlexGap={false}>
					{children}
				</Stack>
			</Box>
			<ControlButton onClick={next} disabled={current === childrenCount - 3} variant="outlined">
				<ChevronLeft />
			</ControlButton>
		</Stack>
	);
}

const ControlButton = styled(Button)(() => ({
	borderRadius: 50,
	p: 0,
	width: 32,
	height: 32,
}));
