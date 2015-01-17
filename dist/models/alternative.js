"use strict";
exports = module.exports = (function(collection, mongoose) {
  var schema = mongoose.Schema({description: {
      type: String,
      required: true
    }});
  return mongoose.model(collection, schema);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9hbHRlcm5hdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sRUFBSSxDQUFBLE1BQUssUUFBUSxJQUFJLFNBQUMsVUFBUyxDQUFHLENBQUEsUUFBTyxDQUFNO0FBQ2pELEFBQUksSUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLFFBQU8sT0FBTyxBQUFDLENBQUMsQ0FDekIsV0FBVSxDQUFHO0FBQ1QsU0FBRyxDQUFHLE9BQUs7QUFDWCxhQUFPLENBQUcsS0FBRztBQUFBLElBQ2pCLENBQ0osQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFBLFFBQU8sTUFBTSxBQUFDLENBQUMsVUFBUyxDQUFHLE9BQUssQ0FBQyxDQUFDO0FBQzdDLENBQUEsQ0FBQztBQUFBIiwiZmlsZSI6Im1vZGVscy9hbHRlcm5hdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IChjb2xsZWN0aW9uLCBtb25nb29zZSkgPT4ge1xuICAgIHZhciBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1vbmdvb3NlLm1vZGVsKGNvbGxlY3Rpb24sIHNjaGVtYSk7XG59OyJdfQ==