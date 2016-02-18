/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a defined URL and URL is not empty', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name that is defined and not empty', function() {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         });
    });

    /* A new test suite named "The menu" */
    describe('The Menu' , function() {

        var $body = $('body'),
            $menu = $('menu'),
            $menuIconLink = $('.menu-icon-link');

        /* A test that ensures the menu element is
         * hidden by default. 
         */
        it('is hidden by default', function() {
            expect($body.hasClass('menu-hidden')).toEqual(true);
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('changes visibility when clicked', function() {
            $menuIconLink.trigger('click');
            expect($body.hasClass('menu-hidden')).toEqual(false);

            $menuIconLink.trigger('click');
            expect($body.hasClass('menu-hidden')).toEqual(true);
        });
    });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('contains an entry when loadFeed is completed', function() {
            expect($('.feed').children().length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        var feeds;

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                feeds = $('.feed').html();
                done();
            });  
        });

        it('ensures that content changes when a new feed is loaded', function(done) {
            loadFeed(1, function() {
                expect($('.feed').html() !== feeds).toBeTruthy();
                done();
            });
        });
    });
}());
