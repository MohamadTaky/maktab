import { Contacts, Email, Facebook, Instagram, Language, Phone, Twitter } from "@mui/icons-material";
import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import googlePlayBadge from "/assets/images/google-paly-badge.svg";
import appStoreBadge from "/assets/images/app-store-badge.svg";

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{ bgcolor: "grey.100", borderBottom: 1, borderColor: "grey.300", px: 8, py: 4 }}>
			<Grid container sx={{ borderBottom: 1.5, borderColor: "grey.300", pb: 4 }} spacing={4}>
				<Grid item xs={12} sm={6} md={3}>
					<Stack alignItems={{ xs: "center", sm: "start" }} spacing={1}>
						<Typography sx={{ fontWeight: "bold" }}>الدعم</Typography>
						<Link href="#" sx={{ display: "flex", alignItems: "center" }} underline="hover">
							<Contacts sx={{ ml: 1 }} />
							اتصل بنا
						</Link>
						<Link href="#">
							<Phone />
						</Link>
						<Link href="#">
							<Email />
						</Link>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Stack alignItems={{ xs: "center", sm: "start" }} spacing={1}>
						<Typography sx={{ fontWeight: "bold" }}>الأقسام</Typography>
						<Link color="secondary" href="#" underline="hover">
							الرئيسية
						</Link>
						<Link color="secondary" href="#" underline="hover">
							جميع الإعلانات
						</Link>
						<Link color="secondary" href="#" underline="hover">
							شروط الاستخدام
						</Link>
						<Link color="secondary" href="#" underline="hover">
							مفضلتي
						</Link>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Stack alignItems={{ xs: "center", sm: "start" }} spacing={1}>
						<Typography sx={{ fontWeight: "bold" }}>Maktab</Typography>
						<Link color="secondary" href="#" underline="hover">
							غرفة الأخبار
						</Link>
						<Link color="secondary" href="#" underline="hover">
							ميزات جديدة
						</Link>
						<Link color="secondary" href="#" underline="hover">
							الوظائف
						</Link>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Stack alignItems={{ xs: "center", sm: "start" }} spacing={1}>
						<Typography sx={{ fontWeight: "bold" }}>حمل الان</Typography>
						<Link href="#">
							<Box
								component="img"
								src={googlePlayBadge}
								alt="get it on google play"
								sx={{ width: "150px", mr: -1.5 }}></Box>
						</Link>
						<Link href="#">
							<Box
								component="img"
								src={appStoreBadge}
								alt="get it on google play"
								sx={{ width: "140px", mr: -1.5 }}></Box>
						</Link>
					</Stack>
				</Grid>
			</Grid>
			<Stack direction="row" mt={4} spacing={2} useFlexGap alignItems="center">
				<Typography variant="caption" sx={{ ml: "auto", direction: "ltr" }}>
					.Maktab. Inc 2023 &#169;
				</Typography>
				<Link href="#" sx={{ ml: 2 }}>
					<Language />
				</Link>
				<Link href="#">
					<Instagram fontSize="small" sx={{ bgcolor: "common.black", color: "common.white" }} />
				</Link>
				<Link href="#">
					<Twitter fontSize="small" sx={{ bgcolor: "common.black", color: "common.white" }} />
				</Link>
				<Link href="#">
					<Facebook fontSize="small" sx={{ color: "common.black", width: 24, height: 24 }} />
				</Link>
			</Stack>
		</Box>
	);
}
