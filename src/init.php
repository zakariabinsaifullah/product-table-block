<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Registration Function 
*/
function ptsb_blocks_register( $block, $options=array() ){
    return register_block_type(
        'pts/' . $block,
        array_merge(
			array(
				'style'         => 'products_table_slider-style-css',
				'editor_script' => 'products_table_slider-block-js',
				'editor_style'  => 'products_table_slider-block-editor-css',
			),
            $options
        )
    );
}

function ptsb_blocks_init() {
	wp_register_style(
		'products_table_slider-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		is_admin() ? array( 'wp-editor' ) : null,
		null
	);
	// Register block editor script for backend.
	wp_register_script(
		'products_table_slider-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);
	// Register block editor styles for backend.
	wp_register_style(
		'products_table_slider-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		null
	);

	// Register Blocks 
	ptsb_blocks_register( 'eight-row-single-product' );
	ptsb_blocks_register( 'eight-row-based-products-table' );
	ptsb_blocks_register( 'eight-row-based-products-table-mobile-view' );

	ptsb_blocks_register( 'thirdteen-row-single-product' );
	ptsb_blocks_register( 'thirdteen-row-based-products-table' );
	ptsb_blocks_register( 'thirdteen-row-based-products-table-mobile-view' );

}
add_action( 'init', 'ptsb_blocks_init' );

/*
 * New Category
 * */
function ptsb_blocks_new_cat( $categories ){
	return array_merge(
		$categories,
		array(
			array(
				'title' => 'Product Table Blocks',
				'slug'  => 'product-table-blocks'
			)
		)
	);
}
add_filter( 'block_categories', 'ptsb_blocks_new_cat' );

