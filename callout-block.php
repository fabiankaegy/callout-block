<?php
/**
 * Plugin Name: Callout Block
 * Description: Creates a Gutenberg Block to add a callout component to the page.
 * Author: zgordon, fabiankaegy
 * Author URI: https://javascriptforwp.com
 * Text Domain: jsforwp
 * Version: 1.1.0
 */

add_action('init', 'jsforwp_register_block_assets');

function jsforwp_register_block_assets() {

	$block_path = '/build/index.js';
	wp_register_script(
		'jsforwp-callout-block',
		plugins_url( $block_path , __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		time()
	);

	$style_path = '/build/style.css';
	wp_register_style(
		'jsforwp-callout-block-styles',
		plugins_url( $style_path , __FILE__ ),
		[],
		time()
	);
	
	$style_path = '/build/editor.css';
	wp_register_style(
		'jsforwp-callout-editor-block-styles',
		plugins_url( $style_path , __FILE__ ),
		[],
		time()
    );
    
    register_block_type( 'jsforwp/callout-block', array(
		'editor_script' => 'jsforwp-callout-block',
		'editor_style' => 'jsforwp-callout-editor-block-styles',
		'style' => 'jsforwp-callout-block-styles',
	) );
    
}
