# Translation

In order for this block to be translated we first need to set up our  `Text Domain:` and `Domain Path:`. 

## Loading out translations

loading our textdomain:

```php
add_action( 'plugins_loaded', 'jsforwp_load_textdomain' );

function jsforwp_load_textdomain() {
	load_plugin_textdomain('jsforwp', false, basename( dirname( __FILE__ ) ) . '/languages/');
}
```

setting the script translation
```php
wp_set_script_translations( $handle_of_our_registered_editor_script, $textdomain, $translation_folder_path );
```
in our case
```php
wp_set_script_translations( 'jsforwp-callout-block', 'jsforwp', plugin_dir_path( __FILE__ ) . 'languages/' );

```

## Creating our translations

In this case this is all done through the command line. 

### `.pot`

from inside the plugin directory run the following

```bash
wp i18n make-pot callout-block/ callout-block/languages/jsforwp-pot
```

then we create the .po file using whatever program you preffer. I use [PoEdit](https://poedit.net).

once you have the .po file named `jsforwp_de_DE.po` the next step is to create our `.json` file.

therefore you can use [po2json](https://www.npmjs.com/package/po2json). There is something inside the wp-cli aswell but that doesn't seem to work for me. 

the important part about the naming of the .json file it follows this pattern:

`textdomain-de_DE-handle.json`

creating our .json file
```bash
cd callout-block/languages/
po2json jsforwp-de_DE.po jsforwp-de_DE-jsforwp-callout-block.json -f jed
```

That should be it...



