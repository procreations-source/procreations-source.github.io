$(document).ready(function() {
  "use strict";
  $(".section").height(window.outerHeight);
  $(".nav-item, .discover").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + 1
      },
      900,
      "easeInOutExpo"
    );
    return false;
  });

  $(window).on("scroll", function() {
    $(".section").each(function() {
      if ($(window).scrollTop() > $(this).offset().top) {
        var sectionId = $(this).attr("id");
        $('.nav-item[href="' + "#" + sectionId + '"]')
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    });
  });
});
// slider text start
var commentSlider = {
  config: {
    container: $("#wrapper")
  },

  init: function(config) {
    if (config && typeof config == "object") {
      $.extend(commentSlider.config, config);
    }

    //caching dom elements
    //wrapper
    commentSlider.$container = commentSlider.config.container;

    //all paragraph tags
    commentSlider.$paragraphs = commentSlider.$container.find("p");

    //all li tags
    commentSlider.$dots = commentSlider.$container.find("ul.dots-wrap > li");

    //first li within ul.dots-wrap
    commentSlider.$firstDot = commentSlider.$container.find(
      "ul.dots-wrap > li:first-child"
    );

    //first p tag within module wrapper
    commentSlider.$firstParagraph = commentSlider.$container.find(
      "p:first-child"
    );

    //setting first dot with .active class
    commentSlider.$firstDot.addClass("active-dot");

    //setting first paragraph tag with .active class
    commentSlider.$firstParagraph.addClass("activeText");

    //initializing functions and defining their parameters
    commentSlider.currentItem(commentSlider.$paragraphs, commentSlider.$dots);
    commentSlider.setActiveDot(commentSlider.$dots);
    commentSlider.timer();
  },

  //timer function runs necesary functions every five seconds
  timer: function() {
    setInterval(function() {}, 5000);
  }, //timer function end

  //grabs current numerical class of dot clicked
  dotNumber: function($dot) {
    var dotClassArray = [];
    var dotClassList = dotClassArray.push($dot.attr("class"));
    var splitArray = dotClassArray.toString().split(" ");

    for (i = 0; i < splitArray.length; i++) {
      if (splitArray[i] === "dot") {
        splitArray.splice(i, 1);
        var dotClickedNumber = splitArray[i];
        commentSlider.paragraphNumber(
          dotClickedNumber,
          commentSlider.$paragraphs
        );
      }
    }
  }, //end dotNumber

  paragraphNumber: function(dotClickedNumber, $paragraphs) {
    $paragraphs.each(function() {
      var $paragraph = $(this);
      var paragraphClass = $paragraph.attr("class");

      if (paragraphClass === dotClickedNumber) {
        $paragraph.addClass("activeText");
        $paragraph
          .siblings()
          .removeClass("activeText")
          .addClass("slideLeft");
        setTimeout(function() {
          $paragraph.siblings().removeClass("slideLeft");
        }, 400);
      }
    });
  }, //end paragraphNumber

  //currentItem function gives every paragraph and dot a numerical class
  //based on their array position
  currentItem: function($paragraphs, $dots) {
    $paragraphs.each(function(i) {
      var $paragraph = $(this);
      $paragraph.addClass([] + i);
    });

    $dots.each(function(i) {
      var $dot = $(this);
      $dot.addClass([] + i);
    });
  }, //end currentItem

  //setActiveDot adds class active to whichever dot is clicked
  setActiveDot: function($dots) {
    $dots.each(function() {
      var $dot = $(this);
      $dot.on("click", function() {
        if ($dot.hasClass("active-dot")) {
          return false;
        } else {
          $dot.addClass("active-dot");
          $dot.siblings().removeClass("active-dot");
        }
        commentSlider.dotNumber($dot);
      });
    });
  } //end setActiveDot
};

//initializes the entire thing by calling the init function
$(document).ready(commentSlider.init);
// slider text start
// modals
// modal 1
$(function() {
  $(".md-trigger-1").on("click", function() {
    $(".md-modal-1").addClass("md-show");
  });
  $(".md-close").on("click", function() {
    $(".md-modal-1").removeClass("md-show");
  });
});
// modal 2
$(function() {
  $(".md-trigger-2").on("click", function() {
    $(".md-modal-2").addClass("md-show");
  });
  $(".md-close").on("click", function() {
    $(".md-modal-2").removeClass("md-show");
  });
});
// modal 3
$(function() {
  $(".md-trigger-3").on("click", function() {
    $(".md-modal-3").addClass("md-show");
  });
  $(".md-close").on("click", function() {
    $(".md-modal-3").removeClass("md-show");
  });
});
// modal 4
$(function() {
  $(".md-trigger-4").on("click", function() {
    $(".md-modal-4").addClass("md-show");
  });
  $(".md-close").on("click", function() {
    $(".md-modal-4").removeClass("md-show");
  });
});
// modal 5
$(function() {
  $(".md-trigger-5").on("click", function() {
    $(".md-modal-5").addClass("md-show");
  });
  $(".md-close").on("click", function() {
    $(".md-modal-5").removeClass("md-show");
  });
});
// modal 6
$(function() {
  $(".md-trigger-6").on("click", function() {
    $(".md-modal-6").addClass("md-show");
  });
  $(".md-close").on("click", function() {
    $(".md-modal-6").removeClass("md-show");
  });
});
// modal 7
$(function() {
  $(".md-trigger-7").on("click", function() {
    $(".md-modal-7").addClass("md-show");
  });
  $(".md-close").on("click", function() {
    $(".md-modal-7").removeClass("md-show");
  });
});
// modal 8
$(function() {
  $(".md-trigger-8").on("click", function() {
    $(".md-modal-8").addClass("md-show");
  });
  $(".md-close").on("click", function() {
    $(".md-modal-8").removeClass("md-show");
  });
});
// modals end

$(".email").on("change keyup paste", function() {
  if ($(this).val()) {
    $(".icon-paper-plane").addClass("next");
  } else {
    $(".icon-paper-plane").removeClass("next");
  }
});

$(".next-button").hover(function() {
  $(this).css("cursor", "pointer");
});

$(".next-button.email").click(function() {
  console.log("Something");
  $(".email-section").addClass("fold-up");
  $(".password-section").removeClass("folded");
});

$(".password").on("change keyup paste", function() {
  if ($(this).val()) {
    $(".icon-lock").addClass("next");
  } else {
    $(".icon-lock").removeClass("next");
  }
});

$(".next-button").hover(function() {
  $(this).css("cursor", "pointer");
});

$(".next-button.password").click(function() {
  console.log("Something");
  $(".password-section").addClass("fold-up");
  $(".repeat-password-section").removeClass("folded");
});

$(".repeat-password").on("change keyup paste", function() {
  if ($(this).val()) {
    $(".icon-repeat-lock").addClass("next");
  } else {
    $(".icon-repeat-lock").removeClass("next");
  }
});

$(".next-button.repeat-password").click(function() {
  console.log("Something");
  $(".repeat-password-section").addClass("fold-up");
  $(".success").css("marginTop", 0);
});
