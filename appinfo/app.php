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
 * @file appinfo/app.php
 * @author Christian Reiner
 */

// basic usage assets
OCP\Util::addScript( 'shortcut', 'share' );
OCP\Util::addStyle( 'shortcut', 'share' );

// admin section assets
OCP\App::registerAdmin('shortcut', 'public/admin');
OCP\Util::addScript( 'shortcut', 'admin' );
OCP\Util::addStyle( 'shortcut', 'admin' );
