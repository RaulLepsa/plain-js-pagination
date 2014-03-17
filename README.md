#Plain Javascript Pagination
----------------------------

##Description

This is a pagination library implemented in plain Javascript. Although
there are jQuery alternatives available, this plugin is intended to offer
generic pagination support using only Javascript.

##[Demo - with default style](http://raullepsa.github.io/plain-js-pagination)


##Usage

Include the plain-js-pagination.js file and the provided CSS (optional) in the
HTML file. 

To work with the plugin, 4 steps are required:

1. In the body of the page, the following has to be included:
	
		<!-- List Container -->
		<div id="list-container"</div>

		<!-- Pagination -->
		<div id="list-pagination" class="list-pagination display-none">
		    <div id="list-pagination-first" class="list-pagination-element" onclick="pagination.getFirstPage();"><< First</div>
		    <div id="list-pagination-prev" class="list-pagination-element" onclick="pagination.getPreviousPage();">< Prev</div>
		    <div id="list-pagination-pages" class="list-pagination-element"></div>
		    <div id="list-pagination-next" class="list-pagination-element" onclick="pagination.getNextPage();">Next ></div>
		    <div id="list-pagination-last" class="list-pagination-element" onclick="pagination.getLastPage();">Last >></div>

		    <select id="items-per-page" class="list-pagination-items-per-page" onchange="pagination.numberOfElementsChanged();">
		        <option value="10" selected>10</option>
		        <option value="25">25</option>
		        <option value="50">50</option>
		    </select>
		</div>


2. Define a function that lists the desired entity. This will be called by the plugin.
It should take offset (startFrom) and the limit(numberOfElements) provided by the pagination 
library as parameters:

		myListFunction: function(startFrom, numberOfElements) {
			// fetch data from the server, pagintated
		}


3. For initialization, the user-defined function that fetches the data has to be passed
to the listItems function as a callback:

	    pagination.listItems(myListFunction);


4. The above instruction sets the pagination parameters and then calls the callback function.
After the results are fetched, in order to adjust the pagination and display it properly,
the display function has to be called:

		pagination.displayPagination(currentPage, total);

As it can be seen, it requires from the server response the current page and the total number
of pages.



From this point on, the plugin has been initialized and further calls for pagination can
be done with:

    pagination.callListItems();

