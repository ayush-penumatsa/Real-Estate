
    function performSearch() {
                var location = document.getElementById('location').value;
    var propertyStatus = document.getElementById('property-status').value;
    var propertyType = document.getElementById('property-type').value;

    // Redirect to property listings page with query parameters
    window.location.href = "property-listings.html?location=" + encodeURIComponent(location) + "&status=" + encodeURIComponent(propertyStatus) + "&type=" + encodeURIComponent(propertyType);
            }
