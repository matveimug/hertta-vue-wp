<?php
// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
	add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );

// Load scripts
function load_vue_scripts() {

	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-js',
		get_stylesheet_directory_uri() . '/dist/scripts/index.min.bundle.js',
		array( 'jquery' ),
		filemtime( get_stylesheet_directory() . '/dist/scripts/index.min.bundle.js' ),
		true
	);

	wp_enqueue_script(
		'my-script',
		get_stylesheet_directory_uri() . '/dummy.js'
	);
	$translation_array = array(
		'templateUrl' => get_stylesheet_directory_uri(),
		'homeUrl' => get_home_url()
	);
	//after wp_enqueue_script
	wp_localize_script( 'my-script', 'wp_obj_from_functions', $translation_array );

//	wp_enqueue_style(
//		'vuejs-wordpress-theme-starter-css',
//		get_stylesheet_directory_uri() . '/dist/styles.css',
//		null,
//		filemtime( get_stylesheet_directory() . '/dist/styles.css' )
//	);

}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );



function mytheme_register_nav_menu(){
	register_nav_menus( array(
		'primary_menu' => __( 'Primary Menu', 'hertta-vue-wp' )
	) );
}
add_action( 'after_setup_theme', 'mytheme_register_nav_menu', 0 );