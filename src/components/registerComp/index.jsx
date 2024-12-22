import {useForm} from "react-hook-form";
import {createUser, fetchUsers} from "../../api/userApi";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const RegisterComp = () => {
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

	let mutation = useMutation({
		mutationFn: createUser,
		onSuccess: (userData) => {
			console.log(`foydanaluvchi muvaffaqiyatli yaratildi: `, userData);
			localStorage.setItem(`email`, `${userData.email}`);
			localStorage.setItem(`password`, `${userData.password}`);
			location.href = `/`;
		},
		onError: (error) => {
			console.log(`foydalanuvchi yaratishda xatolik yuz berdi: `, error);
		},
	});

	let {data, isLoading, error} = useQuery({
		queryKey: [`users`],
		queryFn: fetchUsers,
	});

	if (isLoading) return <div>Yuklanmoqda...</div>;
	if (error) return <div>Xatolik yuz berdi: {error.message}</div>;

	let onSubmit = (userData) => {
		reset();
		data.find((user) => user.email === userData.email)
			? alert(`Bu email bilan ro'yxatdan o'tgan foydalanuvchi bor`)
			: mutation.mutate(userData);
	};

	return (
		<section className="bg-gradient-to-r from-blue-500 to-purple-600">
			<div className="w-[28em] h-screen mx-auto flex flex-col items-start justify-center max-[480px]:w-[90%] tr">
				<h1 className="text-[2.5em] w-full font-bold text-white text-center mb-4">
					Get Started Now
				</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full mt-[3em] flex flex-col items-start justify-center gap-6 bg-white p-6 rounded-lg shadow-lg">
					<div className="w-full">
						<label className="font-medium text-gray-700" htmlFor="name">
							Name
						</label>
						<input
							className="w-full h-10 pl-4 mt-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
							type="text"
							placeholder="Enter your name"
							{...register("name", {required: "Name is required"})}
						/>
						{errors.name && (
							<span className="text-sm text-red-500">
								{errors.name.message}
							</span>
						)}
					</div>
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
							Sign up
						</button>
						<button
							onClick={() => navigate(`/login`)}
							className="w-[5em] h-10 mt-5 font-medium text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
							Sign in
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default RegisterComp;
