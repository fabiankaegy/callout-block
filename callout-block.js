var createElement = wp.element.createElement,
    registerBlockType = wp.blocks.registerBlockType,
    __ = wp.i18n.__;

registerBlockType( 'jsforwp/callout-block', {
    title: 'Callout Block',

    icon: 'megaphone',

    category: 'common',

    attributes: {
		content: {
			source: 'html',
			selector: 'h2',
		},
	},

	edit: function( props ) {
		return wp.element.createElement( wp.editor.RichText, {
			tagName: 'h5',
			className: props.className,
			value: props.attributes.content,
			onChange: function( content ) {
				props.setAttributes( { content: content } );
			}
		} );
	},

	save: function( props ) {
		return wp.element.createElement( wp.editor.RichText.Content, {
			tagName: 'h5', value: props.attributes.content
		} );
	}
} );