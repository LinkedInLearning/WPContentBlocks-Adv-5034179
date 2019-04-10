const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack
import { ReactComponent as Logo } from "../bv-logo.svg";

// Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader
import logoWhiteURL from "../bv-logo-white.svg";

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("podkit/static", {
  title: __("Like & Subscribe", "podkit"),
  icon: { src: Logo },
  category: "podkit",

  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit() {
    return (
      <div className="podkit-block podkit-static">
        <figure className="podkit-logo">
          <img src={logoWhiteURL} alt="logo" />
        </figure>
        <div className="podkit-info">
          <h3 className="podkit-title">
            {__("The Binaryville Podcast", "podkit")}
          </h3>
          <div className="podkit-cta">
            <a href="#">{__("Like & Subscribe!", "podkit")}</a>
          </div>
        </div>
      </div>
    );
  },
  save() {
    return (
      <div className="podkit-block podkit-static">
        <figure className="podkit-logo">
          <img src={logoWhiteURL} alt="logo" />
        </figure>
        <div className="podkit-info">
          <h3 className="podkit-title">
            {__("The Binaryville Podcast", "podkit")}
          </h3>
          <div className="podkit-cta">
            <a href="/subscribe">{__("Like & Subscribe!", "podkit")}</a>
          </div>
        </div>
      </div>
    );
  }
});
