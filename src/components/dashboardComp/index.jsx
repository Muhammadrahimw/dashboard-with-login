import {useQuery} from "@tanstack/react-query";
import {fetchUsers} from "../../api/userApi";
import {Link, useNavigate} from "react-router-dom";
import {Input} from "antd";

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
	return (
		<section className="flex items-start justify-between gap-8 p-8">
			<div className="flex flex-col justify-between gap-4 h w-[12em]  border-r-2 border-gray-200">
				<div className="w-[18em] text-gray-500">
					<div>
						<Link to={"/"}>
							<img src="/src/assets/Group 68.svg" alt="logo" />
						</Link>
					</div>
					<div className="mt-[4em] mb-3 flex items-center gap-3 cursor-pointer">
						<div>
							<img src="/src/assets/Frame 7.svg" alt="" />
						</div>
						<p>Overview</p>
					</div>
					<div className="flex items-center gap-3 mb-3 cursor-pointer ">
						<div>
							<img src="/src/assets/Frame 7-1.svg" alt="" />
						</div>
						<p>Transactions</p>
					</div>
					<div className="flex items-center gap-3 mb-3 cursor-pointer ">
						<div>
							<img src="/src/assets/Frame 7-2.svg" alt="" />
						</div>
						<p>Cards</p>
					</div>
					<div className="flex items-center gap-3 mb-3 cursor-pointer ">
						<div>
							<img src="/src/assets/Frame 7-3.svg" alt="" />
						</div>
						<p>Invoices</p>
					</div>
					<div className="flex items-center gap-3 mb-3 cursor-pointer ">
						<div>
							<img src="/src/assets/Frame 7-4.svg" alt="" />
						</div>
						<p>Goals</p>
					</div>
					<div className="flex items-center gap-3 mb-3 cursor-pointer ">
						<div>
							<img src="/src/assets/Frame 7-5.svg" alt="" />
						</div>
						<p>Settings</p>
					</div>
				</div>
				<div className="mt-[6em] flex flex-col items-start">
					<div className="ml-4">
						<img src="/src/assets/Group 163.png" alt="" />
					</div>
					<button className="bg-[#FFC145] px-7 mt-4 py-3 rounded-full text-[11px]">
						Upgrade to premium
					</button>
				</div>
			</div>
			<div className="w-full">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-[43px] font-semibold w-full">Weekly sumup</p>
						<p className="text-gray-400">
							Get summary of your weekly online transactions here.
						</p>
					</div>
					<div className="flex items-center gap-3">
						<div>
							<img src="/src/assets/bell.svg" alt="" />
						</div>
						<div>
							<img src="/src/assets/mail.svg" alt="" />
						</div>
						<div className="w-8 h-8 bg-orange-500 rounded-full">
							<img src="/src/assets/Group 135.svg" alt="" />
						</div>
						<div className="flex flex-col items-start">
							<p className="text-[13px]">Andrew</p>
							<p className="text-[13px] text-gray-500">Admin account</p>
						</div>
					</div>
				</div>
				<div className="grid w-full grid-cols-2 gap-8 mt-8">
					<div className="flex flex-col gap-8">
						<div className="grid grid-cols-3 gap-4 p-6 shadow-xl rounded-2xl cards">
							<div className="col-span-2">
								<p className="text-[20px] font-semibold pb-4">Cards</p>
								<div>
									<img src="/src/assets/Group110.png" alt="" />
								</div>
								<div className="flex justify-start w-full h-2 bg-gray-300 rounded-full">
									<div className="w-[30%] h-full rounded-full bg-blue-400"></div>
								</div>
								<div className="flex justify-between mt-4">
									<p>Weekly payment limit</p>
									<p>$350.60 / $4000</p>
								</div>
							</div>
							<div className="flex flex-col pt-12 gap-7">
								<div className="flex flex-col items-end">
									<p className="text-[32px] font-bold text-blue-500">
										$ 2850.75
									</p>
									<p className="text-[14px] text-gray-500">Current balance</p>
								</div>
								<div className="flex flex-col items-end">
									<p className="text-[18px] font-semibold text-[#439A86]">
										$ 2850.75
									</p>
									<p className="text-[14px] text-gray-500">Current balance</p>
								</div>
								<div className="flex flex-col items-end">
									<p className="text-[18px] font-semibold text-[#BB4430]">
										$ 1500.50
									</p>
									<p className="text-[14px] text-gray-500">Income</p>
								</div>
								<p className="ml-[4.25em] text-gray-400">Deacivate card</p>
							</div>
						</div>
						<div className="p-6 mt-8 shadow-xl rounded-2xl">
							<h2 className="text-[20px] font-semibold mb-4">
								Transaction history
							</h2>
							<div className="">
								<div className="grid grid-cols-4 gap-2 mb-4">
									<p className="text-[14px] text-[#AEAEAE]">Reciever</p>
									<p className="text-[14px] text-[#AEAEAE]">Type</p>
									<p className="text-[14px] text-[#AEAEAE]">Date</p>
									<p className="text-[14px] text-[#AEAEAE]">Amount</p>
								</div>
								<div className="grid grid-cols-4 gap-2 pb-2 border-b border-gray-200">
									<p className="text-[14px] text-[#404040]">Tesco Market</p>
									<p className="text-[14px] text-[#C7C7C7]">Shopping</p>
									<p className="text-[14px] text-[#C7C7C7]">13 Dec 2020</p>
									<b className="text-[14px] text-[#404040]">$75.67</b>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div>
							<div className="flex items-end gap-2 mb-2">
								<h2 className="text-[20px] font-semibold">Goals</h2>
								<div>
									<img src="/src/assets/plus-circle.svg" alt="" />
								</div>
							</div>
							<div className="grid grid-cols-3 gap-4">
								<div className="flex flex-col items-start justify-between w-full h-full gap-8 p-4 shadow-lg rounded-2xl">
									<div>
										<p className="text-3xl font-bold text-gray-700">$550</p>
										<p className="text-gray-400">12/20/20</p>
									</div>
									<div>
										<img src="/src/assets/maki_mountain-15.svg" alt="" />
										<p className="text-xl">Holidays</p>
									</div>
								</div>
								<div className="flex flex-col items-start justify-between w-full h-full gap-8 p-4 shadow-lg rounded-2xl">
									<div>
										<p className="text-3xl font-bold text-gray-700">$200</p>
										<p className="text-gray-400">12/20/20</p>
									</div>
									<div>
										<img src="/src/assets/maki_mountain-15-1.svg" alt="" />
										<p className="text-xl">Renovation</p>
									</div>
								</div>
								<div className="flex flex-col items-start justify-between w-full h-full gap-8 p-4 shadow-lg rounded-2xl">
									<div>
										<p className="text-3xl font-bold text-gray-700">$820</p>
										<p className="text-gray-400">12/20/20</p>
									</div>
									<div>
										<img src="/src/assets/maki_mountain-15-2.svg" alt="" />
										<p className="text-xl">Xbox</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h2 className="text-[20px] font-semibold mt-10 mb-6">
								Outcome Statistics
							</h2>
							<div className="flex items-start justify-between w-full gap-3">
								<div className="">
									<img
										className="scale-125"
										src="/src/assets/Group 165.svg"
										alt=""
									/>
								</div>
								<div className="w-full mt-3">
									<div className="w-full h-2 bg-gray-200 rounded-full">
										<div className="w-[52%] h-full rounded-full bg-[#FCAE73]"></div>
									</div>
									<p className="text-[14px] text-gray-400 mt-2">Shoppping</p>
								</div>
								<p className="text-4xl font-bold text-gray-600">52%</p>
							</div>
							<div className="flex items-start justify-between w-full gap-3">
								<div className="">
									<img
										className="scale-125"
										src="/src/assets/Group 166.svg"
										alt=""
									/>
								</div>
								<div className="w-full mt-3">
									<div className="w-full h-2 bg-gray-200 rounded-full">
										<div className="w-[21%] h-full rounded-full bg-[#209D43]"></div>
									</div>
									<p className="text-[14px] text-gray-400 mt-2">Electronics</p>
								</div>
								<p className="text-4xl font-bold text-gray-600">21%</p>
							</div>
							<div className="flex items-start justify-between w-full gap-3">
								<div className="">
									<img
										className="scale-125"
										src="/src/assets/Group 167.svg"
										alt=""
									/>
								</div>
								<div className="w-full mt-3">
									<div className="w-full h-2 bg-gray-200 rounded-full">
										<div className="w-[74%] h-full rounded-full bg-[#70A6E8]"></div>
									</div>
									<p className="text-[14px] text-gray-400 mt-2">Travels</p>
								</div>
								<p className="text-4xl font-bold text-gray-600">74%</p>
							</div>
						</div>
						<div className="grid grid-cols-3 gap-4 mt-3">
							<div className="col-span-2 p-6 shadow-xl rounded-2xl">
								<h2 className="mb-2 text-xl font-semibold text-gray-600">
									New transaction
								</h2>
								<div className="flex items-center gap-3 mb-3">
									<div>
										<img src="/src/assets/Group 140.svg" alt="" />
									</div>
									<div>
										<img src="/src/assets/Group 141.svg" alt="" />
									</div>
									<div>
										<img src="/src/assets/Group 142.svg" alt="" />
									</div>
									<div>
										<img src="/src/assets/Group 143.svg" alt="" />
									</div>
									<div>
										<img src="/src/assets/Group 164.svg" alt="" />
									</div>
								</div>
								<div className="flex items-center gap-3">
									<Input className="w-[12em] h-10" placeholder="0" />
									<button className="bg-[#FFC145] rounded-xl px-3 h-10 text-[14px]">
										Send the transfer
									</button>
								</div>
							</div>
							<div className="w-full">
								<img
									className="w-full h-full"
									src="/src/assets/Group 169.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DashboardComp;
