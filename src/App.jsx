import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Login from "./pages/login";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

let router = createBrowserRouter([
	{
		path: `/`,
		element: <Dashboard />,
	},
	{
		path: `register`,
		element: <Register />,
	},
	{
		path: `login`,
		element: <Login />,
	},
]);

let queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />;
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
