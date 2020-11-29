import React from 'react'
import "./collection-overview.style.scss"
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../collection-preview/collection-preview";
import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";

const CollectionOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {collections && collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionOverview)