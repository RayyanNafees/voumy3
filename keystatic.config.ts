import { config, fields, collection } from "@keystatic/core";

export default config({
	storage: {
		kind: "cloud",
	},
	cloud: {
		project: "rayyan/voumy4",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "src/content/posts/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				content: fields.markdoc({
					label: "Content",
					options: {
						image: {
							directory: "src/assets/images/posts",
							publicPath: "../../assets/images/posts/",
						},
					},
				}),
				dateOfPublishing: fields.date({
					label: "Date of publishing",
					defaultValue: {
						kind: "today",
					},
				}),
			},
		}),
	},
});
