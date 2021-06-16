<?php
/**
 * Plugin Name: Products Table Block
 * Description: <strong>Products Table Block </strong> is a custom Gutenberg Block developed with Gutenberg Native Components to showcase the products in a sliding table view.
 * Author: Zakaria Binsaifullah
 * Author URI: https://webackstop.com/
 * Version: 1.5.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
