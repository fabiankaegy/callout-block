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
			selector: 'h5',
        },
        backgroundColor: {
            type: 'string',
            default: '#900900',
        },
        textColor: {
            type: 'string',
            default: '#ffffff',
        }
	},

	edit: function( props ) {
		return createElement( 
            wp.element.Fragment, 
            null, 
            createElement(
                wp.editor.InspectorControls, 
                null,
                createElement(
                    wp.editor.PanelColorSettings, {
                        title: __("Color Settings", "jsforwp-callout-block"),
                        colorSettings: [
                            {
                                value: props.attributes.backgroundColor,
                                onChange: function( value ) {
                                    props.setAttributes({ backgroundColor: value });
                                },
                                label: __("Background Color", "jsforwp-callout-block")
                            },
                            {
                                value: props.attributes.textColor,
                                onChange: function( value ) {
                                    props.setAttributes({ textColor: value });
                                },
                                label: __("Text Color", "jsforwp-callout-block")
                            }
                        ]
                    }
                )
            ),
            createElement( 
                wp.editor.RichText, {
                    tagName: 'h5',
                    className: props.className,
                    value: props.attributes.content,
                    style: {
                        backgroundColor: props.attributes.backgroundColor,
                        color: props.attributes.textColor
                    },
                    onChange: function( content ) {
                        props.setAttributes( { content: content } );
                    }
                } 
            ) 
        );
	},

	save: function( props ) {
		return createElement( wp.editor.RichText.Content, {
            tagName: 'h5', 
            value: props.attributes.content,
            style: {
                backgroundColor: props.attributes.backgroundColor,
                color: props.attributes.textColor
            },		
        } );
	}
} );