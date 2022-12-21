const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'56d8384b-6e39-4ef1-acee-e805a1e34fe6'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
