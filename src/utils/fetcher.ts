export const api = {
	post: async (url: string, data: any) => {
		const res = await fetch(url, {
			method: "POST",
			credentials: "include", // send/receive cookies
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (!res.ok) throw new Error("API Error");

		return res.json();
	},
};
