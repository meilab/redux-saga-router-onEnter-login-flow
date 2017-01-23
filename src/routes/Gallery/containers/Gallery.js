import React, {Component} from 'react'
import { connect } from 'react-redux'
import Actions from '../redux'
import R from 'ramda'
import styles from './GalleryStyle'

class Gallery extends Component {

  componentWillMount() {
    const { requestImage, gallery } = this.props

    if(R.isNil(gallery.images)) {
      requestImage()
    }
  }


  renderGallery( images, selectedImage, selectImageAttempt ) {
    return (
      <div style={styles.galleryContainer} >
        <div style={styles.galleryImage} >
          <img src={selectedImage} style={styles.image} role="presentation"/>
        </div>
        <div style={styles.scrollerContainer} >
          {
            images.map((image, index) => (
              <div key={index}
                style={styles.scrollerImage}
                onClick={() => selectImageAttempt(image)}
              >
                <img src={image} style={styles.image} role="presentation"/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  render() {
    const { selectImageAttempt, gallery } = this.props;
    const { images, selectedImage } = gallery;

    return (gallery.fetching ? 
            <div>Loading</div> :
            images && this.renderGallery(images, selectedImage, selectImageAttempt)
    )
  }
}

const mapStateToProps = R.pick(['gallery'])

const mapDispatchToProps = dispatch => {
  return {
    requestImage: () => dispatch(Actions.loadImageRequest()),
    selectImageAttempt: image => dispatch(Actions.selectImage(image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)