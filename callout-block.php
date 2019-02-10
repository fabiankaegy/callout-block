<?php
/**
 * Plugin Name: Callout Block
 * Description: Creates a Gutenberg Block to add a callout component to the page.
 * Author: zgordon, fabiankaegy
 * Author URI: https://javascriptforwp.com
 * Text Domain: jsforwp
 * Domain Path: /languages
 * Version: 1.0.0
 */

add_action( 'plugins_loaded', 'jsforwp_load_textdomain' );

function jsforwp_load_textdomain() {
	load_plugin_textdomain('jsforwp', false, basename( dirname( __FILE__ ) ) . '/languages');
}

add_action('init', 'jsforwp_register_block_assets');

function jsforwp_register_block_assets() {

	$block_path = '/callout-block.js';
	wp_register_script(
		'jsforwp-callout-block',
		plugins_url( $block_path , __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( plugin_dir_path( $block_path , __FILE__ ) )
	);

	$style_path = '/callout-block.css';
	wp_register_style(
		'jsforwp-callout-block-styles',
		plugins_url( $style_path , __FILE__ ),
		[],
		filemtime( plugin_dir_path( $style_path , __FILE__ ) )
    );
	
	wp_set_script_translations( 'jsforwp-callout-block', 'jsforwp', plugin_dir_path( __FILE__ ) . 'languages' );

    register_block_type( 'jsforwp/callout-block', array(
		'editor_script' => 'jsforwp-callout-block',
		'style' => 'jsforwp-callout-block-styles',
	) );
    
}
