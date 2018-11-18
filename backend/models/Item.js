const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slugify = require('slugify');
const validators = require('mongoose-validators');

const itemSchema = new mongoose.Schema({
  city: {
    type: String,
    trim: true,
    required: 'Введите город',
  },
  name: {
    type: String,
    trim: true,
    required: 'Введите название',
  },
  created: {
    type: Date,
    default: Date.now
  },
  slug: String,
  image: String,
  largeImage: String,
  description: {
    type: String,
    trim: true,
    required: 'Введите описание',
  },
  phone: {
    type: String,
    trim: true,
  }, 
  url: {
    type: String,
    trim: true,
  }, 
  schedule: {
    monday: {
      open: {
        type: String,
        trim: true,
      },
      close: {
        type: String,
        trim: true,
      }
    },
    tuesday: {
      open: {
        type: String,
        trim: true,
      },
      close: {
        type: String,
        trim: true,
      }
    },
    wednesday: {
      open: {
        type: String,
        trim: true,
      },
      close: {
        type: String,
        trim: true,
      }
    },
    thursday: {
      open: {
        type: String,
        trim: true,
      },
      close: {
        type: String,
        trim: true,
      }
    },
    friday: {
      open: {
        type: String,
        trim: true,
      },
      close: {
        type: String,
        trim: true,
      }
    },
    saturday: {
      open: {
        type: String,
        trim: true,
      },
      close: {
        type: String,
        trim: true,
      }
    },
    sunday: {
      open: {
        type: String,
        trim: true,
      },
      close: {
        type: String,
        trim: true,
      }
    }
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [{
      type: Number,
      required: 'Введите координаты!'
    }],
    address: {
    type: String,
    required: 'Введите адрес!'
    }
  },
});
  
  itemSchema.pre('save', async function(next) {
    if (!this.isModified('name')) {
      next();
      return;
    }
    this.slug = slugify(this.name).toLowerCase();
  
    // find other companies that have a slug of comp, comp-1, comp-2
    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
    // find on this.constructor - because Company has not been created yet...
    const companiesWithSlug = await this.constructor.find({ slug: slugRegEx });
    if (companiesWithSlug.length) {
      this.slug = `${this.slug}-${companiesWithSlug.length + 1}`;
    }
    next();
    //TODO - make more resilien so slugs are unique
  });
  
  
  
  module.exports = mongoose.model('Item', itemSchema);  