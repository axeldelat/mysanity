export default {
  name: 'restaurants',
  type: 'document',
	title: 'Restaurants',
  fields: [
    {
      title: 'Restaurant Name',
      name: 'restaurantName',
      type: 'string',
    },
    {
      title: 'Restaurant Logo',
      name: 'restaurantLogo',
      type: 'image',
    },
    {
      title: 'Restaurant Website',
      name: 'restaurantWebsite',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }
  ]
}