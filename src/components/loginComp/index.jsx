import {useQuery} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {fetchUsers} from "../../api/userApi";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const LoginComp = () => {
	let navigate = useNavigate();

	useEffect(() => {
		localStorage.removeItem(`email`);
		localStorage.removeItem(`password`);
	}, []);

	let {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();

	let {data, isLoading, error} = useQuery({
		queryKey: [`users`],
		queryFn: fetchUsers,
	});

	if (isLoading) return <div>Yuklanmoqda...</div>;
	if (error) return <div>Xatolik yuz berdi: {error.message}</div>;

	let onSubmit = (login) => {
		reset();
		if (
			data.some(
				(user) => user.email === login.email && user.password === login.password
			)
		) {
			location.href = `/`;
			localStorage.setItem(`email`, `${login.email}`);
			localStorage.setItem(`password`, `${login.password}`);
			console.log(`Tizimga kirildi`);
		} else {
			alert(`Email yoki parol noto'g'ri`);
		}
	};

	return (
		<section className="bg-gradient-to-r from-blue-500 to-purple-600">
			<div className="w-[28em] h-screen mx-auto flex flex-col items-start justify-center max-[480px]:w-[90%] tr">
				<h1 className="text-[2.5em] w-full font-bold text-white text-center mb-4">
					Welcome back!
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full mt-[3em] flex flex-col items-start justify-center gap-6 bg-white p-6 rounded-lg shadow-lg">
					<div className="w-full">
						<label className="font-medium text-gray-700" htmlFor="email">
							Email
						</label>
						<input
							className="w-full h-10 pl-4 mt-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
							type="email"
							placeholder="Enter your email"
							{...register("email", {required: "Email is required"})}
						/>
						{errors.email && (
							<span className="text-sm text-red-500">
								{errors.email.message}
							</span>
						)}
					</div>
					<div className="w-full">
						<label className="font-medium text-gray-700" htmlFor="password">
							Password
						</label>
						<input
							className="w-full h-10 pl-4 mt-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
							type="password"
							placeholder="Enter your password"
							{...register("password", {required: "Password is required"})}
						/>
						{errors.password && (
							<span className="text-sm text-red-500">
								{errors.password.message}
							</span>
						)}
					</div>
					<div className="flex items-center justify-between w-full gap-2">
						<button className="w-full h-10 mt-5 font-medium text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
							Sign in
						</button>
						<button
							onClick={() => navigate(`/register`)}
							className="w-[5em] h-10 mt-5 font-medium text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
							Sign up
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default LoginComp;
