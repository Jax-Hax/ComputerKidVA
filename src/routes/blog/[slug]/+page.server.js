import { error } from '@sveltejs/kit'
import PocketBase from 'pocketbase'
const pb = new PocketBase('https://pocketbase.chvala.duckdns.org')

export async function load({ params }) {
	await pb.admins.authWithPassword('jaxbulbrook@gmail.com', 'Clover9pie');
	const post = await pb.collection('blogsForComputerKidVA').getFirstListItem(`slug="${params.slug}"`);
	await pb.collection('blogsForComputerKidVA').update(`${post.id}`, {amAccessed: (post.amAccessed+1)});
  if (!post) {
    throw error(404, 'Post not found')
  }
  return {
	 post: {
		blog: post.blogEditor,
		metaDescription: post.metaDescription,
		title: post.title,
		category: post.category,
		slug: post.slug,
		imageAlt: post.imageAlt,
		createdDate: post.created
	},
 }
}
