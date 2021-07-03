// /**
//  * @file
//  */

// (function($) {
//   Drupal.behaviors.aldia_news_advertising = {
//     attach: function(context) {
//       var width_publi = window.innerWidth;
//       if (width_publi >= 768) {
//         // ------ vista leadership
//         $(
//           ".view-id-leadership_sons.view-display-id-block_3 .view-content .block-fixed-block-content-small-vertical-advertising"
//         )
//           .once("leadership-small-news-advertising")
//           .each(function() {
//             setTimeout(function() {
//               var leadership = 0;
//               // doing async stuff
//               if (
//                 $(
//                   ".view-id-leadership_sons.view-display-id-block_3 .view-content .block-fixed-block-content-small-vertical-advertising"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 leadership = 1;
//                 $(
//                   ".view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category"
//                 ).each(function(index, value) {
//                   if (index >= 6) {
//                     $(value).hide();
//                   }
//                 });
//               }

//               if (
//                 $(
//                   ".view-id-leadership_sons.view-display-id-block_3 .view-content .block-fixed-block-contentbig-vertical-advertising"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 $(
//                   ".view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category"
//                 ).each(function(index, value) {
//                   if (leadership) {
//                     $(value).hide();
//                   } else {
//                     if (index >= 3) {
//                       $(value).hide();
//                     }
//                   }
//                 });
//               }
//             }, 3000);
//           });

//         // ------ vista politics
//         $(
//           ".view-id-politics_sons.view-display-id-block_3 .view-content .block-fixed-block-content-small-vertical-advertising"
//         )
//           .once("politics-small-news-advertising")
//           .each(function() {
//             setTimeout(function() {
//               var politics = 0;
//               // doing async stuff
//               if (
//                 $(
//                   ".view-id-politics_sons.view-display-id-block_3 .view-content .block-fixed-block-content-small-vertical-advertising"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 politics = 1;
//                 $(
//                   ".view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category"
//                 ).each(function(index, value) {
//                   if (index >= 6) {
//                     $(value).hide();
//                   }
//                 });
//               }

//               if (
//                 $(
//                   ".view-id-politics_sons.view-display-id-block_3 .view-content  .block-fixed-block-contentbig-vertical-advertising"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 $(
//                   ".view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category"
//                 ).each(function(index, value) {
//                   if (politics) {
//                     $(value).hide();
//                   } else {
//                     if (index >= 3) {
//                       $(value).hide();
//                     }
//                   }
//                 });
//               }
//             }, 3000);
//           });

//         // ------ vista culture
//         $(
//           ".view-id-culture_sons.view-display-id-block_3 .view-content .block-fixed-block-content-small-vertical-advertising"
//         )
//           .once("culture-small-news-advertising")
//           .each(function() {
//             setTimeout(function() {
//               var culture = 0;
//               // doing async stuff
//               if (
//                 $(
//                   ".view-id-culture_sons.view-display-id-block_3 .view-content .block-fixed-block-content-small-vertical-advertising"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 culture = 1;
//                 $(
//                   ".view-id-culture_sons.view-display-id-block_3 .view-content .card-more-category"
//                 ).each(function(index, value) {
//                   if (index >= 6) {
//                     $(value).hide();
//                   }
//                 });
//               }

//               if (
//                 $(
//                   ".view-id-culture_sons.view-display-id-block_3 .view-content  .block-fixed-block-contentbig-vertical-advertising"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 $(
//                   ".view-id-culture_sons.view-display-id-block_3 .view-content .card-more-category"
//                 ).each(function(index, value) {
//                   if (culture) {
//                     $(value).hide();
//                   } else {
//                     if (index >= 3) {
//                       $(value).hide();
//                     }
//                   }
//                 });
//               }
//             }, 3000);
//           });

//         // ------ vista more in this section
//         $(
//           ".view-id-more_in_this_section_news.view-display-id-block_1 .view-content .settings-tray-editable"
//         )
//           .once("aldia-big-news-advertising")
//           .each(function() {
//             setTimeout(function() {
//               // doing async stuff
//               if (
//                 $(
//                   ".view-id-more_in_this_section_news.view-display-id-block_1 .view-content .settings-tray-editable"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 $(
//                   ".view-id-more_in_this_section_news.view-display-id-block_1 .view-content .card-more-news"
//                 ).each(function(index, value) {
//                   if (index >= 3) {
//                     $(value).hide();
//                   }
//                 });
//               }
//             }, 3000);
//           });

//         // ------ vista last news
//         $(
//           ".view-id-last_news.view-display-id-block_3 .view-content .block-fixed-block-content-small-vertical-advertising"
//         )
//           .once("last-news-small-news-advertising")
//           .each(function() {
//             setTimeout(function() {
//               // doing async stuff
//               if (
//                 $(
//                   ".view-id-last_news.view-display-id-block_3 .view-content .block-fixed-block-content-small-vertical-advertising"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 $(
//                   ".view-id-last_news.view-display-id-block_3 .view-content .card-more-category"
//                 ).each(function(index, value) {
//                   if (index >= 3) {
//                     $(value).hide();
//                   }
//                 });
//               }

//               if (
//                 $(
//                   ".view-id-last_news.view-display-id-block_3 .view-content  .block-fixed-block-contentbig-vertical-advertising"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 $(
//                   ".view-id-last_news.view-display-id-block_3 .view-content .card-more-category"
//                 ).each(function(index, value) {
//                   if (index >= 0) {
//                     $(value).hide();
//                   }
//                 });
//               }

//               if (
//                 $(
//                   ".view-id-last_news.view-display-id-block_3 .view-content .block2 .block-fixed-block-content-small-vertical-advertising"
//                 )
//                   .find(".content > div > div")
//                   .html().length >= 1
//               ) {
//                 $(
//                   ".view-id-last_news.view-display-id-block_3 .view-content .card-more-category"
//                 ).each(function(index, value) {
//                   if (index >= 3) {
//                     $(value).hide();
//                   }
//                 });
//               }
//             }, 8000);
//           });
//       }
//     }
//   };
// })(jQuery);
