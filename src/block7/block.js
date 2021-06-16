const { Fragment } = wp.element;
import { RichText } from '@wordpress/block-editor';
//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Block Registration
*/
registerBlockType( 'pts/thirdteen-row-single-product', {
	title: __( '13 Row Based Single Product' ),
    icon: {
		src: 'cart',
		foreground: '#03256c'
	},
	category: 'product-table-blocks',
	keywords: [
		__( 'Single Product' ),
	],
	attributes,
	edit,
	save: ({ className, attributes }) => {
        const { showBadge, badge, badgeColor, badgeBg, make, model, id, url, alt, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, showAffBtn, affiliateBtnLabel, afbLink, afbTab, afbColor, afbBg, containerBg, containerColor, containerTopBorderWidth, containerBottomBorderWidth, containerLeftBorderWidth, containerRightBorderWidth, containerBorderColor, makeHeight, modelHeight, imageHeight, row4Height, row5Height, row6Height, row7Height, row8Height, row9Height, row10Height, row11Height, row12Height, row13Height } = attributes;
		return (
            <div 
                className={`${className}`}
                style={{
                    color: containerColor,
                    backgroundColor: containerBg,
                    borderTop: `${containerTopBorderWidth}px solid ${containerBorderColor}`,
                    borderBottom: `${containerBottomBorderWidth}px solid ${containerBorderColor}`,
                    borderLeft: `${containerLeftBorderWidth}px solid ${containerBorderColor}`,
                    borderRight: `${containerRightBorderWidth}px solid ${containerBorderColor}`,
                }}
            >
                <div 
                    className="make-wrapper" 
                    style={{
                        height: makeHeight
                    }}
                >
                    {
                        showBadge &&
                        <div className="badge" style={{ backgroundColor: badgeBg, color: badgeColor}}>
                            { badge }
                        </div>
                    }
                    <RichText.Content
                        tagName="span"
                        value={ make }
                    />
                </div>
                <div 
                    className="model-wrapper" 
                    style={{
                        height: modelHeight
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ model }
                    />
                </div>
                <div 
                    className="image-wrapper" 
                    style={{
                        height: imageHeight
                    }}
                >
                    {
                        url &&
                        <div className="product-image-container">
                            <img src={url} alt={alt} className={`product-image wp-image-${id}`} />
                        </div>
                    }
                </div>
                <div 
                    className="ledtype-wrapper" 
                    style={{
                        height: row4Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row4 }
                    />
                </div>
                <div 
                    className="batterytime-wrapper" 
                    style={{
                        height: row5Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row5 }
                    />
                </div>
                <div 
                    className="brightness-batterytime-wrapper" 
                    style={{
                        height: row6Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row6 }
                    />
                </div>
                <div 
                    className="kitnumber-wrapper" 
                    style={{
                        height: row7Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row7 }
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row8Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row8 }
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row9Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row9 }
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row10Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row10 }
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row11Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row11 }
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row12Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row12 }
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row13Height
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ row13 }
                    />
                </div>
                <div className="affiliate-btn-wrapper">
                    {
                        showAffBtn &&
                        <a href={ afbLink } rel="nofollow noopener" target={`_${afbTab}`} style={{ color: afbColor, backgroundColor: afbBg}}>
                            { affiliateBtnLabel }
                        </a>
                    }
                </div>
            </div>
		);
	},
} );
