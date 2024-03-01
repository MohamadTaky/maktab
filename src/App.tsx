import { Container, ThemeProvider, colors, createTheme, responsiveFontSizes } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import TopBar from "./components/TopBar";

let theme = createTheme({
	palette: {
		primary: { main: colors.grey[900] },
		secondary: { main: colors.grey[700] },
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					minWidth: 0,
					whiteSpace: "nowrap",
				},
			},
		},
		MuiStack: {
			defaultProps: {
				useFlexGap: true,
			},
		},
	},
});
theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container sx={{ my: 4 }}>
				<TopBar />
				<List />
			</Container>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
