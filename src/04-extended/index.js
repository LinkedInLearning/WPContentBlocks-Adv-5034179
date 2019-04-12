const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, URLInputButton } = wp.editor;
const { IconButton } = wp.components;

import { ReactComponent as Logo } from "../bv-logo.svg";
import logoWhiteURL from "../bv-logo-white.svg";

registerBlockType("podkit/extended", {
  title: __("Extended episode promo", "podkit"),
  icon: { src: Logo },
  category: "podkit",
  attributes: {
    epsiodeTitle: {
      type: "string",
      source: "html",
      selector: ".podkit-title"
    },
    episodeImage: {
      type: "string",
      source: "attribute",
      selector: ".podkit-logo img",
      attribute: "src",
      default: logoWhiteURL
    },
    episodeDescription: {
      type: "array",
      source: "children",
      multiline: "p",
      selector: ".podkit-description"
    },
    episodeURL: {
      type: "string",
      source: "attribute",
      selector: ".podkit-cta a",
      attribute: "href"
    }
  },
  supports: {
    align: [ 'wide', 'full' ]
  },

  edit: props => {

    // Lift info from props and populate various constants.
    const {
      attributes: { 
        epsiodeTitle, 
        episodeImage, 
        episodeDescription, 
        episodeURL },
      className,
      setAttributes
    } = props;

    // Grab newEpisodeTitle, set the value of episodeTitle to newEpisodeTitle.
    const onChangeEpisodeTitle = newEpisodeTitle => {
      setAttributes({ epsiodeTitle: newEpisodeTitle });
    };

    // Grab imageObject, set the value of episodeImage to imageObject.sizes.podkitFeatImg.url.
    const onImageSelect = imageObject => {
      setAttributes({ episodeImage: imageObject.sizes.podkitFeatImg.url });
    };

    // Grab newEpisodeDescription, set the value of episodeDescription to newEpisodeDescription.
    const onChangeEpisodeDescription = newEpisodeDescription => {
      setAttributes({ episodeDescription: newEpisodeDescription });
    };

    // Grab newEpisodeURL, set the value of episodeURL to newEpisodeURL.
    const onChangeEpisodeURL = newEpisodeURL => {
      setAttributes({ episodeURL: newEpisodeURL });
    };

    return (
      <div className={`${className} podkit-block podkit-editable`}>
        <figure className="podkit-logo">
          <img src={episodeImage} alt="logo" />
          <MediaUpload
            onSelect={onImageSelect}
            type="image"
            value={episodeImage}
            render={({ open }) => (
              <IconButton
                className="podkit-logo__button"
                onClick={open}
                icon="format-image"
                showTooltip="true"
                label={__("Change image.", "podkit")}
              /> 
            )}
          />
        </figure>
        <div className="podkit-info">
          <div className="podkit-nameplate">
            {__("The Binaryville Podcast", "podkit")}
          </div>
          <h3 className="podkit-title">
            <RichText 
              placeholder={__("Podcast episode title", "podkit")}
              value={epsiodeTitle}
              onChange={onChangeEpisodeTitle}
            />
          </h3>
        </div>
        <div className="podkit-description">
          <RichText
            multiline="p"
            placeholder={__("Episode description", "podkit")}
            onChange={onChangeEpisodeDescription}
            value={episodeDescription}
          />
        </div>
        <div className="podkit-cta">
          {/* Note: href is NOT populated with attribute to avoid
              accidental navigation from within the editor. */}
          <a href="#">{__("Listen now!", "podkit")}</a>
          <URLInputButton
            className="podkit-dropdown__input"
            label={__("Episode URL", "podkit")}
            onChange={onChangeEpisodeURL}
            url={episodeURL}
          />
        </div>
      </div>
    );
  },
  save: props => {
    const {
      attributes: {  
        epsiodeTitle, 
        episodeImage, 
        episodeDescription, 
        episodeURL }
    } = props;

    return (
      <div className="podkit-block podkit-static">
        <figure className="podkit-logo">
          <img src={episodeImage} alt="logo" />
        </figure>
        <div className="podkit-info">
          <div className="podkit-nameplate">
            {__("The Binaryville Podcast", "podkit")}
          </div>
          <h3 className="podkit-title">
            <RichText.Content value={epsiodeTitle} />
          </h3>
        </div>
        <div className="podkit-description">
          <RichText.Content
            multiline="p"
            value={episodeDescription}
          />
        </div>
        <div className="podkit-cta">
          {/* Note: href IS populated with attribute here
              because this is where the link is saved. */}
          <a href={episodeURL}>
            {__("Listen now!", "podkit")}
          </a>
        </div>
      </div>
    );
  }
});
