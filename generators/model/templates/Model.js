import { MongoDBModel } from 'spikenail';

class <%= modelClassName %> extends MongoDBModel {}

export default new <%= modelClassName %>({
  name: '<%= modelName %>',
  properties: {
    id: {
      type: 'id'
    }
  }
});