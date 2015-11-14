/**
 * @package shortcut - pragmatic ownCloud share url shortener
 * @category internet
 * @author Christian Reiner
 * @copyright 2015-2015 Christian Reiner <foss@christian-reiner.info>
 * @license GNU Affero General Public license (AGPL)
 * @link information https://github.com/arkascha/owncloud-shortcut/wiki
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the license, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.
 * If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * @file js/share.js
 * @author Christian Reiner
 */

(function($) {

    var self = this,
        observer;

    self.init = function() {
        OC.AppConfig.getValue('shortcut', 'share-base-url', 'http://<host>/<path>/', function(payload) {
            self.shortcutBase = payload;
        });

        self.observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes) {
                    $nodes = $(mutation.addedNodes);
                    $link = $nodes.filter('#linkText').add($nodes.find('#linkText'));
                    if ($link.length) {
                        if ($link.parents('.linkShareView')) {
                            self.wrapInputWithShortcut($link.eq(0));
                        }
                    }
                }
            })
        });

        $(document).ready(function(){
            self.observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: false,
                characterData: false
            });
        });
    };

    self.wrapInputWithShortcut = function(input) {
        if (input.val() && (typeof shortcutBase !== 'undefined') && (input.parent().attr('id')!=='shortcutBrick')) {
            var shortcutToken = /s\/([^\/]+)$/.exec(input.val());
            if (shortcutToken) {
                var shortcutValue = shortcutBase + shortcutToken[1],
                    shortcutInput = $('<input id="shortcutText" type="text" value="' + shortcutValue + '">'),
                    shortcutButton = $('<a id="shortcutButton">'),
                    shortcutBrick = $('<div id="shortcutBrick">');

                shortcutButton.on('click', function(){
                    $('#shortcutBrick').toggleClass('active');
                });
                shortcutInput.on('click', function() {
                    this.focus();
                    this.select();
                });

                input.wrap(shortcutBrick).after(shortcutButton).after(shortcutInput);
            }
        }
    };

    self.init();

}(jQuery));
