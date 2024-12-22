export let createUser = async (userData) => {
	let response = await fetch(import.meta.env.VITE_API_URL + `users`, {
		method: `POST`,
		headers: {
			"Content-Type": `application/json`,
		},
		body: JSON.stringify(userData),
	});

	if (!response.ok) {
		throw new Error(
			`serverdan ma'lumot olishda xatolik bo'ldi: ${response.status}`
		);
	}

	return await response.json();
};

export let fetchUsers = async () => {
	let response = await fetch(import.meta.env.VITE_API_URL + `users`, {
		method: `GET`,
	});

	if (!response.ok) {
		throw new Error(
			`Serverdan ma'lumot olishda xatolik yuz berdi: ${response.status}`
		);
	}

	return await response.json();
};
