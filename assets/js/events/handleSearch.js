const search_header = document.querySelector('.search__header span:last-child');
var urlObject = new URL(window.location.href);
var search = urlObject.searchParams.get('search');

search_header.innerText = search;
