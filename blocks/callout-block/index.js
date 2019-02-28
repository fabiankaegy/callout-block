const { __ } = wp.i18n;
const { RichText, InspectorControls, PanelColorSettings } = wp.editor;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;

import "./style.css";

registerBlockType("jsforwp/callout-block", {
  title: "Callout Block",

  icon: "megaphone",

  category: "common",

  attributes: {
    content: {
      source: "html",
      selector: "h2"
    },
    backgroundColor: {
      type: "string",
      default: "#900900"
    },
    textColor: {
      type: "string",
      default: "#ffffff"
    }
  },

  edit: function(props) {
    const {
      attributes: { backgroundColor, content, textColor },
      setAttributes,
      className
    } = props;
    return (
      <Fragment>
        <InspectorControls>
          <PanelColorSettings
            title={__("Color Settings", "jsforwp")}
            colorSettings={[
              {
                label: __("Background Color", "jsforwp"),
                value: backgroundColor,
                onChange: backgroundColor => setAttributes({ backgroundColor })
              },
              {
                label: __("Text Color", "jsforwp"),
                value: textColor,
                onChange: textColor => setAttributes({ textColor })
              }
            ]}
          />
        </InspectorControls>
        <RichText
          tagName="h2"
          className={className}
          value={content}
          style={{
            backgroundColor: backgroundColor,
            color: textColor
          }}
          onChange={content => setAttributes({ content })}
        />
      </Fragment>
    );
  },

  save: function(props) {
    const {
      attributes: { backgroundColor, content, textColor },
      className
    } = props;
    return (
      <RichText.Content
        tagName="h2"
        className={className}
        value={content}
        style={{
          backgroundColor: backgroundColor,
          color: textColor
        }}
      />
    );
  }
});
