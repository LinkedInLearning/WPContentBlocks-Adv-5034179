<?php

/**
 * Plugin Name: Podkit
 * Plugin URI: https://github.com/LinkedInLearning/WPContentBlocks-Adv-5034179
 * Description: Custom block plugin from the LinkedIn Learning course "WordPress Content Blocks: Advanced".
 * Version: 1.0.0
 * Author: Morten Rand-Hendriksen
 *
 * @package podkit
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load translations (if any) for the plugin from the /languages/ folder.
 * 
 * @link https://developer.wordpress.org/reference/functions/load_plugin_textdomain/
 */
add_action( 'init', 'podkit_load_textdomain' );

function podkit_load_textdomain() {
	load_plugin_textdomain( 'podkit', false, basename( __DIR__ ) . '/languages' );
}

/** 
 * Add custom image size for block featured image.
 * 
 * @link https://developer.wordpress.org/reference/functions/add_image_size/
 */
add_action( 'init', 'podkit_add_image_size' );

function podkit_add_image_size() {
	add_image_size( 'podkitFeatImg', 250, 250, array( 'center', 'center' ) ); 
}

/** 
 * Register custom image size with sizes list to make it available.
 * 
 * @link https://codex.wordpress.org/Plugin_API/Filter_Reference/image_size_names_choose
 */
add_filter( 'image_size_names_choose', 'podkit_custom_sizes' );

function podkit_custom_sizes( $sizes ) {
	return array_merge( $sizes, array(
		'podkitFeatImg' => __('Podkit Featured Image'),
	) );
}

/** 
 * Add custom "Podkit" block category
 * 
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#managing-block-categories
 */
add_filter( 'block_categories', 'podkit_block_categories', 10, 2 );

function podkit_block_categories( $categories, $post ) {
	if ( $post->post_type !== 'post' ) {
		return $categories;
	}
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'podkit',
				'title' => __( 'Podkit', 'podkit' ),
				'icon'  => 'microphone',
			),
		)
	);
}

/**
 * Registers all block assets so that they can be enqueued through the Block Editor in
 * the corresponding context.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
 */
add_action( 'init', 'podkit_register_blocks' );

function podkit_register_blocks() {

	// If Block Editor is not active, bail.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Retister the block editor script.
	wp_register_script(
		'podkit-editor-script',											// label
		plugins_url( 'build/index.js', __FILE__ ),						// script file
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', "wp-data" ),		// dependencies
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )		// set version as file last modified time
	);

	// Register the block editor stylesheet.
	wp_register_style(
		'podkit-editor-styles',											// label
		plugins_url( 'build/editor.css', __FILE__ ),					// CSS file
		array( 'wp-edit-blocks' ),										// dependencies
		filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )	// set version as file last modified time
	);

	// Register the front-end stylesheet.
	wp_register_style(
		'podkit-front-end-styles',										// label
		plugins_url( 'build/style.css', __FILE__ ),						// CSS file
		array( ),														// dependencies
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )	// set version as file last modified time
	);

	// Array of block created in this plugin.
	$blocks = [
		'podkit/static',
		'podkit/editable',
		'podkit/media',
		'podkit/extended'

	];
	
	// Loop through $blocks and register each block with the same script and styles.
	foreach( $blocks as $block ) {
		register_block_type( $block, array(
			'editor_script' => 'podkit-editor-script',					// Calls registered script above
			'editor_style' => 'podkit-editor-styles',					// Calls registered stylesheet above
			'style' => 'podkit-front-end-styles',						// Calls registered stylesheet above
		) );	  
	}

	// Register dynamic block.
	register_block_type( 'podkit/dynamic', array(
		'editor_script' => 'podkit-editor-script',
		'editor_style' => 'podkit-editor-styles',
		'style' => 'podkit-front-end-styles',
		'render_callback' => 'podkit_dynamic_render_callback'
	) );

	if ( function_exists( 'wp_set_script_translations' ) ) {
	/**
	 * Adds internationalization support. 
	 * 
	 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/internationalization/
	 * @link https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
	 */
	wp_set_script_translations( 'podkit-editor-script', 'podkit', plugin_dir_path( __FILE__ ) . '/languages' );
	}

}

/**
 * Serve up featured image is available, otherwise serve up logo.
 * Returns <img> element.
 * 
 * $post - object - The post object.
 */ 
function podkit_post_img( $post ) {
	$podkit_img = get_the_post_thumbnail( $post, 'podkitFeatImg' );
	if ( empty( $podkit_img ) ) {
		$url = plugins_url( "src/bv-logo-white.svg", __FILE__ );
		$podkit_img = '<img src="' . $url . '" alt="Binaryville Podcast Logo" />';
	}
	return $podkit_img;
}

/**
 * Render the saved output from the dynamic block.
 * 
 * $attributes - array - Block attributes.
 * $content - Block inner content.
 */
function podkit_dynamic_render_callback( $attributes, $content ) {
	global $post;

	// Get the latest posts using wp_get_recent_posts().
	$recent_posts = wp_get_recent_posts ( array(
		'category' => 2,
		'numberposts' => 1,
		'post_status' => 'publish',
	) );
	
	// Check if any posts were returned, if not, say so.
	if ( 0 === count( $recent_posts ) ) {
		return 'No posts.';
	}

	// Get the post ID for the first post returned.
	$post_id = $recent_posts[0]['ID'];
	
	// Get the post object based on post ID.
	$post = get_post( $post_id );

	// Setup postdata so regular template functions work.
	setup_postdata($post);

	return sprintf(
		'<div class="podkit-block podkit-dynamic">
			<figure class="podkit-logo">
				%1$s
			</figure>
			<div class="podkit-info">
				<div class="podkit-nameplate">
					The Binaryville Podcast
				</div>
				<h3 class="podkit-title">
					%2$s
				</h3>
			</div>
			<div class="podkit-description">
				%3$s
			</div>
			<div class="podkit-cta">
				<a href="%4$s">%5$s</a>
			</div>
		</div>',
		podkit_post_img( $post ),
		esc_html( get_the_title($post) ),
		esc_html( get_the_excerpt($post) ),
		esc_url( get_the_permalink($post) ),
		__("Listen now!", "podkit")
	);

	// Reset postdata to avoid conflicts.
	wp_reset_postdata();
	
}