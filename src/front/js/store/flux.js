const tokenUrl = "https://cuddly-space-doodle-x79gw6g99573wq7-3001.app.github.dev/api/token"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: async (email, password) => {

				try {
					const requestOptions = {
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						method: "POST",
						body: JSON.stringify({
							"email": email,
							"password": password
						})
					}

					const res = await fetch(tokenUrl, requestOptions);

					if (res.status !== 200) {
						alert('There has been an error in the backend');
						return false
					}
					const data = await res.json()

					if (data === "User or password incorrect") {
						alert('User or password incorrect')
					}

					sessionStorage.setItem("token", data.token)
					setStore({ token: data.token })
				} catch (error) {
					console.log(error)
					throw Error('Login.jsx catch block:', error)
				}


			},
			syncTokenFromSessionStorage: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && typeof token !== "undefined") {
					setStore({ token: token })
				}
			},
			logout: () => {
				sessionStorage.removeItem("token");

				setStore({ token: null })

			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
