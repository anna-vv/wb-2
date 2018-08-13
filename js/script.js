$(document).ready(function() {
  // navigation

  $("#wrapper-ham").click(function() {
    $("nav").css("display", "block");
    $("nav").animate({ left: "0" }, 1000);
  });
  $("#wrapper").click(function() {
    $("nav").animate({ left: "100%" }, 1000, function() {
      $(this).css("display", "none");
    });
  });

  // fade in images in portfolio

  // const images = $('.portfolio-image');
  // images.each(function(i) {
  //   $(this).delay(i * 200).fadeIn(1500);
  // })

  const images = $(".portfolio-item");
  images.each(function(i) {
    $(this)
      .delay(i * 200)
      .fadeIn(1500);
  });

  // image modals

  // open modal

  const modal = $(".modal");
  const modalImages = $(".modalImage");

  images.click(function() {
    modal.css("display", "block");
    const bgimage = $(this).css("background-image");
    const bgimageURL = bgimage.replace(/[url\(\"\)]/g, "");
    modalImages.attr("src", bgimageURL);
  });

  // close modal

  $(".closeModal").click(function() {
    modal.css("display", "none");
  });

  // service list rotation

  $("#serviceList").mousemove(function(e) {
    const w = $(window).innerWidth();
    const h = $(window).innerHeight();

    const dx = w / 2 - e.pageX;
    const dy = h / 2 - e.pageY;

    $(this).css(
      "transform",
      "rotateY(" + dx / 100 + "deg) rotateX(" + -dy / 50 + "deg"
    );
  });

  // service info expand

  $(".service").click(function() {
    $("#serviceList").addClass("service-active");
    $(this).css({
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      "z-index": "25",
      cursor: "text"
    });
    $("#serviceWrapper").css("padding", "0px");
    $(".service-information").css("display", "block");
    $(".close-service-info").css("display", "inline");
  });

  // service info close

  $(".close-service-info").click(function(e) {
    $("#serviceList").removeClass("service-active");
    $(".service, #serviceWrapper").removeAttr("style");
    $(".service-information, .close-service-info").css("display", "none");
    e.stopPropagation();
  });
});

// remove spinner

$(window).on("load", function() {
  $("#loading").remove();
});
