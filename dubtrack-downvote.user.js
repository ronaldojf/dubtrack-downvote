/**
 * dubtrack-downvote
 *
 * For more information and installation instructions, please see:
 * https://github.com/ronaldojf/dubtrack-downvote/
 */

// ==UserScript==
// @name         dubtrack-downvote
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Automatically "downdub" (downvote) tracks after a few seconds.
// @author       Ronaldo Fuzinato
// @site         https://github.com/patricknelson/dubtrack-downvote/
// @match        *://dubtrack.fm/*
// @match        *://www.dubtrack.fm/*
// @grant        unsafeWindow
// @updateURL    https://github.com/ronaldojf/dubtrack-downvote/raw/master/dubtrack-downvote.user.js
// ==/UserScript==

(function($, console, Dubtrack) {
  'use strict';

  $(function() {
    /**
     * AUTO DOWNDUB/DOWNVOTE
     */
    setInterval(function() {
      // Don't do anything if a vote has already been case (i.e. if this song is upvoted as well).
      if ($(".voted").length === 0) $(".dubdown").click();
    }, 5000);
  });

})(unsafeWindow.$, unsafeWindow.console, unsafeWindow.Dubtrack);
