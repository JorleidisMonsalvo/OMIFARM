export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image'}],
            options: {
                hospot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name:'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
          name: 'presentations',
          title: 'Presentations',
          type: 'array',
          of: [{ type: 'productPrice'}]
        },
        {
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [{ type: 'string'}],
        },
        {
            name: 'line',
            title: 'Line',
            type: 'string'
        }
    ]
}