import PocketBase from 'pocketbase'
const pb = new PocketBase('https://pocketbase.chvala.duckdns.org')
export async function load() {
	await pb.admins.authWithPassword('jaxbulbrook@gmail.com', 'Clover9pie');
	const recentPosts = await pb.collection('blogsForComputerKidVA').getList(1, 5, {
		sort: '-created',
		expand: 'user'
	});
	const topPosts = await pb.collection('blogsForComputerKidVA').getList(1, 5, {
		sort: '-amAccessed',
		expand: 'user'
	});
	return {
		recent: recentPosts.items.map((post) => ({
			slug: post.slug,
			title: post.title,
			category: post.category,
			imageAlt: post.imageAlt,
			createdDate: post.created,
			introText: post.introText
		})),
		popular: topPosts.items.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
