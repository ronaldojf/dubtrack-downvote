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

(function(Dubtrack) {
  'use strict';
  Dubtrack.Events.bind('realtime:room_playlist-update', Dubtrack.playerController.vote.bind(Dubtrack.playerController, 'updub'));
})(unsafeWindow.Dubtrack);
