const { Fragment } = wp.element;
import { BlockControls, InspectorControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl, TextControl, ToggleControl, Toolbar } from '@wordpress/components';
 
const { __ } = wp.i18n;

const Edit = ({ className, attributes, setAttributes }) => {
    const { showBadge, badge, badgeColor, badgeBg, make, model, id, url, alt, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, showAffBtn, affiliateBtnLabel, afbLink, afbNewTab, afbTab, afbColor, afbBg, containerBg, containerColor, containerTopBorderWidth, containerBottomBorderWidth, containerLeftBorderWidth, containerRightBorderWidth, containerBorderColor, makeHeight, modelHeight, imageHeight, row4Height, row5Height, row6Height, row7Height, row8Height, row9Height, row10Height, row11Height, row12Height, row13Height } = attributes;
    // Links condition 
    if( afbNewTab ) {
        setAttributes({ afbTab: 'blank' })
    }else {
        setAttributes({ afbTab: 'self' })
    }
    return(
        <Fragment>
            <InspectorControls>
                <PanelBody 
                    title={__("Container Settings")}
                    initialOpen= { true }
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
                    <PanelColorSettings
                        title={ __( 'Color Settings' ) }
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
                </PanelBody>
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
                    <RangeControl
                        label="Row 9 Height"
                        help="Default: 40px"
                        value={ row9Height }
                        onChange={ ( row9Height ) => setAttributes( { row9Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Row 10 Height"
                        help="Default: 40px"
                        value={ row10Height }
                        onChange={ ( row10Height ) => setAttributes( { row10Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Row 11 Height"
                        help="Default: 40px"
                        value={ row11Height }
                        onChange={ ( row11Height ) => setAttributes( { row11Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Row 12 Height"
                        help="Default: 40px"
                        value={ row12Height }
                        onChange={ ( row12Height ) => setAttributes( { row12Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label="Row 13 Height"
                        help="Default: 40px"
                        value={ row13Height }
                        onChange={ ( row13Height ) => setAttributes( { row13Height } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                </PanelBody>
                <PanelBody 
                    title={__("Badge Options")}
                    initialOpen= { false }
                >
                    <ToggleControl
                        label="Show Badge"
                        checked={ showBadge }
                        onChange={ () => setAttributes({ showBadge: ! showBadge }) }
                    />
                    {
                        showBadge &&
                        <Fragment>
                            <TextControl
                                label="Badge Title"
                                value={ badge }
                                onChange={ ( badge ) => setAttributes( { badge } ) }
                            />
                            <PanelColorSettings
                                title={ __( 'Color Settings' ) }
                                colorSettings={ [
                                    {
                                        value: badgeColor,
                                        onChange: ( colorValue ) => setAttributes( { badgeColor: colorValue } ),
                                        label: __( 'Color' ),
                                    },
                                    {
                                        value: badgeBg,
                                        onChange: ( colorValue ) => setAttributes( { badgeBg: colorValue } ),
                                        label: __( 'Background Color' ),
                                    },
                                ] }
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelBody 
                    title={__("Button Options")}
                    initialOpen= { false }
                >
                    <ToggleControl
                        label="Show Button"
                        checked={ showAffBtn }
                        onChange={ () => setAttributes({ showAffBtn: ! showAffBtn }) }
                    />
                    {
                        showAffBtn &&
                        <Fragment>
                            <TextControl
                                label="Button Label"
                                onChange={ ( affiliateBtnLabel ) => setAttributes( { affiliateBtnLabel } ) }
                                value={ affiliateBtnLabel }
                            />
                            <TextControl
                                label="Button Link"
                                onChange={ ( afbLink ) => setAttributes( { afbLink } ) }
                                value={ afbLink }
                            />
                            <ToggleControl
                                label="Open in New Tab"
                                checked={ afbNewTab }
                                onChange={ () => setAttributes({ afbNewTab: ! afbNewTab }) }
                            />
                            <PanelColorSettings
                                title={ __( 'Button Colors' ) }
                                colorSettings={ [
                                    {
                                        value: afbColor,
                                        onChange: ( colorValue ) => setAttributes( { afbColor: colorValue } ),
                                        label: __( 'Color' ),
                                    },
                                    {
                                        value: afbBg,
                                        onChange: ( colorValue ) => setAttributes( { afbBg: colorValue } ),
                                        label: __( 'Background Color' ),
                                    },
                                ] }
                            />
                        </Fragment>
                    }
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                {
                    url &&
                    <Toolbar>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                allowedTypes={["image"]}
                                value={id}
                                render={({ open }) => {
                                    return (
                                        <Button
                                            className="components-icon-button components-toolbar__control"
                                            label={__(
                                                "Edit Image"
                                            )}
                                            onClick={open}
                                            icon="edit"
                                        />
                                    );
                                }}
                            />
                        </MediaUploadCheck>
                        <Button
                            className="components-icon-button components-toolbar__control"
                            label={__(
                                "Delete Image"
                            )}
                            onClick={ () => setAttributes({ url:'', id: null, alt: '' }) }
                            icon="trash"
                        />
                    </Toolbar>
                }
            </BlockControls>
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
                    {
                        url ? (
                            <Fragment>
                                <div className="product-image-container">
                                    <img src={url} alt={alt} className="product-image" />
                                </div>
                            </Fragment>
                        ) : (
                            <MediaPlaceholder
                                icon="format-image"
                                onSelect={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                onFilesPreUpload={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                onSelectURL={ url => setAttributes({ url })}
                                allowedTypes={["image"]}
                                labels = { { title: 'Product Image' } }
                            />
                        )
                    }
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
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row9Height
                    }}
                >
                    <RichText
                        tagName="span"
                        value={ row9 }
                        onChange={ ( row9 ) => setAttributes( { row9 } ) }
                        allowedFormats={['core/bold', 'core/italic' ]}
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row10Height
                    }}
                >
                    <RichText
                        tagName="span"
                        value={ row10 }
                        onChange={ ( row10 ) => setAttributes( { row10 } ) }
                        allowedFormats={['core/bold', 'core/italic' ]}
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row11Height
                    }}
                >
                    <RichText
                        tagName="span"
                        value={ row11 }
                        onChange={ ( row11 ) => setAttributes( { row11 } ) }
                        allowedFormats={['core/bold', 'core/italic' ]}
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row12Height
                    }}
                >
                    <RichText
                        tagName="span"
                        value={ row12 }
                        onChange={ ( row12 ) => setAttributes( { row12 } ) }
                        allowedFormats={['core/bold', 'core/italic' ]}
                    />
                </div>
                <div 
                    className="dimmable-wrapper" 
                    style={{
                        height: row13Height
                    }}
                >
                    <RichText
                        tagName="span"
                        value={ row13 }
                        onChange={ ( row13 ) => setAttributes( { row13 } ) }
                        allowedFormats={['core/bold', 'core/italic' ]}
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
        </Fragment>    
    )
}

export default Edit;