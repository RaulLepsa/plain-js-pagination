var all = ['1st Element', '2nd Element', '3rd Element', '4th Element', '5th Element', '6th Element', '7th Element', '8th Element', '9th Element', '10th Element'];

var response = {
	currentPage: 0,
	total: 0,
	list: []
};

var server = {

	getListResponse: function(startFrom, numberOfElements) {

		// Reset list on response
		response.list = [];
		// Set total number of items
		response.total = all.length;
		// Set current page
		response.currentPage = parseInt(startFrom / numberOfElements) + 1;

		// We take the startFrom - 1 element because the pagination starts from index 1
		var i = startFrom - 1;
		var j = 0;

		// Fetch numberOfElements items (while there still are items) 
		while (i < all.length && j < numberOfElements) {

			// Add it to the response list
			response.list[j] = all[i];

			i++;
			j++;
		}

		return response;
	}
}