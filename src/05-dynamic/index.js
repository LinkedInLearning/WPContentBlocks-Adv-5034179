const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;

import { ReactComponent as Logo } from "../bv-logo.svg";
import logoWhiteURL from "../bv-logo-white.svg";

registerBlockType("podkit/dynamic", {
  title: __("Latest episode promo", "podkit"),
  icon: { src: Logo },
  category: "podkit",
  supports: {
    align: [ 'wide', 'full' ]
  },
  styles: [
    {
        name: 'default',
        label: __( 'Red (default)', "podkit" ),
        isDefault: true
    },
    {
        name: 'blue',
        label: __( 'Blue', "podkit" )
    },
    {
        name: 'yellow',
        label: __( 'Yellow', "podkit" )
    }
  ],

  edit: withSelect( select => {
    return {
      // Send a GET query to the REST API.
      posts: select( "core" ).getEntityRecords( "postType", "post", {
        categories: 2,
        per_page: 1
      })
    };
  })(({ posts, className }) => {
    // Wait for posts to be returned.
    if ( !posts ) {
      return "Loading...";
    }
    
    // If no posts are returned.
    if ( posts && posts.length === 0 ) {
      return "No posts";
    }

    // Grab the first post.
    const post = posts[0];
    console.info(post);

    return (
      <div className={`${className} podkit-block podkit-dynamic`} >
        <figure className="podkit-logo">
          <img src={logoWhiteURL} alt="logo" />
        </figure>
        <div className="podkit-info">
          <div className="podkit-nameplate">
            {__("The Binaryville Podcast", "podkit")}
          </div>
          <h3 className="podkit-title">
            {post.title.rendered}
          </h3>
        </div>
        <div className="podkit-description">
          {post.excerpt.rendered}
        </div>
        <div className="podkit-cta">
          <a href={post.link}>{__("Listen now!", "podkit")}</a>
        </div>
      </div>
    );
  }),
  
  save(props) {
    return null;
  }
});
