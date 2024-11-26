// import { fishers_import, overfuel, remote360, gym_manager, virtualvegas, starauto } from "@/assets";
import { fishers_import, overfuel, remote360, starauto } from "@/assets";
import { Github, Linkedin } from "lucide-react";
import { Data } from "@/lib/types";

export const en: Data = {
	personal: {
		title: "About me",
		name: "Hello! I'm Luis Rivas👋",
		role: "Full Stack Web Developer",
		about: `Computer Engineer, self-taught and based in Latin America. With over 4 years of experience in web development, I specialize in Full-Stack Web Development. My passion lies in automation, innovation, and creating new products. Always excited to take on new challenges in the ever-evolving world of technology.`,
	},
	skills: {
		title: "Skills",
		skillsList: [
			{
				name: "React.js",
				url: "https://reactjs.org/docs/getting-started.html",
				icon: "⚛️",
			},
			{
				name: "Next.js",
				url: "https://nextjs.org/docs",
				icon: "▲",
			},
			{
				name: "Redux Toolkit",
				url: "https://redux-toolkit.js.org/introduction/getting-started",
				icon: "🔄",
			},
			{
				name: "Redux Toolkit Query",
				url: "https://redux-toolkit.js.org/rtk-query/overview",
				icon: "🔍",
			},
			{
				name: "Vue.js",
				url: "https://vuejs.org/guide/introduction.html",
				icon: "🖖",
			},
			{
				name: "Node.js",
				url: "https://nodejs.org/en/docs/",
				icon: "📗",
			},
			{
				name: "Express.js",
				url: "https://expressjs.com/en/4x/api.html",
				icon: "🚂",
			},
			{
				name: "Astro",
				url: "https://docs.astro.build",
				icon: "🚀",
			},
			{
				name: "Python",
				url: "https://docs.python.org/3/",
				icon: "🐍",
			},
			{
				name: "Django",
				url: "https://docs.djangoproject.com/",
				icon: "🎸",
			},
			{
				name: "TypeScript",
				url: "https://www.typescriptlang.org/docs/",
				icon: "🔷",
			},
			{
				name: "JavaScript",
				url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				icon: "🟨",
			},
			{
				name: "MongoDB",
				url: "https://docs.mongodb.com/",
				icon: "🍃",
			},
			{
				name: "MySQL",
				url: "https://dev.mysql.com/doc/",
				icon: "🐬",
			},
			{
				name: "SQL Server",
				url: "https://docs.microsoft.com/en-us/sql/sql-server/",
				icon: "🗄️",
			},
			{
				name: "Postgres",
				url: "https://www.postgresql.org/docs/",
				icon: "🐘",
			},
			{
				name: "jQuery",
				url: "https://api.jquery.com/",
				icon: "🌐",
			},
			{
				name: "Git",
				url: "https://git-scm.com/doc",
				icon: "🌿",
			},
			{
				name: "SASS / SCSS",
				url: "https://sass-lang.com/documentation",
				icon: "💅",
			},
			{
				name: "Google Tag Manager",
				url: "https://developers.google.com/tag-manager",
				icon: "🏷️",
			},
			{
				name: "Bootstrap",
				url: "https://getbootstrap.com/docs/",
				icon: "🅱️",
			},
			{
				name: "Tailwind CSS",
				url: "https://tailwindcss.com/docs",
				icon: "🌬️",
			},
			{
				name: "AWS",
				url: "https://docs.aws.amazon.com/",
				icon: "☁️",
			},
			{
				name: "Google Cloud",
				url: "https://cloud.google.com/docs",
				icon: "☁️",
			},
			{
				name: "HTML5",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				icon: "🌐",
			},
			{
				name: "CSS3",
				url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				icon: "🎨",
			},
			{
				name: "WebSockets",
				url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
				icon: "🔌",
			},
			{
				name: "Scrum",
				url: "https://www.scrum.org/resources/what-is-scrum",
				icon: "🏉",
			},
			{
				name: "Kanban",
				url: "https://www.atlassian.com/agile/kanban",
				icon: "📊",
			},
			{
				name: "Micro-Frontend",
				url: "https://micro-frontends.org/",
				icon: "🧩",
			},
			{
				name: "CI/CD",
				url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
				icon: "🔄",
			},
			{
				name: "Jest",
				url: "https://jestjs.io/docs/getting-started",
				icon: "🃏",
			},
			{
				name: "Bash",
				url: "https://www.gnu.org/software/bash/manual/bash.html",
				icon: "💻",
			},
			{
				name: "Docker",
				url: "https://docs.docker.com/",
				icon: "🐳",
			},
			{
				name: "Kubernetes",
				url: "https://kubernetes.io/docs/home/",
				icon: "☸️",
			},
			{
				name: "RESTful API",
				url: "https://restfulapi.net/",
				icon: "🔗",
			},
			{
				name: "GraphQL",
				url: "https://graphql.org/learn/",
				icon: "📊",
			},
			{
				name: "JWT",
				url: "https://jwt.io/introduction",
				icon: "🔐",
			},
			{
				name: "Terraform",
				url: "https://www.terraform.io/docs",
				icon: "🏗️",
			},
		],
	},
	contact: {
		email: "luisfrm_@outlook.com",
		phone: "+58 4124722407",
		city: "Latin America",
		download: "Download CV",
	},
	navItems: [
		{ name: "Experience", href: "experience" },
		{ name: "Projects", href: "projects" },
		{ name: "About", href: "about" },
	],
	socialMedia: [
		{
			name: "GitHub",
			icon: <Github className="w-4 h-4" />,
			url: "https://github.com/luisfrm/",
		},
		{
			name: "LinkedIn",
			icon: <Linkedin className="w-4 h-4" />,
			url: "https://www.linkedin.com/in/luisfrm10/",
		},
	],
	projects: {
		title: "Projects",
		projectList: [
			// {
			// 	title: "Gym Manager Frontend",
			// 	description:
			// 		"Gym Manager's frontend is a React-based web application for gym management. It features a user-friendly interface for member registration, class scheduling, and performance tracking. The responsive design ensures seamless access across devices, enhancing the gym experience for both staff and members.",
			// 	imageUrl: gym_manager,
			// 	technologies: [
			// 		"Vite",
			// 		"React",
			// 		"Tailwind CSS",
			// 		"Shadcn-ui",
			// 		"TypeScript",
			// 		"Redux Toolkit",
			// 		"Redux Toolkit Query",
			// 	],
			// 	githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
			// 	liveUrl: "https://gym-manager-frontend.netlify.app/",
			// },
			// {
			// 	title: "Gym Manager Backend",
			// 	description:
			// 		"The Gym Manager backend, built with Node.js and Express, powers the gym management system. It handles user authentication, membership management, and class scheduling. The API integrates with a MongoDB database, ensuring efficient data storage and retrieval for smooth gym operations.",
			// 	technologies: [
			// 		"Node.js",
			// 		"Express.js",
			// 		"MongoDB",
			// 		"JWT",
			// 		"TypeScript",
			// 		"Jest",
			// 		"Docker",
			// 		"Kubernetes",
			// 		"CI/CD",
			// 		"Mongoose",
			// 		"RESTful API",
			// 		"Zod",
			// 	],
			// 	githubUrl: "https://github.com/luisfrm/gym-manager-frontend",
			// },
			{
				title: "Remote 360",
				description:
					"Remote360 is a web-based platform for conducting 360-degree evaluations in remote work settings. Built with React and Node.js, it offers user authentication, employee management, and a comprehensive evaluation system. The application streamlines feedback processes for remote teams, featuring role-based access, real-time notifications, and detailed reporting to enhance performance management in distributed workforces.",
				imageUrl: remote360,
				technologies: [
					"Vite",
					"React",
					"Tailwind CSS",
					"Shadcn-ui",
					"TypeScript",
					"Redux Toolkit",
					"Redux Toolkit Query",
					"Node.js",
					"Express.js",
					"MongoDB",
					"JWT",
					"TypeScript",
					"Jest",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"Mongoose",
					"RESTful API",
					"Zod",
				],
				githubUrl: "https://github.com/luisfrm/remote-360",
				liveUrl: "https://remote360.netlify.app/login",
			},
			{
				title: "Overfuel LLC",
				description:
					"Overfuel creates cutting-edge websites for car dealerships. Their solutions offer responsive design, efficient inventory management, and digital marketing tools, enhancing dealers' online presence and sales.",
				imageUrl: overfuel,
				technologies: [
					"Next.js",
					"Tailwind CSS",
					"CodeIgniter",
					"MySQL",
					"Google Tag Manager",
					"AWS",
					"Docker",
					"Kubernetes",
					"RESTful",
				],
				liveUrl: "https://overfuel.com/",
			},
			{
				title: "Fishers Imports",
				description:
					"Fishers Imports' website, developed by Overfuel, showcases elegant design and advanced functionality. It features an impressive luxury inventory display, intuitive search, and financing options, demonstrating Overfuel's ability to boost high-end dealerships' digital presence.",
				imageUrl: fishers_import,
				technologies: [
					"Next.js",
					"Tailwind CSS",
					"CodeIgniter",
					"MySQL",
					"Google Tag Manager",
					"AWS",
					"Docker",
					"Kubernetes",
					"RESTful",
				],
				liveUrl: "https://www.fishersimports.com/",
			},
			{
				title: "5Star Auto",
				description:
					"5Star Auto is a car dealership website developed by 321Ignition, acquired by Overfuel. It offers a user-friendly interface, advanced search functionality, and secure payment processing. The platform's responsive design and intuitive navigation ensure a seamless user experience, driving sales and customer satisfaction. When Overfuek acquired 321Ignition, 5Star Auto stop being part of the dealerships portfolios of Overfuel.",
				imageUrl: starauto,
				technologies: [
					"Vue.js",
					"Bootstrap CSS",
					"Node.js",
					"MongoDB",
					"Google Tag Manager",
					"Google Analytics",
					"GCP / GCloud",
					"Docker",
					"Kubernetes",
					"RESTful",
				],
			},
			// {
			// 	title: "Virtual Vegas",
			// 	description:
			// 		"VirtualVegas is an immersive online casino platform developed using React and Node.js. It offers a range of popular casino games, secure payment processing, and real-time multiplayer functionality. The platform's sleek design and robust backend ensure an authentic Vegas-style gaming experience from anywhere.",
			// 	imageUrl: virtualvegas,
			// 	technologies: ["Python3", "Django", "Python-telegram-bot", "Docker", "RESTful"],
			// 	githubUrl: "https://github.com/luisfrm/virtualvegas",
			// 	liveUrl: "https://t.me/virtualvegasbot",
			// },
			{
				title: "Portfolio",
				description:
					"My portfolio is a web application that showcases my projects and skills. It uses modern technology to present information clearly and attractively. It displays featured projects, skills, and contact information, providing a platform to showcase my work and experience to employers and peers.",
				technologies: ["React", "Tailwind CSS", "TypeScript", "useContext", "Vite", "Shadcn-ui", "Netlify"],
				githubUrl: "https://github.com/luisfrm/portfolios-react",
				liveUrl: "https://luisrivas-portfolios.netlify.app",
			},
			{
				title: "God's Good BarberShop",
				description:
					"God's Good BarberShop is a web application for a local barbershop in Venezuela. It displays contact information, services, and a Hero Section. The project is built with Next.js and features a responsive design for seamless access on all devices.",
				technologies: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn-ui", "Server components", "Client components"],
				imageUrl: "https://res.cloudinary.com/dw4ecbwo9/image/upload/v1732264975/god-is-good-compress_drf1ce.webp",
				githubUrl: "https://github.com/luisfrm/god-is-good-barbershop",
				liveUrl: "https://god-is-good-barbershop.vercel.app",
			},
			{
				title: "Task Manager",
				description:
					"Task Manager is a web application for managing tasks and projects. It offers a user-friendly interface for creating, assigning, and tracking tasks. The application uses modern technology to ensure seamless task management, featuring real-time updates, task prioritization, and detailed reporting.",
				technologies: [
					"React",
					"Tailwind CSS",
					"Javascript",
					"Node.js",
					"Express.js",
					"Mongoose",
					"MongoDB",
					"JWT",
					"Zod",
				],
				githubUrl: "https://github.com/luisfrm/task-manager",
			},
		],
	},
	workExperiences: {
		title: "Work Experience",
		workExperiencesList: [
			{
				company: "Overfuel / 321ignition",
				position: "Full-Stack Developer",
				period: "May 2023 — Present",
				description:
					"As a full-stack developer, I implemented innovative features using Next.js, Vue, and React.js to enhance user experience. I worked on analyzing and fixing bugs using tools like GitHub and Jira. I contributed to back-end development with Node.js and Express in a microservices architecture, using MongoDB as the database. I effectively managed client requests using the Scrum methodology and utilized Google Tag Manager to optimize data collection and analysis. My approach encompassed both front-end and back-end development, ensuring the delivery of scalable and maintainable solutions.",
				skills: [
					"Next.js",
					"Vue",
					"Node.js",
					"Express",
					"JavaScript",
					"TypeScript",
					"Git",
					"GitHub",
					"Jira",
					"Scrum",
					"Google Tag Manager",
					"Microservices",
					"API Rest",
					"Google Analytics",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"CircleCI",
					"AWS",
				],
			},
			{
				company: "321ignition",
				position: "Front-End Developer Leadership",
				period: "May 2020 — May 2023",
				description:
					"Developed a Front-end architecture in collaboration with the team that improved the scalability and performance of the website. Developed and implemented REST APIs to integrate the Front-end application with backend microservices. Optimized the Front-end user interface to enhance UX/UI. Collaborated on migrating several Front-end applications from Vue.js to Next.js. Attended to and resolved client requests for the development of new features.",
				skills: [
					"Vue.js",
					"Next.js",
					"Node.js",
					"Express",
					"JavaScript",
					"TypeScript",
					"Git",
					"GitHub",
					"API Development",
					"UX/UI",
					"Team Leadership",
					"Microservices",
					"Google Tag Manager",
					"Google Analytics",
					"Scrum",
					"Docker",
					"Kubernetes",
					"CI/CD",
					"CircleCI",
					"GPC / GCloud",
				],
			},
			{
				company: "Fira onLive",
				position: "Front End Developer",
				period: "May 2019 — March 2020",
				description:
					"Developed a streaming player using React.js along with Redux for global state management and Red5 Pro as the SDK. Implemented a chat feature in React.js using the GetStream.io library for real-time message management. Created a JavaScript library for implementing the streaming player for client use.",
				skills: [
					"React.js",
					"Redux",
					"Redux-thunk",
					"JavaScript",
					"TypeScript",
					"Git",
					"API Rest",
					"CMS",
					"Live Streaming",
					"Red5 Pro",
					"GetStream.io",
					"WebSockets",
					"MS Azure",
				],
			},
		],
	},
};