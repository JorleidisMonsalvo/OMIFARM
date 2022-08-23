import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product'
import banner from './banner'
import aboutUs from './aboutUs'
import service from './service'
import cultivo from './cultivo'
import productPrice from './productPrice'
import testimonios from './testimonios'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product, banner, aboutUs, service, cultivo, productPrice, testimonios
  ]),
})
