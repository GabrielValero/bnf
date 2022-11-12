let posts = 
{
	main:
	[
		{
			title: "Everything new from GitHub Universe 2022",
			content: "See what we're building to enhance the most integrated developer platform that allows developers and enterprises to drive innovation with ease.",
			image: "https://github.blog/wp-content/uploads/2022/10/universeheader4.png?resize=800%2C425",
			author: "Thomas Dohmke",
			imageAuthor: "https://avatars.githubusercontent.com/u/70720?v=4&s=80",
			time: "November 9, 2022"
		},
		{
			title: "Introducing GitHub Actions Importer",
			content: "GitHub Actions Importer helps you forecast, plan, and facilitate migrations from your current CI/CD tool to GitHub Actions.",
			image: "https://github.blog/wp-content/uploads/2022/11/1200x640.png?resize=400%2C212",
			author: "Ethan Dennis",
			time: "November 10, 2022"
		},
		{
			title: "What’s new with Codespaces from GitHub Universe 2022",
			content: "We’re giving GitHub users 60 free hours each month on Codespaces. Learn what else we shipped for Codespaces at Universe this year.",
			image: "https://github.blog/wp-content/uploads/2022/08/Universe-Blog-1-Header.jpg?resize=400%2C212",
			author: "Nik Molnar",
			time: "November 10, 2022"
		},
		{
			title: "An open source economy–built by developers, for developers",
			content: "Investing in our open source future by supporting the maintainers of today.",
			image: "https://github.blog/wp-content/uploads/2022/11/image-3.png?resize=400%2C212",
			author: "Naytri Sramek",
			time: "November 9, 2022"
		}
	],
	enterprise:[
		{
			title: "Introducing GitHub Actions Importer",
			content: "GitHub Actions Importer helps you forecast, plan, and facilitate migrations from your current CI/CD tool to GitHub Actions.",
			image: "https://github.blog/wp-content/uploads/2022/11/1200x640.png?resize=400%2C212",
			author: "Ethan Dennis",
			imageAuthor: "https://avatars.githubusercontent.com/u/70720?v=4&s=80",
			time: "November 9, 2022"
		},
		{
			title: "Everything new from GitHub Universe 2022",
			content: "See what we're building to enhance the most integrated developer platform that allows developers and enterprises to drive innovation with ease.",
			author: "Thomas Dohmke",
		},
		{
			title: "GitHub Enterprise Server 3.7 is now generally available",
			content: "GitHub Enterprise Server 3.7 is available now, including a single view of code risk, new forking and repository policies, and security enhancements to the management console.",
			author: "Melody Mileski & David Jarzebowski",
		}
	],
	education:[
		{
			title: "Introducing GitHub Actions Importer",
			content: "GitHub Actions Importer helps you forecast, plan, and facilitate migrations from your current CI/CD tool to GitHub Actions.",
			image: "https://github.blog/wp-content/uploads/2022/10/aspiringcreatives-header.png?resize=400%2C212",
			author: "Ethan Dennis",
			imageAuthor: "https://avatars.githubusercontent.com/u/70720?v=4&s=80",
			time: "November 9, 2022"
		},
		{
			title: "Everything new from GitHub Universe 2022",
			content: "See what we're building to enhance the most integrated developer platform that allows developers and enterprises to drive innovation with ease.",
			author: "Thomas Dohmke",
		},
		{
			title: "GitHub Enterprise Server 3.7 is now generally available",
			content: "GitHub Enterprise Server 3.7 is available now, including a single view of code risk, new forking and repository policies, and security enhancements to the management console.",
			author: "Melody Mileski & David Jarzebowski",
		}
	],
	policy:[
		{
			title: "Introducing GitHub Actions Importer",
			content: "GitHub Actions Importer helps you forecast, plan, and facilitate migrations from your current CI/CD tool to GitHub Actions.",
			image: "https://github.blog/wp-content/uploads/2022/10/universeheader4.png?resize=400%2C212",
			author: "Ethan Dennis",
			imageAuthor: "https://avatars.githubusercontent.com/u/70720?v=4&s=80",
			time: "November 9, 2022"
		},
		{
			title: "Everything new from GitHub Universe 2022",
			content: "See what we're building to enhance the most integrated developer platform that allows developers and enterprises to drive innovation with ease.",
			author: "Thomas Dohmke",
		},
		{
			title: "GitHub Enterprise Server 3.7 is now generally available",
			content: "GitHub Enterprise Server 3.7 is available now, including a single view of code risk, new forking and repository policies, and security enhancements to the management console.",
			author: "Melody Mileski & David Jarzebowski",
		}
	],
	company:[
		{
			title: "Introducing GitHub Actions Importer",
			content: "GitHub Actions Importer helps you forecast, plan, and facilitate migrations from your current CI/CD tool to GitHub Actions.",
			image: "https://github.blog/2022-11-10-introducing-github-actions-importer/",
			author: "Ethan Dennis",
			imageAuthor: "https://avatars.githubusercontent.com/u/70720?v=4&s=80",
			time: "November 9, 2022"
		},
		{
			title: "Everything new from GitHub Universe 2022",
			content: "See what we're building to enhance the most integrated developer platform that allows developers and enterprises to drive innovation with ease.",
			author: "Thomas Dohmke",
		},
		{
			title: "GitHub Enterprise Server 3.7 is now generally available",
			content: "GitHub Enterprise Server 3.7 is available now, including a single view of code risk, new forking and repository policies, and security enhancements to the management console.",
			author: "Melody Mileski & David Jarzebowski",
		}
	]
}

export default function getPosts(req, res){

	res.status(200).json({posts});
}