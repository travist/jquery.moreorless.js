/**
 *  moreorless.js - Developed by Travis Tidwell
 *
 *  http://github.com/travist/moreorless.js
 *
 *  Description:  This is an easy to use script that will make any element show
 *  more or less content.
 *
 *  License:  GPL version 3.
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.

 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
(function($) {
  jQuery.fn.moreorless = function( min_height, more_text, less_text ) {
  
    var read_more = "<strong><i><u>" + more_text + "</u></i></strong>";
    var read_less = "<strong><i><u>" + less_text + "</u></i></strong>";
  
    // Expand or contract a div element.
    function expandDiv( link, element, div_height ) {
      if( !$(element).hasClass('expanded') ) {
        $(link).html(read_less);
        $(element).addClass('expanded').animate({
          height:div_height
        }, 200);
      }
      else {
        $(link).html(read_more);
        $(element).removeClass('expanded').animate({
          height:min_height
        }, 200);
      }
    }

    // Iterate over each element.
    this.each( function() {
    
      // Wrap the element in div tags.
      var element = this;
     
      // Add overflow hidden to the div wrappers.
      $(element).css({
        overflow: 'hidden'
      });
      
      // Get the div height.
      var div_height = $(element).height();
      
      // If the div height is greater than the min height.
      if (div_height > min_height) {
      
        // Set the div wrapper height.
        $(element).height(min_height);
        
        // Add the "more" link and bind to the click event.
        $(element).after('<a href="#" class="expanding_div">' + read_more + '</a><br/>').next().bind('click', {div:element}, function(event) {
          
          // Prevent default, and then call our own handler.
          event.preventDefault();
          event.stopPropagation();
          expandDiv(this, event.data.div, div_height);
        });
      }
    });
  }
})(jQuery);