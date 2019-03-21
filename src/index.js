const { __ } = window.wp.i18n;
const { registerBlockType } = window.wp.blocks;
const { Fragment } = window.wp.element;
const { InspectorControls, PanelColorSettings, RichText } = window.wp.editor;

registerBlockType( 'jsforwp/callout-block', {
	title: 'Callout Block',
	icon: 'megaphone',
	category: 'common',
	attributes: {
		content: {
			source: 'html',
			selector: 'h2',
		},
		backgroundColor: {
			type: 'string',
			default: '#900900',
		},
		textColor: {
			type: 'string',
			default: '#ffffff',
		},
	},

	edit: ( props ) => {
		const {
			attributes: { backgroundColor, textColor, content },
			setAttributes,
			className,
		} = props;
		return (
			<Fragment>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings', 'jsforwp' ) }
						colorSettings={ [
							{
								label: __( 'Background Color', 'jsforwp' ),
								value: backgroundColor,
								onChange: ( newBackgroundColor ) => {
									setAttributes( { backgroundColor: newBackgroundColor } );
								},
							},
							{
								label: __( 'Text Color', 'jsforwp' ),
								value: textColor,
								onChange: ( newColor ) => {
									setAttributes( { textColor: newColor } );
								},
							},
						] }
					/>
				</InspectorControls>
				<RichText
					tagName="h2"
					className={ className }
					value={ content }
					style={ {
						backgroundColor,
						color: textColor,
					} }
					onChange={ ( newContent ) => {
						setAttributes( { content: newContent } );
					} }
				/>
			</Fragment>
		);
	},
	save: ( props ) => {
		const {
			attributes: { backgroundColor, textColor, content },
			className,
		} = props;
		return (
			<RichText.Content
				tagName="h2"
				className={ className }
				value={ content }
				style={ {
					backgroundColor,
					color: textColor,
				} }
			/>
		);
	},
} );
