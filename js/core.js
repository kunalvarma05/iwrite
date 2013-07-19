jQuery(document).ready(function() {
jQuery('.nav-toggle').click(function() {
jQuery(this).toggleClass('active');
jQuery('.nav-select').toggleClass('open');
});
jQuery('.search-toggle').click(function() {
jQuery('.search-bar').slideToggle(200);
jQuery('.search-box').focus();
});
});
