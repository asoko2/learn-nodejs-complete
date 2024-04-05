const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  imageUrl:{
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
})

module.exports = mongoose.model('Product', productSchema)

// const mongodb = require('mongodb')
// const getDb = require('../util/database').getDb

// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title
//     this.price = price
//     this.description = description
//     this.imageUrl = imageUrl
//     this._id = id ? mongodb.ObjectId.createFromHexString(id) : null
//     this.userId = userId
//   }

//   save() {
//     const db = getDb()
//     let dbOp
//     if (this._id) {
//       // Update the product
//       dbOp = db.collection('products').updateOne({ _id: this._id }, {
//         $set: {
//           title: this.title,
//           price: this.price,
//           description: this.description,
//           imageUrl: this.imageUrl,
//         }
//       })
//     } else {
//       // Insert new product
//       dbOp = db.collection('products').insertOne(this)
//     }
//     return dbOp.then(result => {
//       console.log(result)
//     })
//       .catch(err => console.log(err))
//   }

//   static fetchAll() {
//     const db = getDb()

//     return db.collection('products')
//       .find()
//       .toArray()
//       .then(products => {
//         return products
//       })
//       .catch(err => console.log(err))
//   }

//   static findById(prodId) {
//     const db = getDb()
//     return db
//       .collection('products')
//       .find({ _id: mongodb.ObjectId.createFromHexString(prodId) })
//       .next()
//       .then(product => {
//         console.log(product)
//         return product
//       })
//       .catch(err => console.log(err))
//   }

//   static deleteById(prodId) {
//     const db = getDb()
//     return db
//       .collection('products')
//       .deleteOne({ _id: mongodb.ObjectId.createFromHexString(prodId) })
//       .then(result => {
//         console.log('Deleted')
//         res.redirect('/admin/products')
//       })
//       .catch(err => console.log(err))
//   }

// }

// module.exports = Product