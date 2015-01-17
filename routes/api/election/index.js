"use strict";
module.exports = (function(router, models) {
  router.route('/election').post((function(req, res) {
    new models.Election({
      'title': req.body.title,
      'description': req.body.description
    }).save((function(err) {
      if (err)
        return res.send(err);
      return res.json({message: "Election created"});
    }));
  })).get((function(req, res) {
    models.Election.find((function(err, elections) {
      if (err)
        return res.send(err);
      return res.json(elections);
    }));
  }));
  router.route('/election/:election_id').get((function(req, res) {
    models.Election.findById(req.params.election_id, function(err, election) {
      if (err)
        return res.send(err);
      return res.json(election);
    });
  }));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hcGkvZWxlY3Rpb24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQSxLQUFLLFFBQVEsSUFBSSxTQUFDLE1BQUssQ0FBRSxDQUFBLE1BQUs7QUFFMUIsT0FBSyxNQUFNLEFBQUMsQ0FBQyxXQUFVLENBQUMsS0FDaEIsQUFBQyxFQUFDLFNBQUMsR0FBRSxDQUFHLENBQUEsR0FBRTtBQUNWLE1BQUksQ0FBQSxNQUFLLFNBQVMsQUFBQyxDQUFDO0FBQ2hCLFlBQU0sQ0FBVSxDQUFBLEdBQUUsS0FBSyxNQUFNO0FBQzdCLGtCQUFZLENBQUksQ0FBQSxHQUFFLEtBQUssWUFBWTtBQUFBLElBQ3ZDLENBQUMsS0FBSyxBQUFDLEVBQUMsU0FBQyxHQUFFLENBQU07QUFDYixTQUFJLEdBQUU7QUFBRyxhQUFPLENBQUEsR0FBRSxLQUFLLEFBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQztBQUFBLEFBQzdCLFdBQU8sQ0FBQSxHQUFFLEtBQUssQUFBQyxDQUFDLENBQUUsT0FBTSxDQUFHLG1CQUFpQixDQUFFLENBQUMsQ0FBQztJQUNwRCxFQUFDLENBQUM7RUFDTixFQUFDLElBRUUsQUFBQyxFQUFDLFNBQUMsR0FBRSxDQUFHLENBQUEsR0FBRTtBQUNULFNBQUssU0FBUyxLQUFLLEFBQUMsRUFBQyxTQUFDLEdBQUUsQ0FBRyxDQUFBLFNBQVEsQ0FBTTtBQUNyQyxTQUFJLEdBQUU7QUFBRyxhQUFPLENBQUEsR0FBRSxLQUFLLEFBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQztBQUFBLEFBQzdCLFdBQU8sQ0FBQSxHQUFFLEtBQUssQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDO0lBQzlCLEVBQUMsQ0FBQztFQUNOLEVBQUMsQ0FBQztBQUVOLE9BQUssTUFBTSxBQUFDLENBQUMsd0JBQXVCLENBQUMsSUFDOUIsQUFBQyxFQUFDLFNBQUMsR0FBRSxDQUFHLENBQUEsR0FBRSxDQUFLO0FBQ2QsU0FBSyxTQUFTLFNBQVMsQUFBQyxDQUFDLEdBQUUsT0FBTyxZQUFZLENBQUcsVUFBVSxHQUFFLENBQUcsQ0FBQSxRQUFPLENBQUc7QUFDdEUsU0FBSSxHQUFFO0FBQUcsYUFBTyxDQUFBLEdBQUUsS0FBSyxBQUFDLENBQUMsR0FBRSxDQUFDLENBQUM7QUFBQSxBQUM3QixXQUFPLENBQUEsR0FBRSxLQUFLLEFBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7RUFDTixFQUFDLENBQUM7QUFFVixDQUFBLENBQUM7QUFFRCIsImZpbGUiOiJyb3V0ZXMvYXBpL2VsZWN0aW9uL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uIiwic291cmNlc0NvbnRlbnQiOlsiXG5tb2R1bGUuZXhwb3J0cyA9IChyb3V0ZXIsbW9kZWxzKSA9PiB7XG5cbiAgICByb3V0ZXIucm91dGUoJy9lbGVjdGlvbicpXG4gICAgICAgIC5wb3N0KChyZXEsIHJlcykgPT4ge1xuICAgICAgICAgICAgbmV3IG1vZGVscy5FbGVjdGlvbih7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogICAgICAgIHJlcS5ib2R5LnRpdGxlLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICByZXEuYm9keS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgfSkuc2F2ZSgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zZW5kKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgbWVzc2FnZTogXCJFbGVjdGlvbiBjcmVhdGVkXCIgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgICAgICAuZ2V0KChyZXEsIHJlcykgPT4ge1xuICAgICAgICAgICAgbW9kZWxzLkVsZWN0aW9uLmZpbmQoKGVyciwgZWxlY3Rpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zZW5kKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVsZWN0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICByb3V0ZXIucm91dGUoJy9lbGVjdGlvbi86ZWxlY3Rpb25faWQnKVxuICAgICAgICAuZ2V0KChyZXEsIHJlcyk9PiB7XG4gICAgICAgICAgICBtb2RlbHMuRWxlY3Rpb24uZmluZEJ5SWQocmVxLnBhcmFtcy5lbGVjdGlvbl9pZCwgZnVuY3Rpb24gKGVyciwgZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnNlbmQoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZWxlY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG59O1xuXG4iXX0=