import {useQuery} from "@tanstack/react-query";
import {fetchUsers} from "../../api/userApi";
import {useNavigate} from "react-router-dom";

const DashboardComp = () => {
	let navigate = useNavigate();

	let email = localStorage.getItem("email");
	let password = localStorage.getItem("password");

	let {data, isLoading, error} = useQuery({
		queryKey: [`users`],
		queryFn: fetchUsers,
	});

	if (isLoading) return <div>Yuklanmoqda...</div>;
	if (error) return <div>Xatolik yuz berdi: {error.message}</div>;

	if (email && password) {
		let user = data.find((user) => user.email === email);
		if (!user || user.password !== password) {
			navigate("/login");
		}
	} else {
		navigate(`/login`);
	}
	return <section>DashboardComp</section>;
};

export default DashboardComp;
