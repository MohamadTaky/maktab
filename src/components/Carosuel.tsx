import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, BoxProps, Button, Stack, styled } from "@mui/material";
import { useState } from "react";

type CarosuelProps = BoxProps & {
	images: { src: string; alt: string }[];
};

export default function Carosuel({ images, children }: CarosuelProps) {
	const [current, setCurrent] = useState(0);
	const next = () => setCurrent(prev => prev + 1);
	const prev = () => setCurrent(prev => prev - 1);

	return (
		<Box sx={{ overflow: "hidden", position: "relative", borderRadius: 2 }}>
			<Stack
				direction="row"
				sx={{ translate: `${current * 100}%`, transition: "translate 0.3s ease-in-out" }}>
				{images.map(({ src, alt }) => (
					<Box component="img" key={src} src={src} alt={alt} sx={{ aspectRatio: "4 / 3" }} />
				))}
			</Stack>
			<Stack
				direction="row"
				justifyContent="space-between"
				sx={{ width: 1, px: 1, position: "absolute", top: "50%", translate: "0 -50%", zIndex: 10 }}>
				<ControlButton variant="contained" disabled={current === 0} onClick={prev} size="small">
					<ChevronRight fontSize="small" />
				</ControlButton>
				<ControlButton disabled={current === images.length - 1} onClick={next} size="small">
					<ChevronLeft fontSize="small" />
				</ControlButton>
			</Stack>
			{children}
		</Box>
	);
}

const ControlButton = styled(Button)(({ theme }) => ({
	borderRadius: 50,
	p: 0,
	width: 32,
	height: 32,
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: theme.palette.common.white,
	color: theme.palette.common.black,
	"&:hover": {
		backgroundColor: theme.palette.grey[300],
	},
	"&:disabled": {
		backgroundColor: theme.palette.grey[300],
	},
}));
