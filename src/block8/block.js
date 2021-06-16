
//  Import CSS.
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Block Registration
*/
registerBlockType( 'pts/thirdteen-row-based-products-table', {
	title: __( '13 Row Based Products Table' ),
	category: 'product-table-blocks',
    icon: {
		src: 'table-col-after',
		foreground: '#03256c'
	},
	keywords: [
		__( 'Products Table' ),
	],
	attributes,
	edit,
	save: ({ className, attributes }) => {
		const { make, model, image, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, containerBg, containerColor, containerTopBorderWidth, containerBottomBorderWidth, containerLeftBorderWidth, containerRightBorderWidth, containerBorderColor, makeHeight, modelHeight, imageHeight, row4Height, row5Height, row6Height, row7Height, row8Height, row9Height, row10Height, row11Height, row12Height, row13Height, headingColWidth, productsColWidth, hideOnMobileClass } = attributes;
		return (
            <div className={`${className} ${hideOnMobileClass}`}>
                <div 
                    className={`featured-headings`}
                    style={{
                        color: containerColor,
                        backgroundColor: containerBg,
                        borderTop: `${containerTopBorderWidth}px solid ${containerBorderColor}`,
                        borderBottom: `${containerBottomBorderWidth}px solid ${containerBorderColor}`,
                        borderLeft: `${containerLeftBorderWidth}px solid ${containerBorderColor}`,
                        borderRight: `${containerRightBorderWidth}px solid ${containerBorderColor}`,
                        width: `${headingColWidth}%`
                    }}
                >
                    <div 
                        className="make-wrapper" 
                        style={{
                            height: makeHeight
                        }}
                    >
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
                        <RichText.Content
                            tagName="span"
                            value={ image }
                        />
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
                    <div className="affiliate-btn-wrapper"></div>
                </div>
                <div className="table-content" style={{ width: `${productsColWidth}%` }}>
                    <InnerBlocks.Content />
                </div>
            </div>
		);
	},
} );
