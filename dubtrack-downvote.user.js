/**
 * dubtrack-downvote
 *
 * For more information and installation instructions, please see:
 * https://github.com/ronaldojf/dubtrack-downvote/
 */

// ==UserScript==
// @name         dubtrack-downvote
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  Automatically "downdub" (downvote) tracks after a few seconds.
// @author       Ronaldo Fuzinato
// @site         https://github.com/ronaldojf/dubtrack-downvote/
// @match        *://dubtrack.fm/*
// @match        *://www.dubtrack.fm/*
// @grant        none
// @updateURL    https://github.com/ronaldojf/dubtrack-downvote/raw/master/dubtrack-downvote.user.js
// ==/UserScript==

(function($, console, Dubtrack) {
  'use strict';

  $(function() {
    var downvoteOtherPeople = function() {
      if (Dubtrack.loggedIn && $(".voted").length === 0) {
        if (Dubtrack.room.player.activeSong.attributes.user.id === Dubtrack.session.id) {
          Dubtrack.playerController.vote('updub');
        } else {
          Dubtrack.playerController.vote('downdub');
        }
      }
    };

    setTimeout(function() {
      downvoteOtherPeople();
      Dubtrack.Events.bind('realtime:room_playlist-update', downvoteOtherPeople);
    }, 10 * 1000);
  });

})($, console, Dubtrack);
