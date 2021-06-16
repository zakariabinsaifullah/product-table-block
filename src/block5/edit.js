const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl, ToggleControl } from '@wordpress/components';
const { __ } = wp.i18n;

const Edit = ({ className, attributes, setAttributes }) => {
    const { make, model, image, row4, row5, row6, row7, row8, containerBg, containerColor, containerTopBorderWidth, containerBottomBorderWidth, containerLeftBorderWidth, containerRightBorderWidth, containerBorderColor, makeHeight, modelHeight, imageHeight, row4Height, row5Height, row6Height, row7Height, row8Height, headingColWidth, productsColWidth, hideOnMobile, hideOnMobileClass } = attributes;
    // width adjustment
    setAttributes({
        productsColWidth: (100-headingColWidth)
    });
    // mobile hide class
    setAttributes({
        hideOnMobileClass: hideOnMobile ? "hide-on-mobile" : null
    });
    return(
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title="Responsive Settings"
                    initialOpen={ true }
                >
                    <ToggleControl
                        label="Hide on Mobile View?"
                        checked={ hideOnMobile }
                        onChange={ () => setAttributes({ hideOnMobile: ! hideOnMobile }) }
                    />
                </PanelBody>
                <PanelBody
                    title="Columns Width Adjustment"
                    initialOpen={ true }
                >
                    <RangeControl
                        label="Heading Column Width"
                        value={ headingColWidth }
                        onChange={ ( headingColWidth ) => setAttributes( { headingColWidth } ) }
                        min={ 0 }
                        max={ 100 }
                        help="Unit: %. Total width = 100%"
                    />
                    <TextControl
                        label="Products Columns Width"
                        value={ productsColWidth }
                        readOnly= { true }
                        help="Unit: %. Total width = 100%. This width will be calcuated automatically."
                    />
                </PanelBody>
                <PanelBody
                    title="Heading Column Border Settings"
                    initialOpen={ false }
                >
                    <RangeControl
                        label="Top Border Width"
                        value={ containerTopBorderWidth }
                        onChange={ ( containerTopBorderWidth ) => setAttributes( { containerTopBorderWidth } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                    <RangeControl
                        label="Bottom Border Width"
                        value={ containerBottomBorderWidth }
                        onChange={ ( containerBottomBorderWidth ) => setAttributes( { containerBottomBorderWidth } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                    <RangeControl
                        label="Left Border Width"
                        value={ containerLeftBorderWidth }
                        onChange={ ( containerLeftBorderWidth ) => setAttributes( { containerLeftBorderWidth } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                    <RangeControl
                        label="Right Border Width"
                        value={ containerRightBorderWidth }
                        onChange={ ( containerRightBorderWidth ) => setAttributes( { containerRightBorderWidth } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                </PanelBody>
                <PanelColorSettings
                    title={ __( 'Heading Column Color Settings' ) }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: containerColor,
                            onChange: ( colorValue ) => setAttributes( { containerColor: colorValue } ),
                            label: __( 'Color' ),
                        },
                        {
                            value: containerBg,
                            onChange: ( colorValue ) => setAttributes( { containerBg: colorValue } ),
                            label: __( 'Background Color' ),
                        },
                        {
                            value: containerBorderColor,
                            onChange: ( colorValue ) => setAttributes( { containerBorderColor: colorValue } ),
                            label: __( 'Border Color' ),
                        },
                    ] }
                />
                <PanelBody 
                    title={__("Heights Adjustment")}
                    initialOpen= { false }
                >
                    <RangeControl
                        label="Make Area Height"
                        help="Default: 66px"
                        value={ makeHeight }
                        onChange={ ( makeHeight ) => setAttributes( { makeHeight } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Model Area Height"
                        help="Default: 40px"
                        value={ modelHeight }
                        onChange={ ( modelHeight ) => setAttributes( { modelHeight } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Product Image Area"
                        help="Default: 175px"
                        value={ imageHeight }
                        onChange={ ( imageHeight ) => setAttributes( { imageHeight } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Row 4 Height"
                        help="Default: 40px"
                        value={ row4Height }
                        onChange={ ( row4Height ) => setAttributes( { row4Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Row 5 Height"
                        help="Default: 40px"
                        value={ row5Height }
                        onChange={ ( row5Height ) => setAttributes( { row5Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Row 6 Height"
                        help="Default: 40px"
                        value={ row6Height }
                        onChange={ ( row6Height ) => setAttributes( { row6Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Row 7 Height"
                        help="Default: 40px"
                        value={ row7Height }
                        onChange={ ( row7Height ) => setAttributes( { row7Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Row 8 Height"
                        help="Default: 40px"
                        value={ row8Height }
                        onChange={ ( row8Height ) => setAttributes( { row8Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                </PanelBody>
            </InspectorControls>
            <div className={`${className}`}>
                <div 
                    className={`featured-headings`}
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
                        <RichText
                            tagName="span"
                            value={ make }
                            onChange={ ( make ) => setAttributes( { make } ) }
                            allowedFormats={['core/bold', 'core/italic' ]}
                        />
                    </div>
                    <div 
                        className="model-wrapper" 
                        style={{
                            height: modelHeight
                        }}
                    >
                        <RichText
                            tagName="span"
                            value={ model }
                            onChange={ ( model ) => setAttributes( { model } ) }
                            allowedFormats={['core/bold', 'core/italic' ]}
                        />
                    </div>
                    <div 
                        className="image-wrapper" 
                        style={{
                            height: imageHeight
                        }}
                    >
                        <RichText
                            tagName="span"
                            value={ image }
                            onChange={ ( image ) => setAttributes( { image } ) }
                            allowedFormats={['core/bold', 'core/italic' ]}
                        />
                    </div>
                    <div 
                        className="ledtype-wrapper" 
                        style={{
                            height: row4Height
                        }}
                    >
                        <RichText
                            tagName="span"
                            value={ row4 }
                            onChange={ ( row4 ) => setAttributes( { row4 } ) }
                            allowedFormats={['core/bold', 'core/italic' ]}
                        />
                    </div>
                    <div 
                        className="batterytime-wrapper" 
                        style={{
                            height: row5Height
                        }}
                    >
                        <RichText
                            tagName="span"
                            value={ row5 }
                            onChange={ ( row5 ) => setAttributes( { row5 } ) }
                            allowedFormats={['core/bold', 'core/italic' ]}
                        />
                    </div>
                    <div 
                        className="brightness-batterytime-wrapper" 
                        style={{
                            height: row6Height
                        }}
                    >
                        <RichText
                            tagName="span"
                            value={ row6 }
                            onChange={ ( row6 ) => setAttributes( { row6 } ) }
                            allowedFormats={['core/bold', 'core/italic' ]}
                        />
                    </div>
                    <div 
                        className="kitnumber-wrapper" 
                        style={{
                            height: row7Height
                        }}
                    >
                        <RichText
                            tagName="span"
                            value={ row7 }
                            onChange={ ( row7 ) => setAttributes( { row7 } ) }
                            allowedFormats={['core/bold', 'core/italic' ]}
                        />
                    </div>
                    <div 
                        className="dimmable-wrapper" 
                        style={{
                            height: row8Height
                        }}
                    >
                        <RichText
                            tagName="span"
                            value={ row8 }
                            onChange={ ( row8 ) => setAttributes( { row8 } ) }
                            allowedFormats={['core/bold', 'core/italic' ]}
                        />
                    </div>
                    <div className="affiliate-btn-wrapper"></div>
                </div>
                <div className="table-content">
                    <InnerBlocks
                        allowedBlocks={[ 'pts/eight-row-single-product' ]}
                        template={[
                            ['pts/eight-row-single-product', { placeholder: 'Add Product Item'}]
                        ]}
                    />
                </div>
            </div>
        </Fragment>    
    )
}

export default Edit;