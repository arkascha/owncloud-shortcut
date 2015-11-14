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
 * @file js/admin.js
 * @author Christian Reiner
 */

(function($) {

    var self = this,
        timer,
        value,
        $shareBaseUrl,
        $shareBaseExample;

    self.init = function() {
        self.$shareBaseExample = $('#shortcut-share-base-example');
        self.$shareBaseUrl = $('#shortcut-share-base-url');
        self.updateShortcutExample(self.value);
    };

    self.createRandomToken = function(length) {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i) {
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        return result;
    };

    self.updateShortcutExample = function(baseUrl) {
        var shareUrl = self.$shareBaseUrl.val() || self.$shareBaseUrl.attr('placeholder'),
            shareToken = self.createRandomToken(16),
            exampleShareUrl = $('<span class="example-share-url">').text(shareUrl),
            exampleShareToken = $('<span class="example-share-token">').text(shareToken);

        self.$shareBaseExample.text('').append(exampleShareUrl).append(exampleShareToken);
    };

    self.permuteExampleUrl = function() {
        setTimeout(function() {
            self.updateShortcutExample();
            self.permuteExampleUrl();
        }, 2500);
    };

    self.updateShortcutSetting = function(value) {
        if (self.timer) {
            clearTimeout(self.timer);
        }
        self.timer = setTimeout(function(){
            OC.AppConfig.setValue('shortcut', 'share-base-url', value);
        }, 1000);
    };

    self.handleValueChanges = function() {
        self.$shareBaseUrl.on('change keyup', function() {
            self.value = $(this).val();
            self.updateShortcutExample(self.value);
            self.updateShortcutSetting(self.value);
        });
    };

    $(document).ready(function() {
        self.init();
        self.handleValueChanges();
        self.permuteExampleUrl();
    });

}(jQuery));
