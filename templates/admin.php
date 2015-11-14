<?php
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
 * @file templates/admin.php
 * @author Christian Reiner
 */
?>

<div class="section" id="shortcut-settings">
    <div>
        <h2 class="inlineblock">Shortcut</h2>
        <a target="_blank" class="icon-info svg" title="?" href="https://github.com/arkascha/owncloud-shortcut/wiki"></a>
    </div>

    <div id="shortcutBrick">
        <input type="text" style="width: 30em"
               name="shortcut-share-base-url" id="shortcut-share-base-url"
               placeholder="<?php echo $_['shortcut-share-base-placeholder'] ?>"
               value="<?php echo $_['shortcut-share-base-url'] ?>" />
        <label id="shortcut-share-base-example" for="shortcut-share-base-url"></label>
        <a id="shortcutButton"></a><input id="shortcutText" type="text" value="https://c-r.in/xU7VHRJWj1hwOHb">
    </div>
</div>
