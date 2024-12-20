import {data} from "autoprefixer";
import {useForm} from "react-hook-form";

const RegisterComp = () => {
	let {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();

	let onSubmit = () => {
		console.log(data);
	};
	return (
		<section className="">
			<div className="w-[28em] h-screen mx-auto flex flex-col items-start justify-center">
				<h1 className="text-[2em] w-full font-medium text-white">
					Get Started Now
				</h1>
				<form className="w-full mt-[5em] flex flex-col items-start justify-center gap-5">
					<div className="w-full">
						<label className="text-white" htmlFor="name">
							Name
						</label>
						<input
							className="w-full h-8 rounded pl-2 mt-1"
							type="text"
							placeholder="name"
							{...register(`name`, {required: `name is required`})}
						/>
						{errors.name && (
							<span style={{color: `red`}}>{errors.name.message}</span>
						)}
					</div>
					<div className="w-full">
						<label className="text-white" htmlFor="email">
							email
						</label>
						<input
							className="w-full h-8 rounded pl-2 mt-1"
							type="email"
							placeholder="email"
							{...register(`email`, {required: `email is required`})}
						/>
						{errors.name && (
							<span style={{color: `red`}}>{errors.name.message}</span>
						)}
					</div>
					<div className="w-full">
						<label className="text-white" htmlFor="password">
							password
						</label>
						<input
							className="w-full h-8 rounded pl-2 mt-1"
							type="password"
							placeholder="password"
							{...register(`password`, {required: `password is required`})}
						/>
						{errors.name && (
							<span style={{color: `red`}}>{errors.name.message}</span>
						)}
					</div>
					<button className="w-full h-8 rounded bg-white text-black mt-5">
						SignUp
					</button>
				</form>
			</div>
		</section>
	);
};

export default RegisterComp;
