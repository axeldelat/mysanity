export default {
  name: 'restaurant',
  type: 'document',
	title: 'Restaurant',
  fields: [
    {
      title: 'Name',
      name: 'restaurantName',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'restaurantLogo',
      type: 'image',
    },
    {
      title: 'Website',
      name: 'restaurantWebsite',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      title: 'Feature restaurant on frontpage',
      name: 'featured',
      type: 'boolean',
    }
  ]
}